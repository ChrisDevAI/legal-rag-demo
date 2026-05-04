// frontend\app\rag\page.tsx

const documents = [
  {
    title: 'Citizens United v. FEC',
    type: 'Built-in',
    domain: 'First Amendment / Campaign Finance',
  },
  {
    title: 'Brown v. Board of Education',
    type: 'Built-in',
    domain: 'Equal Protection / Education',
  },
  {
    title: 'Miranda v. Arizona',
    type: 'Built-in',
    domain: 'Criminal Procedure / Fifth Amendment',
  },
]

export default function RagPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
          Case Hunter AI
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-50 md:text-5xl">
          Document-grounded legal research assistant.
        </h1>
        <p className="mt-5 leading-7 text-stone-400">
          This page will become the main RAG interface. For now, it is a static frontend mockup
          showing the document selector, question box, answer panel, source cards, retrieved
          evidence, and PDF upload area.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="space-y-6">
          <section className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
            <h2 className="text-xl font-bold text-stone-50">Available Documents</h2>
            <div className="mt-5 space-y-4">
              {documents.map((document) => (
                <div
                  key={document.title}
                  className="rounded-2xl border border-stone-800 bg-stone-950 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-stone-100">{document.title}</h3>
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                      {document.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-stone-400">{document.domain}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-dashed border-stone-700 bg-stone-900 p-6">
            <h2 className="text-xl font-bold text-stone-50">Upload PDF</h2>
            <p className="mt-3 text-sm leading-6 text-stone-400">
              V1 will support one temporary session PDF, 3 MB maximum. Uploading a new PDF will
              replace the existing uploaded document.
            </p>

            <div className="mt-5 rounded-2xl border border-stone-700 bg-stone-950 p-5 text-center">
              <p className="text-sm font-semibold text-stone-200">PDF upload coming soon</p>
              <p className="mt-2 text-xs text-stone-500">
                Backend integration will be added after the frontend shell.
              </p>
            </div>
          </section>
        </aside>

        <section className="space-y-6">
          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
            <label htmlFor="document" className="text-sm font-semibold text-stone-200">
              Document Scope
            </label>
            <select
              id="document"
              className="mt-3 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-200 outline-none focus:border-amber-500"
              defaultValue="all"
            >
              <option value="all">All documents</option>
              <option value="citizens-united">Citizens United v. FEC</option>
              <option value="brown">Brown v. Board of Education</option>
              <option value="miranda">Miranda v. Arizona</option>
            </select>

            <label htmlFor="question" className="mt-6 block text-sm font-semibold text-stone-200">
              Question
            </label>
            <textarea
              id="question"
              rows={5}
              placeholder="Ask a question about the selected legal documents..."
              className="mt-3 w-full resize-none rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-200 outline-none placeholder:text-stone-600 focus:border-amber-500"
            />

            <button className="mt-5 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-stone-950 transition hover:bg-amber-400">
              Ask Case Hunter AI
            </button>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-6">
            <h2 className="text-xl font-bold text-stone-50">Answer</h2>
            <p className="mt-4 leading-7 text-stone-300">
              Generated answers will appear here after the backend RAG pipeline is connected.
              Answers will be grounded in retrieved document chunks and include source citations.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
            <h2 className="text-xl font-bold text-stone-50">Source Cards</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-800 bg-stone-950 p-4">
                <p className="text-sm font-semibold text-amber-400">Miranda v. Arizona</p>
                <p className="mt-2 text-sm text-stone-400">
                  Source excerpts and page/chunk references will appear here.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-800 bg-stone-950 p-4">
                <p className="text-sm font-semibold text-amber-400">Retrieved Evidence</p>
                <p className="mt-2 text-sm text-stone-400">
                  Retrieved context will be inspectable for debugging and portfolio review.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
            <h2 className="text-xl font-bold text-stone-50">Demo Disclaimer</h2>
            <p className="mt-4 text-sm leading-6 text-stone-400">
              Case Hunter AI is a portfolio demonstration. Kelly & Reynolds is a fictional law firm.
              This tool does not provide legal advice and should not be relied on for legal
              decisions.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
