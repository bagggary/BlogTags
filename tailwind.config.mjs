/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      flex: {
        300: "1 0 300px",
      },
    },
  },
  plugins: [],
};
