/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                osBackground: '#020604', // Very deep black-green
                osWindow: 'rgba(10, 25, 15, 0.75)', // Dark translucent green-glass
                osAccent: '#00FF41', // Classic Terminal Neon Green
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'monospace'],
                sans: ['"JetBrains Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}