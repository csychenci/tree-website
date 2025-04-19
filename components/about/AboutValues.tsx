'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const values = [
  {
    icon: '🎯',
    title: '客户至上',
    description: '我们始终将客户需求放在首位，提供超出预期的服务和解决方案。'
  },
  {
    icon: '💡',
    title: '创新驱动',
    description: '我们不断探索新技术和新方法，为客户创造更多价值。'
  },
  {
    icon: '🤝',
    title: '诚信合作',
    description: '我们坚持诚实守信，与客户建立长期互利的合作关系。'
  },
  {
    icon: '✨',
    title: '追求卓越',
    description: '我们对每一个项目都精益求精，追求最高的质量标准。'
  },
  {
    icon: '🚀',
    title: '持续成长',
    description: '我们鼓励团队成员不断学习和进步，与公司共同成长。'
  },
  {
    icon: '🌱',
    title: '社会责任',
    description: '我们关注社会发展，积极承担企业社会责任。'
  }
];

export default function AboutValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-blue-50 rounded-3xl" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">我们的价值观</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            这些核心价值观指引着我们的日常工作和决策
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 