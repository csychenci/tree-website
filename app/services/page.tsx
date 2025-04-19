import { Metadata } from 'next';
import ServicesList from '@/components/services/ServicesList';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ContactCTA from '@/components/shared/ContactCTA';

export const metadata: Metadata = {
  title: '服务 - TreeDeep',
  description: 'TreeDeep提供小程序开发、官网开发、APP开发和后台管理系统开发等全方位软件开发服务',
};

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">我们的服务</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            TreeDeep提供全方位的软件开发服务，帮助企业实现数字化转型，提升业务效率
          </p>
        </div>

        <ServicesList />
        <ServiceProcess />
        <ServiceFAQ />
        <ContactCTA />
      </div>
    </main>
  );
}
