const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

// 1. Models
const User = require('./models/User');
const Message = require('./models/Message');
const Project = require('./models/Project');

const app = express();

// UPDATED CORS: Added Netlify and your custom domain links
app.use(cors({
    origin: [
        "https://zaimaqbool.tech",
        "https://www.zaimaqbool.tech",
        "https://zainmaqbooltech.netlify.app",
        "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
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

// NEW: Root Route to verify server is alive
app.get('/', (req, res) => {
    res.send("System_Backend: Operational and Active.");
});

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
        console.error("CONTACT_ERROR:", error);
        res.status(500).json({ success: false, message: "Signal_Failed" });
    }
});

// Admin Login
app.post('/api/login', async(req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ success: true, message: "Access_Granted" });
        } else {
            res.status(401).json({ success: false, message: "Access_Denied" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Server_Error" });
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

app.get('/api/projects', async(req, res) => {
    try {
        const projects = await Project.find().sort({ date: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});

app.post('/api/projects', async(req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.delete('/api/projects/:id', async(req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

// 4. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`----------------------------------------`);
    console.log(`SERVER_STATUS: Active on Port ${PORT}`);
    console.log(`ENDPOINTS_INITIALIZED: Contact, Login, Messages, Projects`);
    console.log(`----------------------------------------`);
});