import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
        const [credentials, setCredentials] = useState({ username: '', password: '' });
        const [error, setError] = useState('');
        const navigate = useNavigate();

        const handleSubmit = async(e) => {
            e.preventDefault();
            try {
                const response = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials),
                });
                const data = await response.json();

                if (data.success) {
                    localStorage.setItem('isAdmin', 'true'); // Simple session management
                    navigate('/admin-dashboard');
                } else {
                    setError('ACCESS_DENIED: INVALID_CREDENTIALS');
                }
            } catch (err) {
                setError('SYSTEM_ERROR: SERVER_UNREACHABLE');
            }
        };

        return ( <
            div className = "min-h-screen bg-[#020604] flex items-center justify-center p-6 font-mono" >
            <
            div className = "max-w-md w-full bg-[#1a1a1a]/40 border border-[#00FF41]/20 rounded-xl overflow-hidden backdrop-blur-md shadow-[0_0_30px_rgba(0,255,65,0.05)]" >
            <
            div className = "bg-[#1a1a1a] p-3 border-b border-[#00FF41]/10 flex items-center justify-between" >
            <
            div className = "flex items-center gap-2" >
            <
            div className = "w-2 h-2 rounded-full bg-[#00FF41] animate-pulse" > < /div> <
            span className = "text-[10px] text-[#00FF41]/60 uppercase tracking-widest" > Auth_Protocol_v2 .0 < /span> < /
            div > <
            /div>

            <
            form onSubmit = { handleSubmit }
            className = "p-8 space-y-6" >
            <
            h2 className = "text-[#00FF41] text-xl font-black tracking-tighter uppercase mb-4 italic" > Identify_User < /h2>

            <
            div className = "space-y-2" >
            <
            label className = "text-[10px] text-[#00FF41] uppercase opacity-70" > / username</label >
            <
            input type = "text"
            onChange = {
                (e) => setCredentials({...credentials, username: e.target.value })
            }
            className = "w-full bg-black/40 border border-[#00FF41]/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#00FF41]/50" /
            >
            <
            /div>

            <
            div className = "space-y-2" >
            <
            label className = "text-[10px] text-[#00FF41] uppercase opacity-70" > / passkey</label >
            <
            input type = "password"
            onChange = {
                (e) => setCredentials({...credentials, password: e.target.value })
            }
            className = "w-full bg-black/40 border border-[#00FF41]/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#00FF41]/50" /
            >
            <
            /div>

            {
                error && < p className = "text-red-500 text-[10px] animate-pulse uppercase" > { error } < /p>}

                <
                button type = "submit"
                className = "w-full py-4 bg-[#00FF41]/5 border border-[#00FF41]/30 rounded text-[#00FF41] text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#00FF41] hover:text-black transition-all duration-300" >
                    Authorize_Session <
                    /button> < /
                form > <
                    /div> < /
                div >
            );
        };

        export default Login;