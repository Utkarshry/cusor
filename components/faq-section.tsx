"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "I have zero research experience. Can I still join?",
    answer:
      "CuSoR is designed specifically for students at all experience levels. Many of our most successful members started with no research background. We have beginner-friendly projects and skill-building sessions to help you get started.",
  },
  {
    question: "How much time commitment is required?",
    answer:
      "It varies by opportunity. Skill exchange sessions might be just a few hours per week for 2-4 weeks, while research projects can range from 5-15 hours per week over 3-6 months. You choose what fits your schedule and goals.",
  },
  {
    question: "Are there opportunities in my field of study?",
    answer:
      "CuSoR spans all disciplines at Cambridge. We have active projects in STEM fields, humanities, social sciences, and interdisciplinary areas. If you don't see something in your field, you can propose new projects or skill exchanges.",
  },
  {
    question: "Will this actually help with PhD applications?",
    answer:
      "Yes! Our members have successfully used their CuSoR experience in PhD applications, with many gaining co-authorships on publications, strong recommendation letters, and valuable research skills that make them competitive candidates.",
  },
  {
    question: "How do I find the right opportunities for my level?",
    answer:
      "Each opportunity is tagged with experience levels (Beginner, Intermediate, Advanced) and required skills. Our matching system and community mentors also help guide you toward projects that align with your current abilities and growth goals.",
  },
  {
    question: "Is there a cost to join CuSoR?",
    answer:
      "Basic membership is free for all Cambridge students. Some specialized workshops or events may have small fees to cover materials, but we ensure cost is never a barrier to participation through our scholarship program.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply create your profile, browse current opportunities, and apply to those that interest you. You can also attend our weekly newcomer sessions to learn more about the community and get personalized guidance on where to start.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about joining and participating in CuSoR.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
