const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                "blueGray": colors.blueGray,
                "emerald": colors.emerald,
                "teal": colors.teal,
                "cyan": colors.cyan,
                "sky": colors.sky,
            },
            stroke: ['hover', 'focus'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
