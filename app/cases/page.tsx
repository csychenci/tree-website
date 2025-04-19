import { Metadata } from 'next';
import CasesList from '@/components/cases/CasesList';

export const metadata: Metadata = {
  title: '成功案例 - TreeDeep',
  description: 'TreeDeep的成功案例展示，包括小程序开发、官网开发、APP开发和后台管理系统开发等',
};

export default function CasesPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">成功案例</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们为各行业客户提供定制化解决方案，以下是部分成功案例展示
          </p>
        </div>

        <CasesList />
      </div>
    </main>
  );
}
