import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'lg-1920': '1920px',
        'md-1190': '1190px',
        'md-web': '470px',
        'sm-mobile': '360px',
        '720p': {'max': '1280px'}, // Breakpoint para telas até 1280px
      },
    },
  },
  plugins: [],
};
export default config;
