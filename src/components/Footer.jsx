import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return ( <
        footer className = "bg-[#020604] border-t border-[#00FF41]/10 pt-16 pb-8 px-6" >
        <
        div className = "max-w-7xl mx-auto" >
        <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-12 mb-16" >

        { /* Brand */ } <
        div className = "space-y-6" >
        <
        div className = "flex items-center gap-3" >
        <
        div className = "w-8 h-8 bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center font-mono text-[#00FF41] font-bold text-xs" > ZM < /div> <
        span className = "text-white font-mono font-black tracking-widest text-sm uppercase" >
        Zain_Maqbool < span className = "text-[#00FF41]" > v1 .0 < /span> < /
        span > <
        /div> <
        p className = "text-slate-500 font-mono text-xs leading-relaxed max-w-xs" >
        Design and develop by Zain_Maqbool - FULL STACK DEVELOPER. <
        /p> < /
        div >

        { /* Navigation */ } <
        div className = "grid grid-cols-2 gap-8" >
        <
        div className = "space-y-4" >
        <
        h4 className = "text-[#00FF41]/50 font-mono text-[10px] tracking-[0.3em] uppercase" > Directories < /h4> <
        nav className = "flex flex-col gap-2 text-slate-400 font-mono text-xs uppercase" >
        <
        a href = "#home"
        className = "hover:text-[#00FF41]" > /Home</a >
        <
        a href = "#about"
        className = "hover:text-[#00FF41]" > /About</a >
        <
        a href = "#projects"
        className = "hover:text-[#00FF41]" > /Projects</a >
        <
        /nav> < /
        div > <
        div className = "space-y-4" >
        <
        h4 className = "text-[#00FF41]/50 font-mono text-[10px] tracking-[0.3em] uppercase" > Socials < /h4> <
        nav className = "flex flex-col gap-2 text-slate-400 font-mono text-xs uppercase" >
        <
        a href = "https://github.com/chzain2005"
        target = "_blank"
        rel = "noreferrer"
        className = "hover:text-[#00FF41]" > Github < /a> <
        a href = "https://linkedin.com"
        target = "_blank"
        rel = "noreferrer"
        className = "hover:text-[#00FF41]" > Linkedin < /a> < /
        nav > <
        /div> < /
        div >

        { /* Status */ } <
        div className = "bg-[#1a1a1a]/30 border border-[#00FF41]/5 p-6 rounded-lg relative" >
        <
        div className = "absolute top-0 right-0 p-2" >
        <
        div className = "w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-ping" > < /div> < /
        div > <
        h4 className = "text-[#00FF41] font-mono text-[10px] tracking-widest uppercase mb-4" > Core_Metrics < /h4> <
        div className = "space-y-3 font-mono text-[10px] text-slate-500" >
        <
        div className = "flex justify-between" > < span > STATUS: < /span><span className="text-[#00FF41]">OPERATIONAL</span > < /div> <
        div className = "flex justify-between" > < span > LOCATION: < /span><span>ISLAMABAD, PK</span > < /div> < /
        div > <
        /div> < /
        div >

        { /* Bottom Bar */ } <
        div className = "pt-8 border-t border-[#00FF41]/5 flex flex-col md:flex-row justify-between items-center gap-6" >
        <
        p className = "text-slate-600 font-mono text-[10px] uppercase tracking-widest" > ©{ currentYear }
        ZM_SYSTEMS.ALL RGHTS RESERVED. <
        /p>

        <
        button onClick = { scrollToTop }
        className = "flex items-center gap-3 text-slate-500 hover:text-[#00FF41] font-mono text-[10px] tracking-widest uppercase" >
        RETURN_TO_TOP <
        div className = "w-8 h-8 border border-white/5 rounded flex items-center justify-center" > ↑
        <
        /div> < /
        button > <
        /div> < /
        div > <
        /footer>
    );
};

export default Footer;