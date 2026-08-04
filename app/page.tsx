import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { About } from '@/components/sections/About';
import { Programs } from '@/components/sections/Programs';
import { Membership } from '@/components/sections/Membership';
import { Transformation } from '@/components/sections/Transformation';
import { Trainers } from '@/components/sections/Trainers';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Programs />
        <Membership />
        <Transformation />
        <Trainers />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
