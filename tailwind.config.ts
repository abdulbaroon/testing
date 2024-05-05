import type { Config } from "tailwindcss";

const rem = (num: number) => ({ [num]: `${num / 16}rem` });

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B27F7",
        secondary: "#7875FF",
        black: "#010101",
        secondaryBlack: "#171718",
        grey: "#202021",
        secondaryGrey: "#B1B1B1",
        lightGrey: "#D7D9DD",
        backgroundGrey: "#EEF0F4",
        thirdGrey: "#8D959C",
        green: "#43B97F",
        yellow: "#FFCC4A",
      },
      screens: {
        desktop: "1180px",
        tablet: "774px",
        mobile: "335px",
      },
      fontSize: {
        ...rem(13),
        ...rem(18),
        ...rem(22),
        ...rem(28),
        ...rem(30),
        ...rem(32),
        ...rem(44),
        ...rem(52),
        ...rem(84),
      },
      lineHeight: {
        ...rem(67),
      },
      spacing: {
        ...rem(13),
        ...rem(14),
        ...rem(18),
        ...rem(21),
        ...rem(23),
        ...rem(30),
        ...rem(50),
        ...rem(52),
        ...rem(60),
        ...rem(66),
        ...rem(79),
        ...rem(100),
        ...rem(110),
        ...rem(130),
        ...rem(144),
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        ...rem(32),
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
      },
    },
  },
  plugins: [],
};
export default config;
