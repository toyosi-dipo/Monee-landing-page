/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1440px",
      },
      colors: {
        "blk-900": "#151515",
        "blk-500": "#54535C",
        "bg-1": "#DCF2F8",
        "bg-2": "#F5F5F5",
        "bg-3": "#E7F5F6",
        "bg-4": "#FCF7F1",
        "bg-5": "#D4CEF1",
        "bg-6": "#6461FC",
        "bg-7": "#7C9BF5",
        "bg-dot": "#D9D9D9",
        "bg-footer": "#212121",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        mont: ["'Montserrat'", "sans-serif"],
        dms: ["'DM Sans'", "sans-serif"],
      },
      backgroundImage: () => ({
        user_1: "url('../images/user-1.png')",
        user_2: "url('../images/user-2.png')",
        user_3: "url('../images/user-3.png')",
        user_4: "url('../images/user-4.png')",
        user_5: "url('../images/user-5.png')",
        star: "url('../images/star.png')",
        star_empty: "url('../images/star-empty.png')",
        davio: "url('../images/davio.png')",
        james: "url('../images/james.png')",
        chika: "url('../images/chika.png')",
      }),
    },
  },
  plugins: [],
};
