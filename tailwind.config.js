/**
 * Tailwind CSS configuration for the TESKO project.
 *
 * We enable JIT mode by default and scan all JavaScript and HTML files
 * under the src/ directory. Custom colours are defined for primary and
 * accent tones, following the project's design guidelines. Card specific
 * radius and spacing values are defined to standardise the UI throughout
 * the application.
 */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C0BF',
        accent: '#FF5A5F',
      },
      borderRadius: {
        card: '12px',
      },
      spacing: {
        card: '16px',
      },
    },
  },
  plugins: [],
}