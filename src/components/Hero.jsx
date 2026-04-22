import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/zain.jpeg';

const Hero = () => {
    const techStack = ["React.js", "MySQL", "Tailwind", "Flutter", "Python"];

    return ( <
        section id = "home"
        className = "relative min-h-screen flex flex-col items-center justify-start pt-32 md:pt-22 px-6" > { /* Ambient Green Glow */ } <
        div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" / >

        <
        div className = "flex flex-col md:flex-row items-center gap-16 max-w-6xl w-full" > { /* Left Side: Text Content */ } <
        div className = "flex-1 flex flex-col items-center md:items-start text-center md:text-left" >
        <
        motion.div initial = {
            { opacity: 0, x: -20 }
        }
        whileInView = {
            { opacity: 1, x: 0 }
        }
        className = "text-[#00FF41] font-mono mb-2 flex items-center gap-2" >
        <
        span > { `>` } < /span> <
        TypeAnimation sequence = {
            ['Initializing Personal_Profile...', 1000]
        }
        wrapper = "span"
        cursor = { true }
        repeat = { Infinity }
        /> < /
        motion.div >

        <
        motion.h1 initial = {
            { opacity: 0, y: 20 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { delay: 0.2 }
        }
        className = "text-5xl md:text-7xl font-extrabold mb-4 leading-tight uppercase tracking-tight" >
        <
        span className = "text-transparent bg-clip-text bg-gradient-to-r from-[#00743e] via-[#01c281] to-white" >
        Muhammad Zain Maqbool <
        /span> < /
        motion.h1 >

        <
        motion.h2 initial = {
            { opacity: 0, y: 10 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        transition = {
            { delay: 0.3 }
        }
        className = "text-[#00FF41] font-mono text-xl md:text-xl mb-6 tracking-[0.3em] uppercase opacity-80" >
        Full Stack Developer <
        /motion.h2>

        <
        motion.p initial = {
            { opacity: 0 }
        }
        whileInView = {
            { opacity: 1 }
        }
        transition = {
            { delay: 0.4 }
        }
        className = "text-slate-400 text-lg max-w-lg mb-12 leading-relaxed" >
        Building modern web and desktop applications with clean design and efficient performance. <
        /motion.p>

        { /* Action Buttons Section */ } <
        div className = "flex flex-col items-center md:items-start w-full" >
        <
        div className = "flex flex-row flex-wrap justify-center md:justify-start gap-6 mb-12" >
        <
        a href = "#projects" >
        <
        button className = "px-12 py-6 bg-[#00FF41]/10 border-2 border-[#00FF41] hover:bg-[#00FF41] hover:text-emerald-900 text-[#00FF41] rounded-none transition-all font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,65,0.3)]" >
        View My Work <
        /button> < /
        a >

        <
        a href = "#contact" >
        <
        button className = "px-12 py-6 bg-[#00FF41]/10 border-2 border-[#00FF41] hover:bg-[#00FF41] hover:text-emerald-900 text-[#00FF41] rounded-none transition-all font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,65,0.3)]" >
        Contact Me <
        /button> < /
        a > <
        /div>

        { /* Social Buttons Row */ } <
        div className = "flex flex-row flex-wrap justify-center md:justify-start gap-4" > {
            [
                { label: 'GitHub', link: 'https://github.com/chzain2005' },
                { label: 'LinkedIn', link: 'https://www.linkedin.com/in/muhammad-zain-maqbool-7b7127320/' },
                { label: 'Email', link: 'mailto:arzain.maqboolse@email.com' }
            ].map((social) => ( <
                a key = { social.label }
                href = { social.link }
                className = "btn-social-chip" > { social.label } <
                /a>
            ))
        } <
        /div> < /
        div > <
        /div>

        { /* Right Side: Round Image & Tech Stack */ } <
        div className = "relative" >
        <
        motion.div initial = {
            { scale: 0.8, opacity: 0 }
        }
        whileInView = {
            { scale: 1, opacity: 1 }
        }
        className = "relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[#00FF41]/50 overflow-hidden bg-black shadow-[0_0_30px_rgba(0,255,65,0.15)]" >
        <
        img src = { profilePic }
        alt = "Profile"
        className = "w-full h-full object-cover" / >
        <
        /motion.div>

        {
            techStack.map((tech, index) => ( <
                motion.div key = { tech }
                animate = {
                    { y: [0, -20, 0] }
                }
                transition = {
                    { duration: 3, repeat: Infinity, delay: index * 0.5, ease: "easeInOut" }
                }
                className = "absolute px-4 py-2 bg-black/80 backdrop-blur-md border border-[#00FF41] rounded-full text-[10px] font-bold text-[#00FF41] shadow-xl uppercase tracking-wider"
                style = {
                    {
                        top: index < 3 ? "5%" : "85%",
                        left: index % 2 === 0 ? "-10%" : "80%",
                    }
                } > { tech } <
                /motion.div>
            ))
        } <
        /div> < /
        div > <
        /section>
    );
};

export default Hero;