import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('SYSTEM_READY_V1.0');

    // Safety check: Ensure the user is authorized
    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== 'true') {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/login');
    };

    return ( <
        div className = "min-h-screen p-8 pt-24 font-mono text-[#00FF41] bg-[#020604]" >
        <
        div className = "max-w-6xl mx-auto" >

        { /* Header Section */ } <
        div className = "flex justify-between items-end border-b border-[#00FF41]/20 pb-6 mb-8" >
        <
        div >
        <
        h1 className = "text-4xl font-black tracking-tighter italic uppercase" >
        Admin_Dashboard <
        /h1> <
        p className = "text-[10px] opacity-60 mt-2" >
        ID: 0x48291 // STATUS: <span className="animate-pulse">{status}</span>
        <
        /p> <
        /div> <
        button onClick = { handleLogout }
        className = "px-4 py-2 border border-red-500/50 text-red-500 text-[10px] uppercase hover:bg-red-500 hover:text-black transition-all" >
        Terminate_Session <
        /button> <
        /div>

        <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-6" > { /* Main Command Panel */ } <
        div className = "md:col-span-2 bg-[#1a1a1a]/40 border border-[#00FF41]/10 rounded-lg p-10 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(0,255,65,0.02)]" >
        <
        div className = "relative w-24 h-24 mb-8" >
        <
        div className = "absolute inset-0 border-2 border-[#00FF41]/20 rounded-full animate-ping" > < /div> <
        div className = "absolute inset-0 border border-[#00FF41]/40 rounded-full flex items-center justify-center" >
        <
        div className = "w-2 h-2 bg-[#00FF41] rounded-full shadow-[0_0_15px_#00FF41]" > < /div> <
        /div> <
        /div>

        <
        h3 className = "text-xl font-black uppercase mb-4 tracking-[0.2em]" >
        Inbound_Active <
        /h3>

        <
        p className = "text-slate-400 text-xs leading-relaxed max-w-sm mb-10 uppercase opacity-70" >
        The portfolio is now operating on a serverless protocol.All messages bypass the local database and are routed to your secure Gmail. <
        /p>

        <
        a href = "https://mail.google.com"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "group relative px-10 py-4 bg-[#00FF41] text-black text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105" >
        <
        span className = "relative z-10" > Open_Primary_Inbox < /span> <
        div className = "absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" > < /div> <
        /a> <
        /div>

        { /* System Diagnostics */ } <
        div className = "space-y-6" >
        <
        div className = "bg-[#1a1a1a]/40 border border-[#00FF41]/10 rounded-lg p-6 backdrop-blur-sm" >
        <
        h3 className = "text-[10px] font-bold uppercase mb-4 text-[#00FF41]/60 tracking-widest" > Protocol_Metrics < /h3> <
        div className = "space-y-4" >
        <
        div className = "flex justify-between items-center" >
        <
        span className = "text-[9px] uppercase opacity-50" > Provider < /span> <
        span className = "text-white text-[10px] font-bold" > EmailJS / V4 < /span> <
        /div> <
        div className = "flex justify-between items-center" >
        <
        span className = "text-[9px] uppercase opacity-50" > Encryption < /span> <
        span className = "text-white text-[10px] font-bold" > SSL_TLS_1 .3 < /span> <
        /div> <
        div className = "flex justify-between items-center" >
        <
        span className = "text-[9px] uppercase opacity-50" > Auth_Mode < /span> <
        span className = "text-[#00FF41] text-[10px] font-bold" > STATIC_ZAIN < /span> <
        /div> <
        /div> <
        /div>

        <
        div className = "bg-[#1a1a1a]/40 border border-[#00FF41]/10 rounded-lg p-6 backdrop-blur-sm" >
        <
        h3 className = "text-[10px] font-bold uppercase mb-3 text-[#00FF41]/60 tracking-widest" > Live_Logs < /h3> <
        div className = "text-[9px] font-mono space-y-1 overflow-hidden" >
        <
        p className = "opacity-30" > & gt; Initializing_Vite_HMR... < /p> <
        p className = "opacity-40" > & gt; Tailwind_v4_Engine: ON < /p> <
        p className = "opacity-60" > & gt; Route: /admin-dashboard</p >
        <
        p className = "text-[#00FF41] animate-pulse" > & gt; Monitoring_Gmail_Link... < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default Dashboard;