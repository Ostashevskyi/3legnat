import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': "320px",
      'sm': "425px",
      'md': '768px',
      "lg": '1024px',
      'xl': '1440px',
      'xxxl': '1920px'
    },
    extend: {
      colors: {
        primary_black: "var(--primary_black)",
        secondary_blue: "var(--secondary_blue)",
        secondary_green: "var(--secondary_green)",
        secondary_orange: "var(--secondary_orange)",
        secondary_red: "var(--secondary_red)",
        neutral_07: "var(--neutral_07)",
        neutral_06: "var(--neutral_06)",
        neutral_05: "var(--neutral_05)",
        neutral_04: "var(--neutral_04)",
        neutral_03: "var(--neutral_03)",
        neutral_02: "var(--neutral_02)",
        neutral_01: "var(--neutral_01)",
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'space-grotesk': ['Space Grotesk'],
      },
      fontSize: {
        '20': "20px",
        '22': "22px",
        '26': "26px",
        '28': "28px",
        '34': "34px",
        '40': "40px",
        '54': "54px",
        '72': "72px",
        "80": "80px",

      },
      lineHeight: {
        '14': "14px",
        '22': "22px",
        '26': "26px",
        '28': "28px",
        '30': "30px",
        '32': "32px",
        '34': "34px",
        '38': "38px",
        '40': "40px",
        '44': "44px",
        '58': "58px",
        '76': "76px",
        '84': "84px",
        '96': "96px",
      }
    },
  },
  plugins: [],
};
export default config;
