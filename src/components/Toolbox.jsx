import React from 'react';
import { motion } from 'framer-motion';

const Toolbox = () => {
    const skills = [
        { category: "Frontend", tech: ["React.js", "HTML", "Javascript", "Tailwind CSS", "Bootstrap"] },
        { category: "Framework", tech: ["Node.js", "Next.js", "React.js", ".NET", "Windows Forms"] },
        { category: "Languages", tech: ["JavaScript", "Python", "C++", "HTML/CSS"] },
        { category: "Tools", tech: ["Github", "Postman", "MySQL"] }
    ];

    return ( <
        section id = "toolbox"
        className = "py-32 px-6 flex flex-col items-center" >
        <
        div className = "max-w-7xl w-full" > { /* Increased container width */ }

        { /* Section Header - Bigger Text */ } <
        div className = "flex items-center gap-6 mb-20" >
        <
        div className = "h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#00FF41]/30" > < /div> <
        h2 className = "text-[#00FF41] font-mono text-3xl md:text-4xl tracking-[0.4em] uppercase font-black" >
        Toolbox <
        /h2> <
        div className = "h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#00FF41]/30" > < /div> < /
        div >

        { /* The Grid - Larger Cards with Same Size */ } <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" > {
            skills.map((skillGroup, idx) => ( <
                motion.div key = { idx }
                initial = {
                    { opacity: 0, scale: 0.95 }
                }
                whileInView = {
                    { opacity: 1, scale: 1 }
                }
                transition = {
                    { delay: idx * 0.1 }
                }
                className = "group relative h-[320px] flex flex-col" // Fixed height for uniformity
                >
                { /* Category Label - Bigger */ } <
                div className = "flex items-center justify-between mb-4 px-2" >
                <
                span className = "text-xs md:text-sm font-mono text-[#00FF41] uppercase tracking-[0.3em] font-bold" > { skillGroup.category } <
                /span> <
                div className = "w-2.5 h-2.5 rounded-full bg-[#00FF41]/20 group-hover:bg-[#00FF41] group-hover:shadow-[0_0_15px_#00FF41] transition-all" / >
                <
                /div>

                { /* Card Body - Expanded Size */ } <
                div className = "flex-1 bg-[#1a1a1a]/40 border-2 border-[#00FF41]/10 p-8 rounded-2xl backdrop-blur-md group-hover:border-[#00FF41]/60 transition-all duration-500 flex flex-col justify-center" >
                <
                div className = "flex flex-wrap gap-3 justify-center" > {
                    skillGroup.tech.map((item, i) => ( <
                        span key = { i }
                        className = "px-4 py-2 border border-[#00FF41]/20 bg-[#00FF41]/5 text-[#00FF41] font-mono text-sm md:text-base rounded-md group-hover:bg-[#00FF41]/10 transition-colors" > { item } <
                        /span>
                    ))
                } <
                /div> < /
                div >

                { /* Thick side accent */ } <
                div className = "absolute -left-[2px] top-1/4 h-1/2 w-[4px] bg-[#00FF41]/0 group-hover:bg-[#00FF41] rounded-full transition-all duration-300" / >
                <
                /motion.div>
            ))
        } <
        /div>

        { /* Footer - Bigger Text */ } <
        motion.p initial = {
            { opacity: 0 }
        }
        whileInView = {
            { opacity: 1 }
        }
        className = "mt-20 text-center font-mono text-sm text-slate-500 uppercase tracking-[0.5em] opacity-40" >
        // Modules_Loaded: 100%
        <
        /motion.p> < /
        div > <
        /section>
    );
};

export default Toolbox;