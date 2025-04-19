'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { Button, Badge } from '@heroui/react';

// 案例数据
const cases = [
  {
    id: 1,
    title: '智慧零售小程序',
    category: '小程序开发',
    image: '/images/case-retail-app.jpg',
    description: '为知名零售品牌开发的线上商城小程序，整合会员系统、商品管理和支付功能，提升用户购物体验。',
  },
  {
    id: 2,
    title: '企业形象官网',
    category: '官网开发',
    image: '/images/case-corporate-website.jpg',
    description: '为科技公司打造的现代化企业官网，展示公司产品、服务和企业文化，提升品牌形象。',
  },
  {
    id: 3,
    title: '健康管理APP',
    category: 'APP开发',
    image: '/images/case-health-app.jpg',
    description: '面向健康管理领域的移动应用，集成健康数据监测、饮食记录和运动计划等功能。',
  },
];

export default function CasePreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">成功案例</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们为各行业客户提供定制化解决方案，以下是部分成功案例
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge color="primary" className="absolute top-4 left-4">
                  {item.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={`/cases/${item.id}`} className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                  查看详情 →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button color="primary">
            <Link href="/cases">查看所有案例</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 