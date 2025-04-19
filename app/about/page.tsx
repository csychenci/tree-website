import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutTeam from '@/components/about/AboutTeam';
import AboutValues from '@/components/about/AboutValues';
import ContactCTA from '@/components/shared/ContactCTA';

export const metadata: Metadata = {
  title: '关于我们 - TreeDeep',
  description: '了解TreeDeep的企业文化、团队和使命，我们致力于为企业提供高质量的软件开发服务',
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20">
      <AboutHero />
      <div className="container mx-auto px-4">
        <AboutMission />
        <AboutValues />
        <AboutTeam />
        <ContactCTA />
      </div>
    </main>
  );
}
