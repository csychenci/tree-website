'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const features = [
  {
    icon: '🚀',
    title: '高效开发',
    description: '采用敏捷开发方法，快速迭代，缩短项目周期，让您的产品更快上线。'
  },
  {
    icon: '🔒',
    title: '安全可靠',
    description: '注重数据安全和系统稳定性，采用多重安全措施保障您的业务安全运行。'
  },
  {
    icon: '🎨',
    title: '精美设计',
    description: '专业UI/UX设计团队，打造美观易用的界面，提升用户体验和转化率。'
  },
  {
    icon: '🔄',
    title: '持续优化',
    description: '提供长期技术支持和系统维护，持续优化产品性能和用户体验。'
  },
  {
    icon: '📱',
    title: '全终端适配',
    description: '响应式设计，完美适配PC、平板和手机等各类终端设备，提供一致的用户体验。'
  },
  {
    icon: '🌐',
    title: '定制化解决方案',
    description: '根据企业实际需求，提供个性化定制服务，解决特定行业痛点。'
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的优势</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            专业技术团队，为您提供全方位的软件开发支持
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 