'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Button } from '@heroui/react';
import Link from 'next/link';

const services = [
  {
    id: 'miniprogram',
    title: '小程序开发',
    description: '打造功能完善、体验流畅的微信小程序，帮助企业快速触达用户，提升品牌影响力。',
    features: [
      '用户友好的界面设计',
      '高效的数据处理和存储',
      '安全的支付功能集成',
      '会员系统和用户管理',
      '数据分析和统计功能',
      '与企业现有系统对接'
    ],
    image: '/images/service-miniprogram.jpg',
    caseLink: '/cases?category=小程序开发'
  },
  {
    id: 'website',
    title: '官网开发',
    description: '设计开发响应式企业官网，展示企业形象，提升品牌价值，助力业务增长。',
    features: [
      '响应式设计，适配各种设备',
      'SEO优化，提高搜索引擎排名',
      '内容管理系统，方便内容更新',
      '表单收集和客户咨询功能',
      '多语言支持',
      '网站性能优化'
    ],
    image: '/images/service-website.jpg',
    caseLink: '/cases?category=官网开发'
  },
  {
    id: 'app',
    title: 'APP开发',
    description: '提供iOS和Android原生应用开发，打造高性能、用户体验佳的移动应用。',
    features: [
      'iOS和Android双平台支持',
      '流畅的用户界面和交互体验',
      '离线数据存储和同步',
      '推送通知功能',
      '地图和定位服务集成',
      '第三方服务集成'
    ],
    image: '/images/service-app.jpg',
    caseLink: '/cases?category=APP开发'
  },
  {
    id: 'management',
    title: '后台管理系统',
    description: '开发高效、安全的后台管理系统，优化企业内部流程，提升运营效率。',
    features: [
      '用户权限管理',
      '数据可视化和报表生成',
      '业务流程自动化',
      '多维度数据筛选和查询',
      '批量数据处理',
      '系统日志和操作记录'
    ],
    image: '/images/service-management.jpg',
    caseLink: '/cases?category=后台管理系统'
  }
];

export default function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="mb-20">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          id={service.id}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 mb-20 items-center`}
        >
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-xl -z-10 transform -rotate-2"></div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-lg text-gray-600 mb-6">{service.description}</p>

            <h3 className="text-xl font-semibold mb-4">主要功能</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button color="primary">
                <Link href="/contact">咨询服务</Link>
              </Button>
              <Button color="secondary" variant="outline">
                <Link href={service.caseLink}>查看相关案例</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 