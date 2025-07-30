/**
 * Header component displays the application name alongside the app icon.
 * It remains sticky at the top to provide constant branding and subtle
 * separation from the content area via a border. The icon is loaded
 * from the public folder and tinted using CSS filters to match the
 * primary colour.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-md flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <img
          src="/pwa-192x192.png"
          alt="TESKO logo"
          className="h-8 w-8 mr-2 rounded"
        />
        <span className="text-xl font-semibold text-primary">TESKO</span>
      </div>
      <div className="text-sm text-muted-foreground">Welcome!</div>
    </header>
  )
}