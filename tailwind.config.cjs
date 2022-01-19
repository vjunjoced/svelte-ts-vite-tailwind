module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
