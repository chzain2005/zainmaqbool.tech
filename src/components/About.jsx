import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
        const terminalLines = [
            { label: "User", value: "Muhammad Zain Maqbool" },
            { label: "Role", value: "Full Stack Developer" },
            { label: "Focus", value: "Systems Architecture & Software Design" },
            { label: "Status", value: "Open for Opportunities" },
            { label: "Location", value: "Islamabad, Pakistan" },
        ];

        const stats = [
            { label: "Projects Built", value: "5+" },
            { label: "Certifications", value: "4" },
            { label: "Tech Stacks", value: "5+" },
            { label: "Expected Graduation", value: "2027" },
        ];

        return ( <
                section id = "about"
                className = "py-24 px-6 flex flex-col items-center" >
                <
                motion.div initial = {
                    { opacity: 0, y: 20 }
                }
                whileInView = {
                    { opacity: 1, y: 0 }
                }
                className = "max-w-5xl w-full" > { /* Main Terminal Window */ } <
                div className = "mb-10" >
                <
                div className = "bg-[#1a1a1a] border-x border-t border-[#00FF41]/30 rounded-t-lg p-3 flex items-center gap-2" >
                <
                div className = "flex gap-1.5" >
                <
                div className = "w-3 h-3 rounded-full bg-red-500/50" / >
                <
                div className = "w-3 h-3 rounded-full bg-yellow-500/50" / >
                <
                div className = "w-3 h-3 rounded-full bg-green-500/50" / >
                <
                /div> <
                span className = "text-[#00FF41]/50 font-mono text-xs ml-2 uppercase tracking-widest" > sys_info.sh < /span> < /
                div >

                <
                div className = "bg-black/60 backdrop-blur-md border border-[#00FF41]/30 p-8 rounded-b-lg font-mono relative overflow-hidden" >
                <
                div className = "absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF41]/5 to-transparent pointer-events-none h-[200%] animate-scanline" / >

                <
                div className = "grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10" > { /* Left Column: System Specs */ } <
                div >
                <
                h3 className = "text-[#00FF41] text-xl mb-6 flex items-center gap-2" >
                <
                span > [ < /span> System_Specs <span>]</span >
                    <
                    /h3> <
                    div className = "space-y-4" > {
                        terminalLines.map((line, i) => ( <
                            div key = { i }
                            className = "flex flex-col border-l border-[#00FF41]/20 pl-4" >
                            <
                            span className = "text-[#00FF41]/40 text-xs uppercase tracking-widest" > { line.label } < /span> <
                            span className = "text-slate-200 text-sm" > { line.value } < /span> < /
                            div >
                        ))
                    } <
                    /div> < /
                    div >

                    { /* Right Column: Bio */ } <
                    div >
                    <
                    h3 className = "text-[#00FF41] text-xl mb-6 flex items-center gap-2" >
                    <
                    span > [ < /span> Bio <span>]</span >
                        <
                        /h3> <
                        p className = "text-slate-400 leading-relaxed text-sm" >
                        A passionate Computer Science undergraduate with a strong interest in software development and modern application technologies.Experienced in developing desktop and web applications with a focus on both frontend and backend development. <
                        /p> <
                        p className = "text-slate-400 leading-relaxed text-sm mt-4" >
                        I love turning complex problems into simple, beautiful, and intuitive solutions
                        while continuously improving my technical skills. <
                        /p> < /
                        div > <
                        /div>

                        <
                        div className = "mt-12 pt-6 border-t border-[#00FF41]/10 flex justify-between items-center text-[10px] text-[#00FF41]/30 uppercase tracking-[0.2em]" >
                        <
                        span > Memory: Optimized < /span> <
                        span > Task_ID: 0x7E3A < /span> < /
                        div > <
                        /div> < /
                        div >

                        { /* High-Impact Stats Grid */ } <
                        div className = "grid grid-cols-2 md:grid-cols-4 gap-4" > {
                            stats.map((stat, index) => ( <
                                motion.div key = { index }
                                initial = {
                                    { opacity: 0, scale: 0.9 }
                                }
                                whileInView = {
                                    { opacity: 1, scale: 1 }
                                }
                                transition = {
                                    { delay: index * 0.1 }
                                }
                                className = "bg-[#1a1a1a]/40 border border-[#00FF41]/10 p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:border-[#00FF41]/40 transition-all" >
                                <
                                h2 className = "text-4xl md:text-5xl font-black mb-2 bg-gradient-to-br from-[#00FF41] via-[#01c281] to-white bg-clip-text text-transparent tracking-tighter italic" > { stat.value } <
                                /h2> <
                                p className = "text-[#00FF41]/60 font-mono text-[10px] uppercase tracking-[0.2em]" > { stat.label } <
                                /p> < /
                                motion.div >
                            ))
                        } <
                        /div> < /
                        motion.div > <
                        /section>
                    );
                };

                export default About;