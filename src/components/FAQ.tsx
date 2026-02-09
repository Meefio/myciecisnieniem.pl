type FaqItem = {
  question: string
  answer: string
}

export default function FAQ({ items }: { items: FaqItem[] }) {
  if (!items || items.length === 0) return null

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Najczesciej zadawane pytania</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <details
            key={i}
            className="group bg-bg-gray rounded-lg border border-stroke/10 overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-4 text-white font-medium hover:text-primary transition-colors">
              {item.question}
              <span className="ml-2 text-primary group-open:rotate-180 transition-transform">
                &#9660;
              </span>
            </summary>
            <div className="px-4 pb-4 text-white/70 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
