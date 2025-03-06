/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        "primary": "rgb(12 19 79)",
        "secondary": "rgb(29 38 125)",
        "violet": "rgb(92 70 156)",
        "violet-pale": "rgb(212 173 252)",
        "gray-400": "rgb(196 223 223)",
        "gray-300": "rgb(210 233 233)",
        "gray-200": "rgb(227 244 244)",
        "gray-100": "rgb(248 246 244)",
        "sandle": "rgb(255 240 214)",
        "sweet-pink": "rgb(242 77 130)",
        "milk-white": "rgb(251 250 230)",
        "yellow-bold": "rgb(254 185 57)",
        "yellow-base": "rgb(250 234 118)",
        "yellow-bright": "rgb(253 238 35)",
        "gray-700": "rgb(155 149 149)",
        "sky-blue": "rgb(21 198 242)",
        "green": "rgb(77 129 121)",
        "green-light": "rgb(209 232 227)",
        "gray-900": "rgb(102 92 92)",
        "dark-pink": "rgb(171 40 103)",
        "pale-white": "rgb(251 251 246)",
        "p1": "rgb(235 90 60)",
        "p2": "rgb(223 151 85)",
        "p3": "rgb(231 210 131)",
        "violet-prime": "rgb(85 27 127)"
      },
      fontFamily:{
        junge: ["Junge", "sans-serif"],
        inder: ["Inder", "sans-serif"]
      }
    },
  },
  plugins: [],
}