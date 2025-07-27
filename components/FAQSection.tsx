// components/FAQSection.tsx
'use client'
import { useState } from 'react'

export default function FAQSection() {
  const faqs = [
    {
      q: "What is CuSoR?",
      a: "CuSoR is the Curie Society for Research, an undergraduate community that fosters research skills, mentorship, and collaboration across disciplines."
    },
    {
      q: "Who can join CuSoR?",
      a: "Any undergraduate student from Deshbandhu College interested in research can join. No prior experience is required!"
    },
    {
      q: "Do I need research experience to participate?",
      a: "Not at all. CuSoR offers entry-level projects and guidance so beginners can get started comfortably."
    },
    {
      q: "Are there any membership fees?",
      a: "No membership fees. CuSoR is free to join, focusing on community support and learning."
    },
    {
      q: "How do I join a project or workshop?",
      a: "Browse our Opportunities section, choose something that interests you, and click 'Learn More' to get started. You can also contact us directly for guidance."
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faqs" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-white"
              >
                <span>{faq.q}</span>
                <span className="text-xl">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 text-gray-300 border-t border-gray-700">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
