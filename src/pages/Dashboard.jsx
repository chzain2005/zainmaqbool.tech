import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('FETCHING_DATA...');
    const [messages, setMessages] = useState([]);

    // 1. Security & Data Fetching
    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== 'true') {
            navigate('/login');
        } else {
            fetchMessages();
        }
    }, [navigate]);

    const fetchMessages = async() => {
        try {
            const response = await fetch('zainmaqbooltech-production.up.railway.app/api/messages');
            const data = await response.json();
            setMessages(data);
            setStatus('SYSTEM_READY_V1.0');
        } catch (err) {
            console.error("Signal lost:", err);
            setStatus('CONNECTION_ERROR');
        }
    };

    // 2. Delete Transmission
    const deleteMessage = async(id) => {
        if (!window.confirm("CONFIRM_DELETION: Permanent removal of transmission?")) return;

        try {
            await fetch(`zainmaqbooltech-production.up.railway.app/api/messages/${id}`, { method: 'DELETE' });
            setMessages(messages.filter(msg => msg._id !== id));
        } catch (err) {
            console.error("Delete failed:", err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/login');
    };

    return ( <
        div className = "min-h-screen p-8 pt-24 font-mono text-[#00FF41]" >
        <
        div className = "max-w-6xl mx-auto" > { /* Header Section */ } <
        div className = "flex justify-between items-end border-b border-[#00FF41]/20 pb-6 mb-8" >
        <
        div >
        <
        h1 className = "text-4xl font-black tracking-tighter italic uppercase" > Admin_Dashboard < /h1> <
        p className = "text-[10px] opacity-60 mt-2" > ID: 0x48291 // STATUS: {status}</p>
        <
        /div> <
        button onClick = { handleLogout }
        className = "px-4 py-2 border border-red-500/50 text-red-500 text-[10px] uppercase hover:bg-red-500 hover:text-black transition-all" >
        Terminate_Session <
        /button> < /
        div >

        <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-6" > { /* Incoming Transmissions (Messages) */ } <
        div className = "md:col-span-2 bg-[#1a1a1a]/40 border border-[#00FF41]/10 rounded-lg p-6 backdrop-blur-sm" >
        <
        h3 className = "text-xs font-bold uppercase mb-4 border-b border-[#00FF41]/10 pb-2 flex justify-between" >
        <
        span > Incoming_Transmissions < /span> <
        span className = "opacity-40" > { messages.length }
        Units < /span> < /
        h3 >

        <
        div className = "space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar" > {
            messages.length > 0 ? messages.map((msg) => ( <
                div key = { msg._id }
                className = "group p-4 border border-[#00FF41]/5 bg-black/20 rounded hover:border-[#00FF41]/30 transition-all" >
                <
                div className = "flex justify-between items-start mb-2" >
                <
                div className = "flex flex-col" >
                <
                span className = "text-[#00FF41] font-bold text-xs uppercase tracking-tight" > { msg.name } < /span> <
                span className = "text-[9px] opacity-50 lowercase" > { msg.email } < /span> < /
                div > <
                div className = "flex items-center gap-4" >
                <
                span className = "text-[9px] opacity-40 italic" > { new Date(msg.date).toLocaleString() } < /span> <
                button onClick = {
                    () => deleteMessage(msg._id)
                }
                className = "text-red-500 opacity-0 group-hover:opacity-100 text-[10px] hover:underline transition-opacity" > [DELETE] <
                /button> < /
                div > <
                /div> <
                p className = "text-white/80 text-xs leading-relaxed border-l border-[#00FF41]/20 pl-3 mt-3" > { msg.message } < /p> < /
                div >
            )) : ( <
                p className = "text-[10px] opacity-50 italic text-center py-20 uppercase tracking-widest animate-pulse" >
                --No transmissions found in buffer--
                <
                /p>
            )
        } <
        /div> < /
        div >

        { /* Sidebar Stats */ } <
        div className = "space-y-6" >
        <
        div className = "bg-[#1a1a1a]/40 border border-[#00FF41]/10 rounded-lg p-6" >
        <
        h3 className = "text-xs font-bold uppercase mb-4" > Core_Metrics < /h3> <
        div className = "space-y-3" >
        <
        div className = "flex justify-between text-[10px]" >
        <
        span > DB_CONNECTION: < /span> <
        span className = "text-white uppercase" > { status === 'SYSTEM_READY_V1.0' ? 'Active' : 'Offline' } < /span> < /
        div > <
        div className = "flex justify-between text-[10px]" >
        <
        span > TOTAL_MESSAGES: < /span> <
        span className = "text-white" > { messages.length } < /span> < /
        div > <
        div className = "flex justify-between text-[10px]" >
        <
        span > SESSION_LOG: < /span> <
        span className = "text-white" > USER_ZAIN < /span> < /
        div > <
        /div> < /
        div >

        <
        div className = "bg-[#1a1a1a]/40 border border-[#00FF41]/10 rounded-lg p-6" >
        <
        h3 className = "text-xs font-bold uppercase mb-2" > System_Log < /h3> <
        p className = "text-[9px] opacity-40 leading-tight" >
        &
        gt; Initializing encryption... < br / >
        &
        gt; Handshake complete... < br / >
        &
        gt; Listening
        for port 5000... <
        /p> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >
    );
};

export default Dashboard;