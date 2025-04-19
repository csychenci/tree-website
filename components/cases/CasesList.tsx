'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Button, Badge } from '@heroui/react';

// 案例数据
const allCases = [
  {
    id: 1,
    title: '智慧零售小程序',
    category: '小程序开发',
    image: '/images/case-retail-app.jpg',
    description: '为知名零售品牌开发的线上商城小程序，整合会员系统、商品管理和支付功能，提升用户购物体验。',
    client: '某知名零售品牌',
    year: '2023',
    features: ['商品展示', '会员系统', '在线支付', '订单管理', '数据分析']
  },
  {
    id: 2,
    title: '企业形象官网',
    category: '官网开发',
    image: '/images/case-corporate-website.jpg',
    description: '为科技公司打造的现代化企业官网，展示公司产品、服务和企业文化，提升品牌形象。',
    client: '某科技公司',
    year: '2023',
    features: ['响应式设计', '产品展示', '团队介绍', '新闻动态', '联系表单']
  },
  {
    id: 3,
    title: '健康管理APP',
    category: 'APP开发',
    image: '/images/case-health-app.jpg',
    description: '面向健康管理领域的移动应用，集成健康数据监测、饮食记录和运动计划等功能。',
    client: '某健康科技公司',
    year: '2022',
    features: ['健康数据监测', '饮食记录', '运动计划', '睡眠分析', '社区互动']
  },
  {
    id: 4,
    title: '企业资源管理系统',
    category: '后台管理系统',
    image: '/images/case-erp-system.jpg',
    description: '为制造企业开发的资源管理系统，整合采购、生产、销售和财务等模块，提升企业运营效率。',
    client: '某制造企业',
    year: '2022',
    features: ['采购管理', '生产计划', '库存管理', '销售订单', '财务报表']
  },
];

// 分类选项
const categories = [
  '全部',
  '小程序开发',
  '官网开发',
  'APP开发',
  '后台管理系统'
];

export default function CasesList() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredCases = activeCategory === '全部'
    ? allCases
    : allCases.filter(item => item.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            color={activeCategory === category ? 'primary' : 'secondary'}
            variant={activeCategory === category ? 'solid' : 'outline'}
            onClick={() => setActiveCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCases.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge color="primary" className="absolute top-4 left-4">
                  {item.category}
                </Badge>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.slice(0, 3).map((feature, i) => (
                    <Badge key={i} color="secondary" variant="outline">
                      {feature}
                    </Badge>
                  ))}
                  {item.features.length > 3 && (
                    <Badge color="secondary" variant="outline">
                      +{item.features.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>客户: {item.client}</span>
                  <span>年份: {item.year}</span>
                </div>
                <Link href={`/cases/${item.id}`}>
                  <Button color="primary" variant="outline" className="w-full">
                    查看详情
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 