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
      colors:{
        talaSky:"#C3E8FA",
        talaSkyLight:"#EDF9FD",
        talaPurple: "#CFCEFF",
        talaPurpleLight: "#F1F0FF",
        talaYellow: "#FAE27C",
        talaYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
