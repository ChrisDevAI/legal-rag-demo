// frontend\app\about\page.tsx

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
        About the Demo
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-50 md:text-5xl">
        A fictional law firm shell around a real applied AI project.
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-8 text-stone-400">
        <p>
          Kelly & Reynolds, Attorneys at Law is a fictional law firm created to give Case Hunter AI
          a realistic product setting.
        </p>

        <p>
          The technical purpose of this project is to demonstrate retrieval-augmented generation
          over real legal documents, including PDF extraction, chunking, embeddings, vector search,
          metadata filtering, citations, and retrieved evidence display.
        </p>

        <p>
          The project is not a legal service and does not provide legal advice. It is a portfolio
          demonstration of document-grounded AI system design.
        </p>
      </div>
    </div>
  )
}
