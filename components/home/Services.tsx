'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@heroui/react';

const services = [
  {
    icon: '📱',
    title: '小程序开发',
    description: '打造功能完善、体验流畅的微信小程序，帮助企业快速触达用户，提升品牌影响力。',
    link: '/services#miniprogram'
  },
  {
    icon: '🌐',
    title: '官网开发',
    description: '设计开发响应式企业官网，展示企业形象，提升品牌价值，助力业务增长。',
    link: '/services#website'
  },
  {
    icon: '📲',
    title: 'APP开发',
    description: '提供iOS和Android原生应用开发，打造高性能、用户体验佳的移动应用。',
    link: '/services#app'
  },
  {
    icon: '⚙️',
    title: '后台管理系统',
    description: '开发高效、安全的后台管理系统，优化企业内部流程，提升运营效率。',
    link: '/services#management'
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">我们的服务</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            TreeDeep提供全方位的软件开发服务，满足企业各种数字化需求
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                了解更多 →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button color="primary">
            <Link href="/services">查看所有服务</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 