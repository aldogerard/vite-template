/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: "Poppins",
            },
            colors: {
                light: "#FAFAFA",
                dark: "#171717",
                primary: "#10B981",
                secondary: "#047857",
                success: "#10B981",
                warning: "#F59E0B",
                danger: "#F43F5E",
                info: "#0EA5E9",
            },
        },
    },
    plugins: [],
};
