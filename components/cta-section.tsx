import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Research Journey?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of Cambridge students who are building their research experience, strengthening their CVs, and
          preparing for their dream academic futures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Join CuSoR Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
          >
            Schedule a Chat
            <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-blue-100">Active Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">200+</div>
              <div className="text-blue-100">Research Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">75+</div>
              <div className="text-blue-100">Publications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
