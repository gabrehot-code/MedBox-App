/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A",
          secondary: "#3B82F6",
          accent: "#DBEAFE",
          background: "#F8FAFC",
          surface: "#FFFFFF",
          "surface-2": "#F1F5F9",
          text: "#0F172A",
          "text-muted": "#475569",
          "text-light": "#64748B",
          border: "#E2E8F0",
          "border-soft": "#F1F5F9",
          error: "#EF4444",
          "error-bg": "#FEF2F2",
          success: "#10B981",
          "success-bg": "#ECFDF5",
        },
        fontFamily: {
          sans: ["Assistant", "system-ui", "sans-serif"],
        },
        boxShadow: {
          "soft": "0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.06)",
          "card": "0 2px 4px rgba(15,23,42,.04), 0 4px 12px rgba(15,23,42,.06)",
        }
      },
    },
    plugins: [],
  }