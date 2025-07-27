// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-deepblue to-teal">
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Igniting Curiosity, Inspiring Innovation</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          Curie Society for Research (CuSoR) is a vibrant undergraduate community. Transform your academic curiosity into impactful research and practical skills.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#opportunities" className="bg-orange py-3 px-8 rounded-full font-semibold text-white shadow hover:bg-orange/90 transition">
            Explore Opportunities
          </a>
          <a href="#about" className="border-2 border-white py-3 px-8 rounded-full font-semibold text-white hover:bg-white hover:text-deepblue transition">
            Learn About Us
          </a>
        </div>
      </div>
    </section>
  )
}
