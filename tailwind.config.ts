import type { Config } from "tailwindcss";
import { dark, light } from "./styles/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    borderRadius: {
      "radius-0": "0",
      "radius-4": "4px",
      "radius-8": "8px",
      "radius-12": "12px",
      "radius-16": "16px",
      "radius-20": "20px",
      "radius-24": "24px",
      "radius-28": "28px",
      "radius-32": "32px",
      "radius-40": "40px",
      "radius-64": "64px",
    },
    colors: {
      white: "var(--white)",
      "primary-1": "var(--primary-1)",
      "on-primary-1": "var(--on-primary-1)",
      "primary-1-container": "var(--primary-1-container)",
      "on-primary-1-container": "var(--on-primary-1-container)",
      "primary-2": "var(--primary-2)",
      "on-primary-2": "var(--on-primary-2)",
      "primary-2-container": "var(--primary-2-container)",
      "on-primary-2-container": "var(--on-primary-2-container)",
      error: "var(--error)",
      "on-error": "var(--on-error)",
      "error-container": "var(--error-container)",
      "on-error-container": "var(--on-error-container)",
      secondary: "var(--secondary)",
      "on-secondary": "var(--on-secondary)",
      "secondary-container": "var(--secondary-container)",
      "on-secondary-container": "var(--on-secondary-container)",
      warning: "var(--warning)",
      "on-warning": "var(--on-warning)",
      "warning-container": "var(--warning-container)",
      "on-warning-container": "var(--on-warning-container)",
      information: "var(--information)",
      information2: "var(--information2)",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ...light,
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ...dark,
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
