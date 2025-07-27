// components/OpportunitiesSection.tsx
'use client'
import { useState } from 'react'

interface Opportunity {
  id: number
  title: string
  category: string
  field: string
  desc: string
}

export default function OpportunitiesSection() {
  const opportunities: Opportunity[] = [
    {
      id: 1,
      title: 'Sentiment Analysis of Social Media Data',
      category: 'research',
      field: 'ai-ml',
      desc: 'Contribute to analyzing public sentiment on social media. Requires basic Python knowledge.',
    },
    {
      id: 2,
      title: 'Intro to Python for Data Science (Workshop)',
      category: 'skills',
      field: 'ai-ml',
      desc: 'Learn fundamentals of Python, Pandas, and Matplotlib from a peer-led session. No prior experience needed.',
    },
    {
      id: 3,
      title: 'Protein Folding Data Analysis',
      category: 'research',
      field: 'lifesci',
      desc: 'Assist in analyzing simulation data for protein structures. Great for bio or chem majors.',
    },
    {
      id: 4,
      title: 'Mastering Scientific Writing (Workshop)',
      category: 'skills',
      field: 'writing',
      desc: 'Improve your research writing skills. Learn to structure papers, write clear abstracts, and cite sources.',
    },
    {
      id: 5,
      title: 'Cell Image Recognition with AI',
      category: 'research',
      field: 'ai-ml',
      desc: 'Help train a convolutional neural network to identify cell types from microscope images.',
    },
    {
      id: 6,
      title: 'Gene Expression Data Interpretation',
      category: 'research',
      field: 'lifesci',
      desc: 'Analyze RNA-seq data to find differentially expressed genes. R experience is a plus.',
    },
    {
      id: 7,
      title: 'GitHub for Beginners (Workshop)',
      category: 'skills',
      field: 'ai-ml',
      desc: 'Learn version control basics. Master commits, branches, and pull requests in a hands-on session.',
    },
    {
      id: 8,
      title: 'CRISPR Literature Review Project',
      category: 'research',
      field: 'lifesci',
      desc: 'Contribute to a literature review on the latest CRISPR-Cas9 research developments.',
    },
    {
      id: 9,
      title: 'Crafting a Conference Abstract (Workshop)',
      category: 'skills',
      field: 'writing',
      desc: 'Learn how to summarize your research effectively to get accepted at conferences.',
    },
  ]

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Research', value: 'research' },
    { label: 'Skills', value: 'skills' },
    { label: 'AI/ML', value: 'ai-ml' },
    { label: 'Life Sci', value: 'lifesci' },
    { label: 'Writing', value: 'writing' },
  ]

  const [activeFilter, setActiveFilter] = useState('all')

  const filteredOps = opportunities.filter(opp => {
    if (activeFilter === 'all') return true
    return opp.category === activeFilter || opp.field === activeFilter
  })

  return (
    <section id="opportunities" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">Explore Live Opportunities</h2>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg text-center mb-8">
          Find active research projects and skill-building sessions you can join now. Filter by type or discipline to match your interests.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`py-2 px-4 rounded-full font-medium transition 
                ${activeFilter === f.value
                  ? 'bg-orange text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOps.map(opp => (
            <div key={opp.id} className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between transform hover:scale-105 transition">
              <span className={`inline-block text-sm font-semibold py-1 px-2 rounded-full mb-2
                ${opp.category === 'research' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                {opp.category === 'research' ? 'Research' : 'Skill'}
              </span>
              <h3 className="text-xl font-semibold text-white mb-2">{opp.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{opp.desc}</p>
              <button className="mt-4 bg-orange text-white font-bold py-2 px-4 rounded-full hover:bg-orange/90 transition self-start">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
