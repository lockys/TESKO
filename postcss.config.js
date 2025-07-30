/**
 * PostCSS configuration for the TESKO project.
 *
 * It uses Tailwind CSS for utility classes and Autoprefixer to ensure
 * compatibility across different browsers. The configuration is
 * intentionally minimal, relying on Vite's efficient pipeline.
 */
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  // Use Tailwind and Autoprefixer as PostCSS plugins. In Tailwind v4 the
  // PostCSS plugin has been moved into the `@tailwindcss/postcss` package.
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}