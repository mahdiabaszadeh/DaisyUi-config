import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
          /* global */
          "--white": "#ffffff",

          /* primary-1 */
          "--primary-1": "#068747",
          "--on-primary-1": "var(--white)",
          "--primary-1-container": "#1bc571",
          "--on-primary-1-container": "#022614",

          /* primary-2 */
          "--primary-2": "#ee7114",
          "--on-primary-2": "#1f1913",
          "--primary-2-container": "#f29a59",
          "--on-primary-2-container": "#241e18",

          /* secondary */
          "--secondary": "#044122",
          "--on-secondary": "var(--white)",
          "--secondary-container": "#a1ada7",
          "--on-secondary-container": "#032313",

          /* error */
          "--error": "#d32222",
          "--on-error": "#fff9f9",
          "--error-container": "#e5bfbf",
          "--on-error-container": "#1c1717",

          /* warning */
          "--warning": "#edb124",
          "--on-warning": "#555047",
          "--warning-container": "#f2d99d",
          "--on-warning-container": "#262219",

          /* neutral */
          /* TODO[@mahdiabaszadeh */

          /* charts */
          "--charts-01": "#aa4a4a",
          "--charts-02": "#fd8b8b",
          "--charts-03": "#f0f1f0",
          "--charts-04": "#79d2de",
          "--charts-05": "#147ad6",
          "--charts-06": "#67d9b0",
          "--charts-07": "#ffc300",
          "--charts-08": "#001aff",
          "--charts-09": "#bdc2bd",
          "--charts-10": "#d6dcd6",
          "--charts-11": "#deaf79",
          "--charts-12": "#b179de",
          "--charts-13": "#b6c8d8",
          "--charts-14": "#72fd1d",
          "--charts-15": "#b7e59b",
          "--charts-16": "#ea74f4",
          "--charts-17": "#de799d",
          "--charts-18": "#b6dde9",
          "--charts-19": "#795428",
          "--charts-20": "#c3ef11",
          "--charts-21": "#b3b1b1",
          "--charts-22": "#ff9900",

          /* information */
          "--information": "#fea801",
          "--information-2": "#febc2e",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
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
