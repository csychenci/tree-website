'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-200 opacity-20"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-200 opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">关于我们</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            TreeDeep是一家专注于软件开发的技术公司，致力于为企业提供高质量的数字化解决方案
          </p>
        </motion.div>
      </div>
    </section>
  );
} 