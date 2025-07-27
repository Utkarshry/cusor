import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your
              <span className="text-orange-400"> Research Dreams</span>
              Into Reality
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Stop feeling lost with zero research experience. Join CuSoR and connect with peers, find mentors, and
              build the CV that opens doors to your dream opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Explore Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Learn How It Works
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">500+ Active Members</h3>
                    <p className="text-blue-100">Growing research community</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-500 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">200+ Projects</h3>
                    <p className="text-blue-100">Across all disciplines</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-400 p-3 rounded-full">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">150+ Publications</h3>
                    <p className="text-blue-100">Student co-authored papers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
