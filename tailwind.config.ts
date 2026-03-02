import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        border: "var(--border-palette, hsl(var(--border)))",
        input: "var(--bg-tertiary, hsl(var(--input)))",
        ring: "hsl(var(--ring))",
        background: "var(--bg-main, hsl(var(--background)))",
        "background-secondary": "var(--bg-secondary, hsl(var(--background-secondary)))",
        "background-tertiary": "var(--bg-tertiary, hsl(var(--background-tertiary)))",
        foreground: "var(--fg-main, hsl(var(--foreground)))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--bg-tertiary, hsl(var(--secondary)))",
          foreground: "var(--fg-muted, hsl(var(--secondary-foreground)))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--bg-secondary, hsl(var(--muted)))",
          foreground: "var(--fg-muted, hsl(var(--muted-foreground)))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          red: "hsl(var(--accent-red))",
          orange: "hsl(var(--accent-orange))",
          yellow: "hsl(var(--accent-yellow))",
          green: "hsl(var(--accent-green))",
          cyan: "hsl(var(--accent-cyan))",
          blue: "hsl(var(--accent-blue))",
          purple: "hsl(var(--accent-purple))",
          pink: "hsl(var(--accent-pink))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          hover: "hsl(var(--card-hover))",
        },
        status: {
          online: "hsl(var(--status-online))",
          idle: "hsl(var(--status-idle))",
          dnd: "hsl(var(--status-dnd))",
          offline: "hsl(var(--status-offline))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 25px hsl(var(--primary) / 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "message-appear": {
          "0%": { opacity: "0", transform: "translateX(-20px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        "pop-reaction": {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.3)" },
          "50%": { transform: "scale(0.9)" },
          "75%": { transform: "scale(1.1)" },
        },
        "particle-float": {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.7" },
          "50%": { transform: "translateY(-8px) scale(1.2)", opacity: "1" },
        },
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(-3deg) scale(1)" },
          "25%": { transform: "rotate(3deg) scale(1.02)" },
          "50%": { transform: "rotate(-3deg) scale(1.04)" },
          "75%": { transform: "rotate(3deg) scale(1.02)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        enter: "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
        exit: "fade-out 0.3s ease-out, scale-out 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "message-appear": "message-appear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "pop-reaction": "pop-reaction 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "particle-float": "particle-float 3s ease-in-out infinite",
        "slide-up-fade": "slide-up-fade 0.5s ease-out forwards",
        wobble: "wobble 0.6s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
