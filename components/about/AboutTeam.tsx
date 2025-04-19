'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const team = [
  {
    name: '张伟',
    position: '创始人 & CEO',
    bio: '拥有10年以上软件开发和团队管理经验，曾在多家知名科技公司担任技术负责人。',
    image: '/images/team-ceo.jpg'
  },
  {
    name: '李明',
    position: '技术总监',
    bio: '全栈开发专家，精通多种编程语言和框架，负责公司技术方向和架构设计。',
    image: '/images/team-cto.jpg'
  },
  {
    name: '王芳',
    position: '设计总监',
    bio: 'UI/UX设计专家，拥有丰富的用户体验设计经验，致力于创造美观易用的产品界面。',
    image: '/images/team-design.jpg'
  },
  {
    name: '赵强',
    position: '项目经理',
    bio: '拥有PMP认证，擅长敏捷开发管理，确保项目高质量按时交付。',
    image: '/images/team-pm.jpg'
  }
];

export default function AboutTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">我们的团队</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          由经验丰富的专业人士组成，致力于为客户提供最优质的服务
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 