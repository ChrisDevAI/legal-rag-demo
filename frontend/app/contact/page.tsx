// frontend\app\contact\page.tsx

import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">Contact</p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-50 md:text-5xl">
        Demo contact page.
      </h1>

      <div className="mt-8 rounded-3xl border border-stone-800 bg-stone-900 p-8">
        <p className="text-lg leading-8 text-stone-400">
          This is a supporting page for the fictional Kelly & Reynolds website. The primary
          technical feature is the Case Hunter AI RAG assistant.
        </p>

        <Link
          href="/rag"
          className="mt-8 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-stone-950 transition hover:bg-amber-400"
        >
          Open Case Hunter AI
        </Link>
      </div>
    </div>
  )
}
