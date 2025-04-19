'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      {/* 背景装饰 */}
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
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              专业的软件开发<br />定制化解决方案
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl">
              TreeDeep致力于为企业提供高质量的软件开发服务，包括小程序开发、官网开发、APP开发和后台管理系统开发。
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button color="primary" size="lg">
                <Link href="/services">了解服务</Link>
              </Button>
              <Button color="secondary" variant="outline" size="lg">
                <Link href="/contact">联系我们</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-xl -z-10 transform rotate-3"></div>
              <img
                src="/images/hero-image.jpg"
                alt="TreeDeep软件开发"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 