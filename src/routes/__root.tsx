import { HeadContent, Scripts, createRootRoute, Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Clinton ThankGod — Brand Designer & AI Automation Expert' },
      { name: 'description', content: 'Brand designer specializing in brand identity, print, and digital design.' },
    ],
  }),
  shellComponent: RootDocument,
})

function Nav() {
  const { location } = useRouterState()
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = [
    { to: '/projects', label: 'Work' },
    { to: '/resume', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-lg tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          <span className="gradient-text">Clinton ThankGod</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === to
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-sm font-medium border-b border-border/50 transition-colors ${
                  location.pathname === to ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
              >
                Hire Me
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-lg gradient-text">Clinton ThankGod</p>
          <p className="text-sm text-muted-foreground mt-1">Brand Designer & AI Automation Expert</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/projects" className="hover:text-foreground transition-colors">Work</Link>
          <Link to="/resume" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        <p className="text-sm text-muted-foreground">© 2025 Clinton ThankGod. All rights reserved.</p>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
