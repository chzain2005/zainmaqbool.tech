import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, Library, Terminal } from 'lucide-react';

const Education = () => {
    const educationData = [{
            institution: "Sir Syed CASE Institute of Technology",
            degree: "BS Computer Science",
            location: "Islamabad, Pakistan",
            status: "Expected: 2027",
            icon: < GraduationCap className = "text-[#00FF41]"
            size = { 20 }
            />,
            iconBg: "bg-[#00FF41]/10",
            id: "EDU_001"
        },
        {
            institution: "FG Degree College For Men",
            degree: "FSC Pre-Engineering",
            location: "Wah cantt, Pakistan",
            status: "Completed: 2023",
            icon: < Library className = "text-[#00FF41]"
            size = { 20 }
            />,
            iconBg: "bg-[#00FF41]/10",
            id: "EDU_002"
        }
    ];

    return ( <
        section id = "education"
        className = "py-24 px-4 md:px-6 flex flex-col items-center" >
        <
        div className = "max-w-6xl w-full" >

        { /* OS Section Header - Improved Mobile Text Scaling */ } <
        div className = "flex items-center gap-4 md:gap-6 mb-16" >
        <
        div className = "hidden sm:flex gap-2" >
        <
        div className = "w-3 h-3 rounded-full bg-[#ff5f56]" / >
        <
        div className = "w-3 h-3 rounded-full bg-[#ffbd2e]" / >
        <
        div className = "w-3 h-3 rounded-full bg-[#27c93f]" / >
        <
        /div> <
        h2 className = "text-[#00FF41] font-mono text-xl md:text-3xl tracking-[0.2em] md:tracking-[0.4em] uppercase font-black" >
        Background_Education <
        /h2> <
        div className = "h-[1px] flex-1 bg-gradient-to-r from-[#00FF41]/20 to-transparent" > < /div> < /
        div >

        { /* Cards Grid */ } <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-8" > {
            educationData.map((edu, idx) => ( <
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
                className = "bg-[#1a1a1a]/40 border border-[#00FF41]/10 rounded-xl overflow-hidden hover:border-[#00FF41]/40 transition-all duration-500 group relative" > { /* Window Header Bar */ } <
                div className = "bg-[#1a1a1a] p-3 border-b border-[#00FF41]/10 flex justify-between items-center" >
                <
                div className = "flex items-center gap-2" >
                <
                Terminal size = { 14 }
                className = "text-[#00FF41]/60" / >
                <
                span className = "font-mono text-[10px] text-slate-500 uppercase tracking-widest" >
                Entry: { edu.id } <
                /span> < /
                div > <
                div className = "h-1 w-8 bg-[#00FF41]/20 rounded-full" / >
                <
                /div>

                { /* Main Content - Flex-col for mobile, Row for desktop */ } <
                div className = "p-6 md:p-8" >
                <
                div className = "flex flex-col-reverse md:flex-row items-start justify-between gap-4 mb-6" >
                <
                div className = "w-full" >
                <
                h3 className = "text-white text-lg md:text-xl font-bold group-hover:text-[#00FF41] transition-colors mb-1 break-words" > { edu.institution } <
                /h3> <
                p className = "text-[#00FF41]/80 font-mono text-xs uppercase tracking-wider" > { edu.degree } <
                /p> < /
                div > <
                div className = { `shrink-0 w-12 h-12 ${edu.iconBg} rounded-lg flex items-center justify-center border border-[#00FF41]/20` } > { edu.icon } <
                /div> < /
                div >

                { /* Metadata with System look */ } <
                div className = "space-y-4 pt-4 border-t border-[#00FF41]/5" >
                <
                div className = "flex items-center gap-3" >
                <
                div className = "p-1.5 bg-slate-800/50 rounded shrink-0" >
                <
                MapPin size = { 14 }
                className = "text-rose-500" / >
                <
                /div> <
                span className = "text-slate-400 font-mono text-xs tracking-tight truncate" > { edu.location } <
                /span> < /
                div >

                <
                div className = "flex items-center gap-3" >
                <
                div className = "p-1.5 bg-slate-800/50 rounded shrink-0" >
                <
                Calendar size = { 14 }
                className = "text-blue-400" / >
                <
                /div> <
                span className = "text-[#00FF41]/60 font-mono text-xs tracking-tight" > { edu.status } <
                /span> < /
                div > <
                /div> < /
                div > <
                /motion.div>
            ))
        } <
        /div>

        { /* Footer Note */ } <
        p className = "mt-12 text-center font-mono text-[10px] text-slate-600 uppercase tracking-[0.3em] md:tracking-[0.5em]" >
        // End_of_Historical_Log
        <
        /p> < /
        div > <
        /section>
    );
};

export default Education;