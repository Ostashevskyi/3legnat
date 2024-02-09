import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
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
