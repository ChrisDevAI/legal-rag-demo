// frontend/app/layout.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kelly & Reynolds | Case Hunter AI',
  description:
    'A portfolio demonstration of a document-grounded legal research assistant built with retrieval-augmented generation.',
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rag', label: 'RAG' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-stone-950 text-stone-100">
          <header className="border-b border-stone-800 bg-stone-950/95">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
              <Link href="/" className="group">
                <div className="text-sm uppercase tracking-[0.35em] text-amber-500">
                  Kelly & Reynolds
                </div>
                <div className="mt-1 text-lg font-semibold tracking-wide text-stone-100 group-hover:text-amber-200">
                  Attorneys at Law
                </div>
              </Link>

              <div className="hidden items-center gap-8 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-stone-300 transition hover:text-amber-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/rag"
                className="rounded-full border border-amber-500/60 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:border-amber-300 hover:bg-amber-500/10"
              >
                Launch AI
              </Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="border-t border-stone-800 bg-stone-950">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[2fr_1fr_1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Case Hunter AI</p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-stone-400">
                  A portfolio demonstration of document-grounded retrieval over legal opinions.
                  Kelly & Reynolds is a fictional law firm created for this applied AI project.
                </p>
              </div>

              <div>
                <p className="font-semibold text-stone-200">Navigation</p>
                <div className="mt-3 flex flex-col gap-2 text-sm text-stone-400">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition hover:text-amber-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-stone-200">Disclaimer</p>
                <p className="mt-3 text-sm leading-6 text-stone-400">
                  This demo does not provide legal advice and should not be relied on for legal
                  decisions.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
