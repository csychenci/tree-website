import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Badge } from '@heroui/react';
import CaseDetail from '@/components/cases/CaseDetail';

// 案例数据
const casesData = [
  {
    id: 1,
    title: '智慧零售小程序',
    category: '小程序开发',
    image: '/images/case-retail-app.jpg',
    description: '为知名零售品牌开发的线上商城小程序，整合会员系统、商品管理和支付功能，提升用户购物体验。',
    client: '某知名零售品牌',
    year: '2023',
    features: ['商品展示', '会员系统', '在线支付', '订单管理', '数据分析'],
    challenge: '客户希望将线下零售业务扩展到线上，但面临用户体验、支付安全和数据同步等挑战。',
    solution: '我们为客户开发了一款功能完善的小程序，实现了商品展示、会员管理、在线支付等核心功能，并与客户的线下系统进行了无缝对接，确保数据实时同步。',
    result: '小程序上线后，客户的线上销售额显著增长，会员数量增加了30%，用户复购率提高了25%。',
    images: [
      '/images/case1-detail1.jpg',
      '/images/case1-detail2.jpg',
      '/images/case1-detail3.jpg',
    ]
  },
  {
    id: 2,
    title: '企业形象官网',
    category: '官网开发',
    image: '/images/case-corporate-website.jpg',
    description: '为科技公司打造的现代化企业官网，展示公司产品、服务和企业文化，提升品牌形象。',
    client: '某科技公司',
    year: '2023',
    features: ['响应式设计', '产品展示', '团队介绍', '新闻动态', '联系表单'],
    challenge: '客户需要一个能够全面展示企业形象和产品的现代化官网，要求设计美观、加载速度快、易于维护。',
    solution: '我们采用最新的前端技术栈，为客户设计开发了一个响应式企业官网，包含产品展示、团队介绍、新闻动态等模块，并集成了内容管理系统，方便客户自行更新内容。',
    result: '新官网上线后，网站访问量增加了50%，页面停留时间延长了40%，通过网站表单的咨询量增加了35%。',
    images: [
      '/images/case2-detail1.jpg',
      '/images/case2-detail2.jpg',
      '/images/case2-detail3.jpg',
    ]
  },
  {
    id: 3,
    title: '健康管理APP',
    category: 'APP开发',
    image: '/images/case-health-app.jpg',
    description: '面向健康管理领域的移动应用，集成健康数据监测、饮食记录和运动计划等功能。',
    client: '某健康科技公司',
    year: '2022',
    features: ['健康数据监测', '饮食记录', '运动计划', '睡眠分析', '社区互动'],
    challenge: '客户希望开发一款能够帮助用户全面管理健康数据的移动应用，要求功能丰富、界面友好、数据安全。',
    solution: '我们为客户开发了一款集健康数据监测、饮食记录、运动计划、睡眠分析和社区互动于一体的健康管理APP，支持多种智能设备数据接入，并提供个性化的健康建议。',
    result: 'APP上线后，用户增长迅速，月活跃用户超过10万，用户健康数据完整度提高了60%，用户满意度达到95%。',
    images: [
      '/images/case3-detail1.jpg',
      '/images/case3-detail2.jpg',
      '/images/case3-detail3.jpg',
    ]
  },
  {
    id: 4,
    title: '企业资源管理系统',
    category: '后台管理系统',
    image: '/images/case-erp-system.jpg',
    description: '为制造企业开发的资源管理系统，整合采购、生产、销售和财务等模块，提升企业运营效率。',
    client: '某制造企业',
    year: '2022',
    features: ['采购管理', '生产计划', '库存管理', '销售订单', '财务报表'],
    challenge: '客户的业务流程复杂，各部门数据孤立，管理效率低下，急需一个集成的资源管理系统来优化业务流程。',
    solution: '我们为客户开发了一套涵盖采购、生产、销售和财务等模块的企业资源管理系统，实现了数据的实时共享和业务流程的自动化处理。',
    result: '系统上线后，客户的订单处理时间缩短了40%，库存周转率提高了30%，人工操作错误减少了80%，整体运营效率显著提升。',
    images: [
      '/images/case4-detail1.jpg',
      '/images/case4-detail2.jpg',
      '/images/case4-detail3.jpg',
    ]
  },
];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = parseInt(params.id);
  const caseItem = casesData.find(item => item.id === id);

  if (!caseItem) {
    return {
      title: '案例不存在 - TreeDeep',
    };
  }

  return {
    title: `${caseItem.title} - 案例详情 - TreeDeep`,
    description: caseItem.description,
  };
}

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const caseItem = casesData.find(item => item.id === id);

  if (!caseItem) {
    return (
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">案例不存在</h1>
          <p className="text-gray-600 mb-8">您查找的案例不存在或已被删除</p>
          <Button color="primary">
            <Link href="/cases">返回案例列表</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-20">
      <CaseDetail caseItem={caseItem} />
    </main>
  );
} 