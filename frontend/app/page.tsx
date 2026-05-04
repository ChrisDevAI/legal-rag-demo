// frontend/app/page.tsx

import Link from 'next/link'

const featuredCases = [
  {
    title: 'Citizens United v. FEC',
    domain: 'First Amendment / Campaign Finance',
    description:
      'A dense opinion useful for testing retrieval across political speech, corporate speech, and campaign finance reasoning.',
  },
  {
    title: 'Brown v. Board of Education',
    domain: 'Equal Protection / Education',
    description:
      'A landmark case involving segregation, public education, and constitutional equality.',
  },
  {
    title: 'Miranda v. Arizona',
    domain: 'Criminal Procedure / Fifth Amendment',
    description: 'A foundational decision on custodial interrogation and warning requirements.',
  },
]

const capabilities = [
  'Document-grounded legal research answers',
  'Source cards and retrieved evidence',
  'Metadata-filtered retrieval',
  'Support for one temporary PDF upload',
]

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-stone-800 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_34%),linear-gradient(to_bottom,_#0c0a09,_#1c1917)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
              Kelly & Reynolds, Attorneys at Law
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-stone-50 md:text-6xl">
              Legal research, grounded in the documents in front of you.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Case Hunter AI is a portfolio demonstration of a retrieval-augmented generation
              assistant built to answer questions over real Supreme Court opinions with citations,
              source cards, and inspectable retrieved evidence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/rag"
                className="rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-stone-950 transition hover:bg-amber-400"
              >
                Open the RAG Assistant
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-stone-600 px-6 py-3 text-center text-sm font-semibold text-stone-200 transition hover:border-amber-400 hover:text-amber-300"
              >
                View Project Context
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-stone-900/70 p-6 shadow-2xl shadow-black/40">
            <div className="rounded-2xl border border-stone-700 bg-stone-950 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Demo Assistant</p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-stone-900 p-4">
                  <p className="text-sm text-stone-400">Question</p>
                  <p className="mt-2 text-stone-100">
                    What warning requirements are discussed in Miranda?
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
                  <p className="text-sm text-amber-300">Grounded Answer</p>
                  <p className="mt-2 text-sm leading-6 text-stone-200">
                    The assistant retrieves relevant passages from Miranda v. Arizona, then answers
                    only from the selected document context with citations.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-stone-700 p-3">
                    <p className="text-xs uppercase tracking-widest text-stone-500">Source</p>
                    <p className="mt-1 text-sm text-stone-200">Miranda v. Arizona</p>
                  </div>
                  <div className="rounded-xl border border-stone-700 p-3">
                    <p className="text-xs uppercase tracking-widest text-stone-500">Retrieval</p>
                    <p className="mt-1 text-sm text-stone-200">Top-k chunks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Technical Showcase
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-50">
              Built as a real applied AI system, not a loose chatbot demo.
            </h2>
            <p className="mt-5 leading-7 text-stone-400">
              The project focuses on the retrieval pipeline: PDF extraction, chunking, embeddings,
              vector search, metadata filtering, citations, and insufficient-context handling.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-2xl border border-stone-800 bg-stone-900 p-5"
              >
                <div className="mb-4 h-2 w-12 rounded-full bg-amber-500" />
                <p className="font-semibold text-stone-100">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Built-In Corpus
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-50">
              Three landmark Supreme Court opinions.
            </h2>
            <p className="mt-5 leading-7 text-stone-400">
              The initial corpus uses real legal opinions rather than simplified fake documents,
              giving the RAG system dense material to retrieve, cite, and explain.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredCases.map((caseItem) => (
              <article
                key={caseItem.title}
                className="rounded-3xl border border-stone-800 bg-stone-950 p-6"
              >
                <p className="text-sm font-semibold text-amber-400">{caseItem.domain}</p>
                <h3 className="mt-4 text-xl font-bold text-stone-50">{caseItem.title}</h3>
                <p className="mt-4 text-sm leading-6 text-stone-400">{caseItem.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-50">
                Ready to inspect the RAG workflow?
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-stone-300">
                The RAG page will become the main interface for selecting documents, asking
                questions, reviewing citations, and inspecting retrieved evidence.
              </p>
            </div>

            <Link
              href="/rag"
              className="rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-stone-950 transition hover:bg-amber-400"
            >
              Go to RAG Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
