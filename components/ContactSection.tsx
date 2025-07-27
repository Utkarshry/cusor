// components/ContactSection.tsx
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-lg text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-300 mb-8">
          Have questions or want to get involved? Send us a message and we'll get back to you soon.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="w-full bg-orange py-3 rounded-full font-semibold text-white hover:bg-orange/90 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
