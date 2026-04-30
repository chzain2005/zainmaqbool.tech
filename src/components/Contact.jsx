import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Hardcoded SVGs for the UI
const SVGIcons = {
    Email: () => ( <
        svg fill = "none"
        stroke = "currentColor"
        strokeWidth = "2"
        viewBox = "0 0 24 24"
        height = "18"
        width = "18"
        xmlns = "http://www.w3.org/2000/svg" >
        <
        path d = "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" > < /path> <
        polyline points = "22,6 12,13 2,6" > < /polyline> < /
        svg >
    ),
    Phone: () => ( <
        svg fill = "none"
        stroke = "currentColor"
        strokeWidth = "2"
        viewBox = "0 0 24 24"
        height = "18"
        width = "18"
        xmlns = "http://www.w3.org/2000/svg" >
        <
        path d = "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" > < /path> < /
        svg >
    ),
    Linkedin: () => ( <
        svg fill = "none"
        stroke = "currentColor"
        strokeWidth = "2"
        viewBox = "0 0 24 24"
        height = "18"
        width = "18"
        xmlns = "http://www.w3.org/2000/svg" >
        <
        path d = "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" > < /path> <
        rect x = "2"
        y = "9"
        width = "4"
        height = "12" > < /rect> <
        circle cx = "4"
        cy = "4"
        r = "2" > < /circle> < /
        svg >
    ),
    Github: () => ( <
        svg fill = "none"
        stroke = "currentColor"
        strokeWidth = "2"
        viewBox = "0 0 24 24"
        height = "18"
        width = "18"
        xmlns = "http://www.w3.org/2000/svg" >
        <
        path d = "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" > < /path> < /
        svg >
    )
};

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

    const contactLinks = [
        { icon: < SVGIcons.Email / > , title: "EMAIL", info: "arzain.maqboolse@gmail.com", link: "mailto:arzain.maqboolse@gmail.com" },
        { icon: < SVGIcons.Phone / > , title: "PHONE", info: "+923309878212", link: "tel:+923309878212" },
        { icon: < SVGIcons.Linkedin / > , title: "LINKEDIN", info: "zain-maqbool", link: "https://www.linkedin.com/in/muhammad-zain-maqbool-7b7127320/" },
        { icon: < SVGIcons.Github / > , title: "GITHUB", info: "chzain2005", link: "https://github.com/chzain2005" },
    ];

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setStatus('sending');

        // --- REPLACE THESE WITH YOUR KEYS FROM EMAILJS ---
        const SERVICE_ID = "service_jyxv2vl";
        const TEMPLATE_ID = "template_ebztiyo";
        const PUBLIC_KEY = "vRCxo0BC2uCG76O0x";

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error("Transmission Error:", err);
            setStatus('error');
        }
    };

    return ( <
        section id = "contact"
        className = "py-24 px-6 flex flex-col items-center bg-[#020604]" >
        <
        div className = "max-w-6xl w-full" > { /* Section Header */ } <
        div className = "flex items-center gap-6 mb-16" >
        <
        div className = "h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#00FF41]/20" > < /div> <
        h2 className = "text-[#00FF41] font-mono text-2xl md:text-3xl tracking-[0.4em] uppercase font-black" >
        Contact_Link <
        /h2> <
        div className = "h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#00FF41]/20" > < /div> < /
        div >

        <
        div className = "grid grid-cols-1 lg:grid-cols-2 gap-12" > { /* Left Side: Contact Info */ } <
        motion.div initial = {
            { opacity: 0, x: -20 }
        }
        whileInView = {
            { opacity: 1, x: 0 }
        }
        viewport = {
            { once: true }
        }
        className = "space-y-4" >
        <
        div className = "mb-8" >
        <
        h3 className = "text-white text-4xl font-black uppercase italic tracking-tighter mb-4" >
        Let 's Build the <span className="text-[#00FF41]">Future</span>. < /
        h3 > <
        p className = "text-slate-500 font-mono text-sm leading-relaxed border-l-2 border-[#00FF41]/30 pl-4" >
        I 'm open to freelance work, collaborations, and new opportunities. Feel free to reach out! < /
        p > <
        /div>

        {
            contactLinks.map((item, idx) => ( <
                a key = { idx }
                href = { item.link }
                target = "_blank"
                rel = "noopener noreferrer"
                className = "block bg-[#1a1a1a]/40 border border-[#00FF41]/10 p-5 rounded-lg hover:border-[#00FF41]/40 hover:bg-[#00FF41]/5 transition-all duration-300 group relative overflow-hidden" >
                <
                div className = "flex items-center gap-5 relative z-10" >
                <
                div className = "w-10 h-10 border border-[#00FF41]/20 rounded flex items-center justify-center text-[#00FF41] group-hover:border-[#00FF41] transition-colors" > { item.icon } <
                /div> <
                div >
                <
                span className = "text-[#00FF41]/50 font-mono text-[10px] tracking-widest block" > { item.title } < /span> <
                span className = "text-slate-300 font-mono text-sm group-hover:text-white transition-colors uppercase" > { item.info } < /span> < /
                div > <
                /div> < /
                a >
            ))
        } <
        /motion.div>

        { /* Right Side: Animated Form */ } <
        motion.div initial = {
            { opacity: 0, x: 20 }
        }
        whileInView = {
            { opacity: 1, x: 0 }
        }
        viewport = {
            { once: true }
        }
        className = "bg-[#1a1a1a]/40 border border-[#00FF41]/20 rounded-xl overflow-hidden backdrop-blur-md" >
        <
        div className = "bg-[#1a1a1a] p-3 border-b border-[#00FF41]/10 flex items-center justify-between" >
        <
        div className = "flex items-center gap-2" >
        <
        div className = { `w-2 h-2 rounded-full ${status === 'sending' ? 'bg-yellow-400 animate-pulse' : status === 'success' ? 'bg-blue-400' : 'bg-[#00FF41] animate-pulse'}` } > < /div> <
        span className = "font-mono text-[10px] text-[#00FF41]/60 uppercase tracking-widest" > Message_Console_v1 .0 < /span> < /
        div > <
        /div>

        <
        div className = "p-8" >
        <
        AnimatePresence mode = "wait" > {
            status === 'success' ? ( <
                motion.div key = "success"
                initial = {
                    { opacity: 0, y: 10 }
                }
                animate = {
                    { opacity: 1, y: 0 }
                }
                exit = {
                    { opacity: 0, y: -10 }
                }
                className = "py-20 text-center" >
                <
                div className = "w-16 h-16 bg-[#00FF41]/10 border border-[#00FF41] rounded-full flex items-center justify-center mx-auto mb-6" >
                <
                svg className = "w-8 h-8 text-[#00FF41]"
                fill = "none"
                stroke = "currentColor"
                viewBox = "0 0 24 24" >
                <
                path strokeLinecap = "round"
                strokeLinejoin = "round"
                strokeWidth = "3"
                d = "M5 13l4 4L19 7" > < /path> < /
                svg > <
                /div> <
                h2 className = "text-[#00FF41] text-2xl font-black italic uppercase mb-2" > Signal_Received < /h2> <
                p className = "text-white/60 text-xs tracking-widest uppercase" > Transmission routed to private inbox successfully. < /p> <
                button onClick = {
                    () => setStatus('idle')
                }
                className = "mt-8 text-[10px] text-[#00FF41] border border-[#00FF41]/30 px-4 py-2 hover:bg-[#00FF41] hover:text-black transition-all uppercase tracking-widest" >
                Send_Another_Transmission <
                /button> < /
                motion.div >
            ) : ( <
                motion.form ref = { formRef }
                key = "form"
                initial = {
                    { opacity: 0 }
                }
                animate = {
                    { opacity: 1 }
                }
                exit = {
                    { opacity: 0 }
                }
                onSubmit = { handleSubmit }
                className = "space-y-6" >
                <
                div className = "space-y-2" >
                <
                label className = "text-[10px] font-mono text-[#00FF41] uppercase tracking-tighter opacity-70" > / Your_Name</label >
                <
                input name = "name"
                type = "text"
                value = { formData.name }
                onChange = { handleChange }
                placeholder = "NAME"
                required className = "w-full bg-black/40 border border-[#00FF41]/10 rounded px-4 py-3 text-white font-mono text-xs focus:outline-none focus:border-[#00FF41]/50 transition-all placeholder:text-white/10" /
                >
                <
                /div>

                <
                div className = "space-y-2" >
                <
                label className = "text-[10px] font-mono text-[#00FF41] uppercase tracking-tighter opacity-70" > / Your_Email</label >
                <
                input name = "email"
                type = "email"
                value = { formData.email }
                onChange = { handleChange }
                placeholder = "EMAIL_ADDRESS"
                required className = "w-full bg-black/40 border border-[#00FF41]/10 rounded px-4 py-3 text-white font-mono text-xs focus:outline-none focus:border-[#00FF41]/50 transition-all placeholder:text-white/10" /
                >
                <
                /div>

                <
                div className = "space-y-2" >
                <
                label className = "text-[10px] font-mono text-[#00FF41] uppercase tracking-tighter opacity-70" > / message</label >
                <
                textarea name = "message"
                rows = "5"
                value = { formData.message }
                onChange = { handleChange }
                placeholder = "Tell me about your project..."
                required className = "w-full bg-black/40 border border-[#00FF41]/10 rounded px-4 py-3 text-white font-mono text-xs focus:outline-none focus:border-[#00FF41]/50 transition-all resize-none placeholder:text-white/10" >
                <
                /textarea> < /
                div >

                <
                button type = "submit"
                disabled = { status === 'sending' }
                className = "w-full py-4 bg-[#00FF41]/5 border border-[#00FF41]/30 rounded text-[#00FF41] font-mono text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#00FF41] hover:text-black transition-all duration-300 disabled:opacity-50" > { status === 'sending' ? 'UPLOADING_SIGNAL...' : 'Execute_Transmission' } <
                /button>

                {
                    status === 'error' && ( <
                        p className = "text-red-500 text-[10px] text-center uppercase animate-pulse" >
                        Error: Signal_Interrupted_Check_Credentials <
                        /p>
                    )
                } <
                /motion.form>
            )
        } <
        /AnimatePresence> < /
        div > <
        /motion.div> < /
        div > <
        /div> < /
        section >
    );
};

export default Contact;