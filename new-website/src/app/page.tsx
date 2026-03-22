import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Capabilities } from '@/components/Capabilities';
import { Deliverables } from '@/components/Deliverables';
import { BottleneckScan } from '@/components/BottleneckScan';
import { Comparison } from '@/components/Comparison';
import { Proof } from '@/components/Proof';
import { WhyDataDriven } from '@/components/WhyDataDriven';
import { Contact } from '@/components/Contact';
import CanvasBackground from '@/components/CanvasBackground';
import { PainDock } from '@/components/PainDock';

export default function Home() {
  return (
    <main id="top">
      <CanvasBackground />
      <PainDock />

      <div className="blob one" aria-hidden="true"></div>
      <div className="blob two" aria-hidden="true"></div>

      <Navbar />

      <Hero />
      <Capabilities />
      <Deliverables />
      <BottleneckScan />
      <Comparison />
      <Proof />
      <WhyDataDriven />
      <Contact />

      <Footer />
    </main>
  );
}
