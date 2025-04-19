import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import CasePreview from '@/components/home/CasePreview';
import Partners from '@/components/home/Partners';
import BlogPreview from '@/components/home/BlogPreview';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'TreeDeep - 专业的软件开发服务提供商',
  description: 'TreeDeep提供小程序开发、官网开发、APP开发和后台管理系统开发等全方位软件开发服务',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <Services />
      <CasePreview />
      <Testimonials />
      <Partners />
      <BlogPreview />
      <ContactSection />
    </main>
  );
}
