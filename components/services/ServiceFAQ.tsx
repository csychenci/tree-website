'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const faqs = [
  {
    question: '开发一个项目需要多长时间？',
    answer: '项目开发周期取决于项目的复杂度和规模。一般来说，小程序和简单官网开发周期为1-2个月，复杂APP和管理系统开发周期为3-6个月。我们会在项目启动前提供详细的时间规划。'
  },
  {
    question: '开发费用是如何计算的？',
    answer: '开发费用根据项目的功能需求、复杂度、开发周期等因素综合评估。我们会在充分了解您的需求后，提供详细的报价方案。'
  },
  {
    question: '项目开发完成后是否提供后续维护？',
    answer: '是的，我们提供长期的技术支持和系统维护服务。根据客户需求，可以选择按次付费的维护方式或签订长期维护合同。'
  },
  {
    question: '如何保证开发质量？',
    answer: '我们拥有严格的质量控制流程，包括代码审查、自动化测试、性能测试和安全测试等。同时，我们会定期与客户沟通，确保开发方向符合预期。'
  },
  {
    question: '是否可以查看之前的开发案例？',
    answer: '是的，您可以在我们的案例页面查看之前的开发案例，或者联系我们获取更多详细信息。'
  },
  {
    question: '开发过程中如何与客户沟通？',
    answer: '我们采用敏捷开发方法，定期与客户进行沟通和演示。通常每周会有一次进度汇报，确保项目按计划推进，并及时调整开发方向。'
  }
];

export default function ServiceFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">常见问题</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          关于我们服务的一些常见问题解答
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-colors duration-300 ${openIndex === index ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
                }`}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="p-4 bg-white rounded-b-lg">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 