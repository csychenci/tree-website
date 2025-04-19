'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="my-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white opacity-10 rounded-full"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">准备开始您的项目了吗？</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            无论您是有明确的项目需求，还是需要专业的咨询建议，我们都随时准备为您提供帮助
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button color="white" size="lg">
              <Link href="/contact">联系我们</Link>
            </Button>
            <Button color="white" variant="outline" size="lg">
              <Link href="/cases">查看案例</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 