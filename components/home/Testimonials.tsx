'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const testimonials = [
  {
    content: "TreeDeep团队的专业素养和技术能力给我们留下了深刻印象。他们开发的小程序不仅功能完善，而且用户体验非常好，上线后获得了很多客户的好评。",
    author: "张先生",
    position: "某零售品牌市场总监"
  },
  {
    content: "与TreeDeep合作开发企业官网是一次愉快的体验。从需求分析到设计开发，再到最终上线，整个过程非常顺畅。他们的团队不仅技术过硬，而且能够理解我们的业务需求。",
    author: "李女士",
    position: "某科技公司CEO"
  },
  {
    content: "我们的健康管理APP由TreeDeep团队开发，他们不仅按时交付了高质量的产品，还提供了持续的技术支持和优化服务。用户反馈非常积极，我们非常满意。",
    author: "王总",
    position: "某健康科技公司创始人"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">客户评价</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            听听我们的客户怎么说
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 p-8 rounded-2xl shadow-md mb-8"
          >
            <div className="text-3xl text-blue-500 mb-4">"</div>
            <p className="text-lg text-gray-700 mb-6">{testimonials[activeIndex].content}</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                {testimonials[activeIndex].author.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="font-semibold">{testimonials[activeIndex].author}</p>
                <p className="text-gray-600 text-sm">{testimonials[activeIndex].position}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                aria-label={`查看第 ${index + 1} 条评价`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 