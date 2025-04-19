'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@heroui/react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">页面未找到</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            抱歉，您访问的页面不存在或已被移除。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button color="primary" size="lg">
              <Link href="/">返回首页</Link>
            </Button>
            <Button color="secondary" variant="outline" size="lg">
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 