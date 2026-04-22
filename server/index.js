const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

// 1. Models
const User = require('./models/User');
const Message = require('./models/Message');
const Project = require('./models/Project'); // Moved to top for clarity

const app = express();
app.use(cors({
    origin: ["https://zainmaqbool.tech", "http://localhost:5173"]
}));
app.use(express.json());

// 2. Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("System_Database: Online"))
    .catch(err => console.log("System_Database: Connection_Error", err));

// 3. Email Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

/* --- API ROUTES --- */

// Contact Form Route
app.post('/api/contact', async(req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: `Portfolio Contact: ${name} - ${subject}`,
            text: `From: ${name} (${email})\n\nMessage:\n${message}`,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Signal_Sent" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Signal_Failed" });
    }
});

// Admin Login
app.post('/api/login', async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.json({ success: true, message: "Access_Granted" });
    } else {
        res.status(401).json({ success: false, message: "Access_Denied" });
    }
});

// Dashboard: Messages
app.get('/api/messages', async(req, res) => {
    try {
        const messages = await Message.find().sort({ date: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch transmissions" });
    }
});

app.delete('/api/messages/:id', async(req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Transmission_Deleted" });
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

/* --- PROJECT MANAGER ROUTES --- */

// Get all projects
app.get('/api/projects', async(req, res) => {
    try {
        const projects = await Project.find().sort({ date: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});

// Add a new project
app.post('/api/projects', async(req, res) => {
    console.log("INCOMING_PROJECT_REQUEST:", req.body); // Check terminal for this!
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        console.log("SUCCESS: Project saved to DB");
        res.status(201).json({ success: true });
    } catch (err) {
        console.error("PROJECT_SAVE_ERROR:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Delete a project
app.delete('/api/projects/:id', async(req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

// 4. Start Server (Moved to very bottom)
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`----------------------------------------`);
    console.log(`SERVER_STATUS: Active on Port ${PORT}`);
    console.log(`ENDPOINTS_INITIALIZED: Contact, Login, Messages, Projects`);
    console.log(`----------------------------------------`);
});