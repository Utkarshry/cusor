// components/ResearchFields.tsx
export default function ResearchFields() {
  return (
    <section id="research-fields" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Research Fields</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-white mb-2">Physical Sciences</h3>
            <p className="text-gray-300">Physics, Astronomy, and related fields exploring the laws of nature.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-semibold text-white mb-2">Life Sciences</h3>
            <p className="text-gray-300">Biology, Biotechnology, and Medicine, studying life and health.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold text-white mb-2">Computer Science & AI</h3>
            <p className="text-gray-300">AI/ML, Data Science, and Software Engineering for cutting-edge tech.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">⚗️</div>
            <h3 className="text-xl font-semibold text-white mb-2">Chemistry & Materials</h3>
            <p className="text-gray-300">Chemical Science, Materials Research, and Nanotechnology.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-white mb-2">Engineering</h3>
            <p className="text-gray-300">Mechanical, Electrical, and Civil Engineering projects and design.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-white mb-2">Social Sciences & Humanities</h3>
            <p className="text-gray-300">Human behavior, society, and culture studies with a research focus.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
