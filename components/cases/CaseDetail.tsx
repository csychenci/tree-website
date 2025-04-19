'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Button, Badge } from '@heroui/react';

interface CaseItemProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  images: string[];
}

export default function CaseDetail({ caseItem }: { caseItem: CaseItemProps }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <Link href="/cases" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          返回案例列表
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-12">
          <div className="relative h-96">
            <img
              src={caseItem.image}
              alt={caseItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <Badge color="primary" size="lg" className="mb-4">
                  {caseItem.category}
                </Badge>
                <h1 className="text-4xl font-bold mb-2">{caseItem.title}</h1>
                <p className="text-lg opacity-90">{caseItem.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">项目信息</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 mb-1">客户</p>
                <p className="font-medium">{caseItem.client}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">年份</p>
                <p className="font-medium">{caseItem.year}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">类别</p>
                <p className="font-medium">{caseItem.category}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">功能特点</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {caseItem.features.map((feature, index) => (
                    <Badge key={index} color="secondary" variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">项目挑战</h3>
              <p className="text-gray-700">{caseItem.challenge}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">解决方案</h3>
              <p className="text-gray-700">{caseItem.solution}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">项目成果</h3>
              <p className="text-gray-700">{caseItem.result}</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">项目展示</h2>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="mb-4">
              <img
                src={caseItem.images[activeImage]}
                alt={`${caseItem.title} 展示图 ${activeImage + 1}`}
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {caseItem.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border-2 transition-all ${activeImage === index ? 'border-blue-600 scale-105' : 'border-transparent'
                    }`}
                >
                  <img
                    src={image}
                    alt={`${caseItem.title} 缩略图 ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">需要类似的解决方案？</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            我们可以为您的企业提供定制化的软件开发服务，满足您的特定需求
          </p>
          <Button color="primary" size="lg">
            <Link href="/contact">联系我们</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
} 