import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout/Pages
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Toolbox from './components/Toolbox';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// New Admin Components
import Login from './components/Login';
import Dashboard from './pages/Dashboard';

function App() {
    return ( <
        Router >
        <
        main className = "relative min-h-screen bg-[#020604] scroll-smooth text-slate-100 selection:bg-[#00FF41]/30" >

        <
        Routes > { /* MAIN PORTFOLIO ROUTE */ } <
        Route path = "/"
        element = { <
            >
            <
            Navbar / >
            <
            div className = "relative z-10 pt-16" >
            <
            Hero / >
            <
            About / >
            <
            Toolbox / >
            <
            Projects / >
            <
            Education / >
            <
            Contact / >
            <
            Footer / >
            <
            /div> < / >
        }
        />

        { /* ADMIN ROUTES */ } <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/admin-dashboard"
        element = { < Dashboard / > }
        /> < /
        Routes >

        { /* BACKGROUND ELEMENTS (Shared across all pages) */ } <
        div className = "fixed inset-0 pointer-events-none z-0" >
        <
        div className = "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" > < /div> <
        div className = "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00FF41]/5 rounded-full blur-[120px]" > < /div> <
        div className = "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" > < /div> < /
        div > <
        /main> < /
        Router >
    );
}

export default App;