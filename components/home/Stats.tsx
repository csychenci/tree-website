'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: 100, label: '成功项目', suffix: '+' },
  { value: 50, label: '企业客户', suffix: '+' },
  { value: 5, label: '行业经验', suffix: '年' },
  { value: 98, label: '客户满意度', suffix: '%' }
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000; // 动画持续时间（毫秒）
      const steps = 30; // 动画步数
      const stepValue = stat.value / steps;
      let currentStep = 0;

      return setInterval(() => {
        if (currentStep < steps) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.round(stepValue * (currentStep + 1)), stat.value);
            return newCounts;
          });
          currentStep++;
        } else {
          clearInterval(intervals[index]);
        }
      }, duration / steps);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isInView]);

  return (
    <section className="py-20 bg-blue-600 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 