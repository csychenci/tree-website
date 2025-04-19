'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const processes = [
  {
    icon: '🔍',
    title: '需求分析',
    description: '深入了解客户业务需求，明确项目目标、功能需求和技术要求。'
  },
  {
    icon: '📝',
    title: '方案设计',
    description: '基于需求分析，制定详细的解决方案，包括技术架构、功能模块和界面设计。'
  },
  {
    icon: '💻',
    title: '开发实现',
    description: '按照设计方案进行编码开发，定期与客户沟通，确保开发方向符合预期。'
  },
  {
    icon: '🧪',
    title: '测试验收',
    description: '进行全面的功能测试、性能测试和安全测试，确保产品质量。'
  },
  {
    icon: '🚀',
    title: '部署上线',
    description: '将开发完成的产品部署到生产环境，确保系统稳定运行。'
  },
  {
    icon: '🛠️',
    title: '维护优化',
    description: '提供长期的技术支持和系统维护，根据用户反馈持续优化产品。'
  }
];

export default function ServiceProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="mb-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">服务流程</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          我们采用标准化的项目管理流程，确保项目高质量交付
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {processes.map((process, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full -z-10"></div>
            <div className="text-4xl mb-4">{process.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
            <p className="text-gray-600">{process.description}</p>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-50 rounded-tr-full -z-10"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 