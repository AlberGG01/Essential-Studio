import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import HeroSection from '@/components/sections/HeroSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import GalleryPreview from '@/components/sections/GalleryPreview';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <GalleryPreview />
        <CTASection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
