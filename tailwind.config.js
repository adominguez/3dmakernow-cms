const colors = require('tailwindcss/colors');
const Color = require('color')
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()
module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.md", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
            100: lighten('#49b2a1', 0.4),
            200: lighten('#49b2a1', 0.3),
            300: lighten('#49b2a1', 0.2),
            400: lighten('#49b2a1', 0.1),
            500: '#49b2a1',
            600: darken('#49b2a1', 0.1),
            700: darken('#49b2a1', 0.2),
            800: darken('#49b2a1', 0.3),
            900: darken('#49b2a1', 0.4),
        },
        secondary: {
            100: lighten('#303030', 0.4),
            200: lighten('#303030', 0.3),
            300: lighten('#303030', 0.2),
            400: lighten('#303030', 0.1),
            500: '#303030',
            600: darken('#303030', 0.1),
            700: darken('#303030', 0.2),
            800: darken('#303030', 0.3),
            900: darken('#303030', 0.4),
        },
        backgroundSite: '#fff',
        textColor: {
            100: lighten('#222222', 0.4),
            200: lighten('#222222', 0.3),
            300: lighten('#222222', 0.2),
            400: lighten('#222222', 0.1),
            500: '#222222',
            600: darken('#222222', 0.1),
            700: darken('#222222', 0.2),
            800: darken('#222222', 0.3),
            900: darken('#222222', 0.4),
        },
        sidebarColor: {
            100: lighten('#eeeeee', 0.4),
            200: lighten('#eeeeee', 0.3),
            300: lighten('#eeeeee', 0.2),
            400: lighten('#eeeeee', 0.1),
            500: '#eeeeee',
            600: darken('#eeeeee', 0.1),
            700: darken('#eeeeee', 0.2),
            800: darken('#eeeeee', 0.3),
            900: darken('#eeeeee', 0.4),
        },
        footerColor: {
            100: lighten('#49b2a1', 0.4),
            200: lighten('#49b2a1', 0.3),
            300: lighten('#49b2a1', 0.2),
            400: lighten('#49b2a1', 0.1),
            500: '#49b2a1',
            600: darken('#49b2a1', 0.1),
            700: darken('#49b2a1', 0.2),
            800: darken('#49b2a1', 0.3),
            900: darken('#49b2a1', 0.4),
        }
      },
      width: { templateValue: '80%', amazonValue: '100%'}
    },
    truncate: {
      lines: {
          2: '2',
          3: '3',
          5: '5',
          8: '8',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-truncate-multiline')(['responsive', 'hover']), 
 ],
}
