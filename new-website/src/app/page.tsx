import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { MarqueeBar } from '@/components/MarqueeBar';
import { StatsBar } from '@/components/StatsBar';
import { Capabilities } from '@/components/Capabilities';
import { BottlenecksHide } from '@/components/BottlenecksHide';
import { Deliverables } from '@/components/Deliverables';
import { HowItWorks } from '@/components/HowItWorks';
import { FitSection } from '@/components/FitSection';
import { Comparison } from '@/components/Comparison';
import { Security } from '@/components/Security';
import { ImpactQuote } from '@/components/ImpactQuote';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      
      {/* 1. Hero stays sticky at the top, acting as the background "page" */}
      <div style={{ position: 'sticky', top: 0, zIndex: 1, height: '100vh', overflow: 'hidden' }}>
        <Hero />
      </div>

      {/* 2. The rest of the site slides UP and OVER the Hero.
             The gradient mask approach creates a flawless feather completely removing hard cuts. */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        marginTop: '-150px',
        background: 'linear-gradient(180deg, transparent 0%, #0B1221 150px, #0B1221 100%)',
      }}>
        <div style={{ paddingTop: '150px', paddingBottom: '120px' }}>
          <MarqueeBar />
          <StatsBar />
          
          <Capabilities />
          <BottlenecksHide />
          <Deliverables />
          <HowItWorks />
          <FitSection />
          <Comparison />
          <Security />
          
          <ImpactQuote />
          <Pricing />
          <Contact />

          <Footer />
        </div>
      </div>
    </main>
  );
}
