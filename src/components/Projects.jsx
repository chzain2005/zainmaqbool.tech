import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Code2 } from 'lucide-react';

const Projects = () => {
    const projectData = [{
            title: "AI Product Sourcing Bot",
            category: "Intelligent Automation",
            desc: "An end-to-end sourcing engine that automates data extraction from Excel records. Uses Gemini AI to analyze raw HTML and generate production-ready descriptions.",
            tech: ["Python", "Gemini AI", "Tkinter", "BeautifulSoup"],
            link: "https://www.linkedin.com/posts/muhammad-zain-maqbool-7b7127320_python-ai-automation-activity-7324520380763697153-w5vM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEtIbsBoiCns2A3e73YgcSF-Djl8BC1cOI"
        },
        {
            title: "Gym Management System",
            category: "Enterprise ERP",
            desc: "A high-performance desktop suite built with C# and WinForms. Features a normalized MySQL backend for secure member and payment tracking.",
            tech: ["C#", ".NET WinForms", "MySQL"],
            link: "#"
        },
        {
            title: "The Techvation",
            category: "Full Stack Web",
            desc: "A dynamic digital platform featuring a custom PHP backend and high-performance JS frontend for a seamless, modular user experience.",
            tech: ["PHP", "JavaScript", "HTML5", "CSS3"],
            link: "https://thetechvation.com/"
        },
        {
            title: "Odoo ERP Customization",
            category: "Business Management",
            desc: "Tailored Odoo implementation with custom Python modules for inventory automation and high-concurrency database reporting.",
            tech: ["Odoo", "Python", "PostgreSQL"],
            link: "#"
        }
    ];

    return ( <
        section id = "projects"
        className = "py-24 px-6 flex flex-col items-center bg-black/40" >
        <
        div className = "max-w-6xl w-full" > { /* Slightly tighter container */ }

        { /* Section Header - Scaled down */ } <
        div className = "flex items-center gap-6 mb-16" >
        <
        h2 className = "text-[#00FF41] font-mono text-2xl md:text-3xl tracking-[0.4em] uppercase font-black" >
        Active_Processes <
        /h2> <
        div className = "h-[1px] flex-1 bg-gradient-to-r from-[#00FF41]/30 to-transparent" > < /div> < /
        div >

        { /* Projects Grid - Smaller Card Layout */ } <
        div className = "grid grid-cols-1 lg:grid-cols-2 gap-8" > {
            projectData.map((project, idx) => ( <
                motion.div key = { idx }
                initial = {
                    { opacity: 0, y: 20 }
                }
                whileInView = {
                    { opacity: 1, y: 0 }
                }
                viewport = {
                    { once: true }
                }
                className = "group relative bg-[#1a1a1a]/40 border border-[#00FF41]/10 rounded-xl overflow-hidden hover:border-[#00FF41]/40 transition-all duration-500" > { /* Project Top Bar - Slimmer */ } <
                div className = "bg-[#1a1a1a] p-3 border-b border-[#00FF41]/10 flex justify-between items-center" >
                <
                div className = "flex items-center gap-2" >
                <
                Code2 size = { 14 }
                className = "text-[#00FF41]/60" / >
                <
                span className = "font-mono text-[9px] text-slate-500 uppercase tracking-widest" >
                PID: 00 { idx + 1 } <
                /span> < /
                div > <
                a href = { project.link }
                className = "text-slate-500 hover:text-[#00FF41] transition-colors" >
                <
                ExternalLink size = { 16 }
                /> < /
                a > <
                /div>

                { /* Project Content - Reduced Padding & Font Sizes */ } <
                div className = "p-7 text-left" >
                <
                span className = "text-[#00FF41]/60 font-mono text-[10px] uppercase tracking-[0.2em] mb-2 block" > { project.category } <
                /span> <
                h3 className = "text-2xl font-black text-white mb-3 group-hover:text-[#00FF41] transition-colors uppercase tracking-tight" > { project.title } <
                /h3> <
                p className = "text-slate-400 text-sm leading-relaxed mb-6 " > { project.desc } <
                /p>

                { /* Tech Chips - Smaller */ } <
                div className = "flex flex-wrap gap-2" > {
                    project.tech.map((t, i) => ( <
                        span key = { i }
                        className = "px-3 py-1 bg-[#00FF41]/5 border border-[#00FF41]/10 rounded font-mono text-[10px] text-[#00FF41]/80" > { t } <
                        /span>
                    ))
                } <
                /div> < /
                div > <
                /motion.div>
            ))
        } <
        /div> < /
        div > <
        /section>
    );
};

export default Projects;