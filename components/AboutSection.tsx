// components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">About CuSoR</h2>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg mb-4">
          The Curie Society for Research (CuSoR) is a student organization inspired by Marie Curie's legacy. We are dedicated to promoting scientific exploration and innovation among undergraduate students. At CuSoR, we foster curiosity and empower you to gain real research experience.
        </p>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg">
          Our mission is to build your confidence and skills. We provide structured pathways and mentorship so that even beginners can contribute to meaningful projects. Through hands-on experiments, workshops, and collaboration, we help you bridge the gap between classroom learning and real-world application.
        </p>
        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Our Agenda</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><strong>Foster Curiosity:</strong> Encourage inquiry and exploration across diverse scientific fields.</li>
            <li><strong>Build Skills:</strong> Provide training and resources for rigorous research methodologies.</li>
            <li><strong>Collaborative Learning:</strong> Create a supportive community where members share knowledge and tackle big questions together.</li>
            <li><strong>Achieve Publication:</strong> Guide you to excel by completing projects and even co-authoring research papers.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
