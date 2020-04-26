module.exports = {
  theme: {
    extend: {},
    darkSelector: '.dark-mode',
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover'],
    textColor: [
      'dark',
      'dark-hover',
      'dark-active',
      'hover',
      'dark-placeholder',
    ],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
