'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@heroui/react';

const blogPosts = [
  {
    id: 1,
    title: '小程序开发的5个关键步骤',
    excerpt: '小程序已成为企业触达用户的重要渠道，本文将介绍小程序开发的5个关键步骤，帮助您顺利完成小程序开发项目。',
    image: '/images/blog-miniprogram.jpg',
    date: '2023-10-15',
    author: '张伟'
  },
  {
    id: 2,
    title: '如何选择合适的APP开发技术栈',
    excerpt: '面对众多的APP开发技术栈，如何选择最适合自己项目的技术方案？本文将从多个角度进行分析，帮助您做出明智的选择。',
    image: '/images/blog-app-tech.jpg',
    date: '2023-09-28',
    author: '李明'
  },
  {
    id: 3,
    title: '企业官网设计的10个最佳实践',
    excerpt: '一个优秀的企业官网不仅能展示企业形象，还能有效转化访客。本文总结了企业官网设计的10个最佳实践，帮助您打造出色的企业官网。',
    image: '/images/blog-website-design.jpg',
    date: '2023-08-20',
    author: '王芳'
  }
];

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">最新博客</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            分享软件开发领域的最新技术和行业洞察
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                  阅读更多 →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button color="secondary" variant="outline">
            <Link href="/blog">查看所有文章</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 