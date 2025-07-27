// app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'CuSoR | Cultivating Curiosity, Sharing Skills, Advancing Research',
  description: 'The official site of the Curie Society for Research (CuSoR).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-deepblue text-gray-200 font-sans antialiased">
        <Navbar />
        {children}
        <footer className="bg-gray-800 text-gray-300 py-8">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">CuSoR</h2>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#about" className="hover:text-orange">About</a>
              <a href="#opportunities" className="hover:text-orange">Projects</a>
              <a href="#faqs" className="hover:text-orange">FAQs</a>
              <a href="#contact" className="hover:text-orange">Contact</a>
            </div>
            <p className="text-sm">&copy; 2025 CuSoR. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
