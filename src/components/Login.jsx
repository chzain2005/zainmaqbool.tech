import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // --- CONFIGURATION ---
        // Since the Railway backend is gone, we define your admin access here.
        // For security, you can change these to your preferred credentials.
        const ADMIN_USERNAME = "admin";
        const ADMIN_PASSKEY = "admin"; // Replace with your desired password

        // Manual Authentication Check
        if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSKEY) {
            // Success: Create a local session
            localStorage.setItem('isAdmin', 'true');
            localStorage.setItem('lastLogin', new Date().toISOString());
            navigate('/admin-dashboard');
        } else {
            // Failure: Trigger the UI error state
            setError('ACCESS_DENIED: INVALID_CREDENTIALS_OR_SCOPE');
        }
    };

    return ( <
        div className = "min-h-screen bg-[#020604] flex items-center justify-center p-6 font-mono" >
        <
        div className = "max-w-md w-full bg-[#1a1a1a]/40 border border-[#00FF41]/20 rounded-xl overflow-hidden backdrop-blur-md shadow-[0_0_30px_rgba(0,255,65,0.05)]" >

        { /* Header / Console Bar */ } <
        div className = "bg-[#1a1a1a] p-3 border-b border-[#00FF41]/10 flex items-center justify-between" >
        <
        div className = "flex items-center gap-2" >
        <
        div className = "w-2 h-2 rounded-full bg-[#00FF41] animate-pulse" > < /div> <
        span className = "text-[10px] text-[#00FF41]/60 uppercase tracking-widest" >
        Auth_Protocol_v2 .0 _Static <
        /span> < /
        div > <
        /div>

        { /* Login Form */ } <
        form onSubmit = { handleSubmit }
        className = "p-8 space-y-6" >
        <
        div className = "mb-4" >
        <
        h2 className = "text-[#00FF41] text-xl font-black tracking-tighter uppercase italic" >
        Identify_User <
        /h2> <
        p className = "text-slate-500 text-[9px] uppercase mt-1" >
        Local_Session_Authorization_Required <
        /p> < /
        div >

        <
        div className = "space-y-2" >
        <
        label className = "text-[10px] text-[#00FF41] uppercase opacity-70" > / username</label >
        <
        input type = "text"
        required autoComplete = "off"
        placeholder = "INPUT_ID"
        onChange = {
            (e) => setCredentials({...credentials, username: e.target.value })
        }
        className = "w-full bg-black/40 border border-[#00FF41]/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#00FF41]/50 placeholder:opacity-20 transition-all" /
        >
        <
        /div>

        <
        div className = "space-y-2" >
        <
        label className = "text-[10px] text-[#00FF41] uppercase opacity-70" > / passkey</label >
        <
        input type = "password"
        required placeholder = "••••••••"
        onChange = {
            (e) => setCredentials({...credentials, password: e.target.value })
        }
        className = "w-full bg-black/40 border border-[#00FF41]/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#00FF41]/50 placeholder:opacity-20 transition-all" /
        >
        <
        /div>

        {
            error && ( <
                div className = "bg-red-500/10 border border-red-500/20 p-3 rounded" >
                <
                p className = "text-red-500 text-[10px] animate-pulse uppercase text-center font-bold" > { error } <
                /p> < /
                div >
            )
        }

        <
        button type = "submit"
        className = "w-full py-4 bg-[#00FF41]/5 border border-[#00FF41]/30 rounded text-[#00FF41] text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#00FF41] hover:text-black transition-all duration-300 active:scale-[0.98]" >
        Authorize_Session <
        /button> < /
        form >

        { /* Footer Info */ } <
        div className = "p-4 border-t border-[#00FF41]/5 text-center" >
        <
        p className = "text-[8px] text-slate-600 uppercase tracking-widest" >
        Terminal_Link: Secure_Port_80 <
        /p> < /
        div > <
        /div> < /
        div >
    );
};

export default Login;