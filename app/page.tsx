// app/page.tsx
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ResearchFields from '../components/ResearchFields'
import SurveyInsights from '../components/SurveyInsights'
import OpportunitiesSection from '../components/OpportunitiesSection'
import FAQSection from '../components/FAQSection'
import CouncilSection from '../components/CouncilSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ResearchFields />
      <SurveyInsights />
      <OpportunitiesSection />
      <FAQSection />
      <CouncilSection />
      <ContactSection />
    </main>
  )
}
