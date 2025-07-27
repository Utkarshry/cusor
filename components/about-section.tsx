import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Lightbulb, Rocket } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "We understand the frustration of having research dreams but no clear path forward.",
    },
    {
      icon: Heart,
      title: "Community-First",
      description: "Building genuine connections between students who share the same academic passions.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge Sharing",
      description: "Every student has something valuable to teach and learn from others.",
    },
    {
      icon: Rocket,
      title: "Growth-Oriented",
      description: "Focused on helping you build the experience and CV that opens doors.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About CuSoR</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Cambridge University Society of Research is more than just a community—it's your bridge from "I have no
            research experience" to "I'm ready for my dream PhD program."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">From Zero to Research Hero</h3>
              <p className="text-gray-700 mb-6">
                We know what it's like to stare at PhD applications feeling completely unprepared. That's why we created
                a space where students can gain real research experience, build meaningful connections, and develop the
                confidence to pursue their academic dreams.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Connect with like-minded researchers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Gain hands-on research experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Build a competitive academic profile</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Students collaborating on research"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
