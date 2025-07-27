// components/CouncilSection.tsx
export default function CouncilSection() {
  const members = [
    { name: "Alice Curie", role: "President" },
    { name: "John Doe", role: "Vice President" },
    { name: "Jane Smith", role: "Secretary" },
    { name: "Raj Patel", role: "Events Chair" },
  ]

  return (
    <section id="council" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Our Council</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-32 w-32 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-400">
                ?
              </div>
              <h3 className="text-xl font-semibold text-white">{m.name}</h3>
              <p className="text-gray-400">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
