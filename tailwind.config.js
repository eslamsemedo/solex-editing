/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-brand-orange": "#FF9900", // Existing custom orange
        "bg-brand-blue": "#0070f3", // Existing custom blue
        "brand-cream": "#f9f5ef", // Updated to new cream color
        "brand-gray": "#22292F",
        // Suggested palette additions
        primary: "#2563eb", // Blue-600
        secondary: "#f59e42", // Orange-400
        background: "#f3f4f6", // Gray-100
        surface: "#ffffff", // White
        text: "#1e293b", // Slate-800
        accent: "#10b981", // Green-500
      },
    },
  },
  plugins: [],
};
