'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button, Input, Textarea, Select, SelectItem } from '@heroui/react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormState({ name: '', email: '', phone: '', service: '', message: '' });

    // 重置成功状态
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">发送消息</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
          <Input
            id="name"
            name="name"
            placeholder="您的姓名"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">邮箱</label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="您的邮箱"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">电话</label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="您的电话"
            value={formState.phone}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-gray-700 mb-2">感兴趣的服务</label>
          <Select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className="w-full"
          >
            <SelectItem key="">请选择服务类型</SelectItem>
            <SelectItem key="miniprogram">小程序开发</SelectItem>
            <SelectItem key="website">官网开发</SelectItem>
            <SelectItem key="app">APP开发</SelectItem>
            <SelectItem key="management">后台管理系统</SelectItem>
            <SelectItem key="other">其他服务</SelectItem>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">留言</label>
          <Textarea
            id="message"
            name="message"
            placeholder="请描述您的需求"
            value={formState.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          color="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? '提交中...' : '发送消息'}
        </Button>

        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center"
          >
            消息已成功发送，我们将尽快与您联系！
          </motion.div>
        )}
      </form>
    </motion.div>
  );
} 