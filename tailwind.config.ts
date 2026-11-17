import type { Config } from "tailwindcss"

const channel = (name: string) => `oklch(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        background: channel("background"),
        foreground: channel("foreground"),
        card: channel("card"),
        muted: { DEFAULT: channel("muted"), foreground: channel("muted-foreground") },
        primary: { DEFAULT: channel("primary"), foreground: channel("primary-foreground") },
        signal: { DEFAULT: channel("signal"), foreground: channel("signal-foreground") },
        positive: channel("positive"),
        ink: channel("ink"),
        border: "var(--border)",
        ring: "var(--ring)",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "10px",
        xl: "14px",
        "2xl": "18px",
        "3xl": "24px",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
}

export default config
