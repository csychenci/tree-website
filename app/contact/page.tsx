import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: '联系我们 - TreeDeep',
  description: '联系TreeDeep，获取专业的软件开发服务咨询和支持',
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            无论您有任何问题或需求，都可以随时联系我们，我们将竭诚为您服务
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
