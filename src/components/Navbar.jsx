import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Layout, GraduationCap, Mail, User, Menu, X } from 'lucide-react';

const Navbar = () => {
        const [time, setTime] = useState(new Date());
        const [isOpen, setIsOpen] = useState(false);

        useEffect(() => {
            const timer = setInterval(() => setTime(new Date()), 1000);
            return () => clearInterval(timer);
        }, []);

        const navLinks = [{
                id: 'home',
                label: 'Home',
                icon: < Cpu size = { 18 }
                /> }, {
                id: 'about',
                label: 'About',
                icon: < User size = { 18 }
                /> }, {
                id: 'toolbox',
                label: 'Toolbox',
                icon: < Terminal size = { 18 }
                /> }, {
                id: 'projects',
                label: 'Projects',
                icon: < Layout size = { 18 }
                /> }, {
                id: 'education',
                label: 'Education',
                icon: < GraduationCap size = { 18 }
                /> }, {
                id: 'contact',
                label: 'Contact',
                icon: < Mail size = { 18 }
                /> },
            ];

            const handleScroll = (id) => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false); // Close mobile menu after clicking
                }
            };

            return ( <
                nav className = "fixed top-0 left-0 w-full z-[100] border-b border-osAccent/20 bg-osWindow/80 backdrop-blur-xl" > { /* Main Bar - Increased Height (py-6) */ } <
                div className = "w-full flex items-center justify-between px-6 md:px-12 py-6" >

                { /* Left: OS Branding */ } <
                div className = "flex items-center gap-3 font-bold text-osAccent" >
                <
                div className = "hidden sm:flex gap-1.5" >
                <
                div className = "w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" / >
                <
                div className = "w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]" / >
                <
                div className = "w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" / >
                <
                /div> <
                span className = "tracking-[0.2em] text-sm md:text-base uppercase font-black" >
                ZM < span className = "hidden sm:inline" > v1 .0 < /span> < /
                span > <
                /div>

                { /* Center: Desktop Navigation */ } <
                div className = "hidden lg:flex items-center gap-10" > {
                    navLinks.map((link) => ( <
                        button key = { link.id }
                        onClick = {
                            () => handleScroll(link.id)
                        }
                        className = "flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-osAccent transition-all duration-300 hover:scale-105" > { link.icon } <
                        span className = "uppercase tracking-widest" > { link.label } < /span> < /
                        button >
                    ))
                } <
                /div>

                { /* Right: Clock & Mobile Toggle */ } <
                div className = "flex items-center gap-6" >
                <
                div className = "hidden md:block text-sm font-mono text-osAccent bg-osAccent/10 px-3 py-1 rounded border border-osAccent/20" > { time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) } <
                /div>

                { /* Mobile Menu Button */ } <
                button className = "lg:hidden text-osAccent p-2"
                onClick = {
                    () => setIsOpen(!isOpen)
                } > { isOpen ? < X size = { 28 } /> : <Menu size={28} / > } <
                /button> < /
                div > <
                /div>

                { /* Mobile Dropdown Menu */ } <
                AnimatePresence > {
                    isOpen && ( <
                        motion.div initial = {
                            { opacity: 0, height: 0 }
                        }
                        animate = {
                            { opacity: 1, height: 'auto' }
                        }
                        exit = {
                            { opacity: 0, height: 0 }
                        }
                        className = "lg:hidden bg-black/95 border-t border-osAccent/20 overflow-hidden" >
                        <
                        div className = "flex flex-col p-6 gap-6" > {
                            navLinks.map((link) => ( <
                                button key = { link.id }
                                onClick = {
                                    () => handleScroll(link.id)
                                }
                                className = "flex items-center gap-4 text-lg font-mono text-slate-300 hover:text-osAccent" > { link.icon } <
                                span className = "uppercase tracking-widest" > { link.label } < /span> < /
                                button >
                            ))
                        } <
                        div className = "text-osAccent font-mono pt-4 border-t border-osAccent/10" >
                        SYSTEM_TIME: { time.toLocaleTimeString() } <
                        /div> < /
                        div > <
                        /motion.div>
                    )
                } <
                /AnimatePresence> < /
                nav >
            );
        };

        export default Navbar;