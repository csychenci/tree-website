'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AboutMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-xl -z-10 transform rotate-3"></div>
            <img
              src="/images/about-mission.jpg"
              alt="TreeDeep使命"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
          <p className="text-lg text-gray-700 mb-6">
            TreeDeep的使命是通过创新的技术解决方案，帮助企业实现数字化转型，提升业务效率和竞争力。
          </p>
          <p className="text-lg text-gray-700 mb-6">
            我们相信，技术应该服务于业务，而不仅仅是技术本身。因此，我们始终以客户的业务需求为中心，提供定制化的软件开发服务，帮助客户解决实际问题。
          </p>
          <p className="text-lg text-gray-700">
            通过持续的技术创新和优质的服务，我们致力于成为客户值得信赖的长期合作伙伴，共同成长，共创价值。
          </p>
        </motion.div>
      </div>
    </section>
  );
} 