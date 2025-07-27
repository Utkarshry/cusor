// components/SurveyInsights.tsx
export default function SurveyInsights() {
  return (
    <section id="survey-insights" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">Student Survey Insights</h2>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg mb-4">
          We asked undergraduates about their research experiences. Common themes emerged:
        </p>
        <ul className="max-w-2xl mx-auto text-gray-200 list-disc list-inside space-y-3 mb-6">
          <li><em>"I have zero research experience and feel floundering when trying to find a project."</em></li>
          <li><em>"I feel largely on my own without any guidance."</em></li>
          <li><em>"I want hands-on projects that connect to what I learn in class."</em></li>
        </ul>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg mb-4">
          In short, students are eager to participate but face barriers like uncertainty and lack of mentorship. What they seek is clear:
        </p>
        <ul className="max-w-2xl mx-auto text-gray-200 list-disc list-inside space-y-3">
          <li><strong>Guidance & Mentorship:</strong> Clear direction and support from experienced peers or faculty.</li>
          <li><strong>Real Projects:</strong> Practical research opportunities where they can build their portfolio.</li>
          <li><strong>Community:</strong> A collaborative network to learn skills (coding, analysis, communication) together.</li>
        </ul>
      </div>
    </section>
  )
}
