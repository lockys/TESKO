/**
 * Header component displays the application name alongside the app icon.
 * It remains sticky at the top to provide constant branding and subtle
 * separation from the content area via a border. The icon is loaded
 * from the public folder and tinted using CSS filters to match the
 * primary colour.
 */
import logo from "../../public/pwa-192x192.png"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-card/80 border-b border-border shadow-md">
      <div className="max-w-screen-md mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-primary">TESKO</span>
        </div>
      </div>
    </header>
  )
}