/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * PHẦN 3: ĐỊNH HƯỚNG 3 THÁNG CUỐI NĂM
 * - Tích hợp CountUp cho số năm và lần tổ chức
 */

import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import { CountUp } from './CountUp';

// Component Icon CheckSquare Động Đồng Nhất
const AnimatedCheckBadge: React.FC<{ index: number }> = ({ index }) => {
  const sequentialDelay = index * 0.4;

  return (
    <motion.div
      whileHover={{ scale: 1.18, rotate: 12 }}
      whileTap={{ scale: 0.92 }}
      className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-800/30 border border-emerald-400/30 cursor-pointer overflow-hidden group"
    >
      {/* Nền phản quang nhịp điệu */}
      <motion.div
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [0.9, 1.25, 0.9],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.4,
          delay: sequentialDelay,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-tr from-amber-300/40 via-emerald-300/20 to-transparent blur-xs pointer-events-none"
      />

      {/* Icon CheckSquare nẩy xanh đậm & xoay nhẹ nhịp nhàng lần lượt */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 10, -8, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          delay: sequentialDelay,
          ease: 'easeInOut',
        }}
        className="relative z-10 flex items-center justify-center"
      >
        <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 drop-shadow-xs stroke-[2.5]" />
      </motion.div>
    </motion.div>
  );
};

export const Section3Checklist: React.FC = () => {
  return (
    <motion.section
      id="phan-3"
      className="py-6 pb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 py-2 overflow-visible"
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase inline-block text-emerald-800 py-3 px-2 leading-relaxed"
          >
            ĐỊNH HƯỚNG 3 THÁNG CUỐI NĂM
          </motion.h2>
        </motion.div>

        {/* Strategic Infographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-4">
          
          {/* Card 1 */}
          <motion.div
            className="info-card rounded-2xl p-5 sm:p-6 border-l-4 border-l-emerald-600 bg-white flex flex-col justify-between shadow-xs"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start gap-3.5 sm:gap-4">
              <AnimatedCheckBadge index={0} />
              <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed pt-0.5">
                Tiếp tục bổ sung, hoàn thiện “Đề án phát triển du lịch đến năm <strong>2030</strong>”
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="info-card rounded-2xl p-5 sm:p-6 border-l-4 border-l-emerald-600 bg-white flex flex-col justify-between shadow-xs"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start gap-3.5 sm:gap-4">
              <AnimatedCheckBadge index={1} />
              <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed pt-0.5">
                Phát triển sản phẩm du lịch đặc trưng: ngắm TPHCM từ trên cao bằng trực thăng, du lịch đường thủy, du lịch MICE, du lịch sinh thái, du lịch biển đảo, du lịch kết hợp y tế.
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="info-card rounded-2xl p-5 sm:p-6 border-l-4 border-l-emerald-600 bg-white flex flex-col justify-between shadow-xs"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start gap-3.5 sm:gap-4">
              <AnimatedCheckBadge index={2} />
              <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed pt-0.5">
                Đẩy mạnh quảng bá du lịch tại thị trường quốc tế
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="info-card rounded-2xl p-5 sm:p-6 border-l-4 border-l-emerald-600 bg-white flex flex-col justify-between shadow-xs"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start gap-3.5 sm:gap-4">
              <AnimatedCheckBadge index={3} />
              <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed pt-0.5">
                Sự kiện lớn: Tuần lễ Du lịch TPHCM lần thứ <strong> 6</strong>, Giải Marathon Quốc tế TPHCM Lần thứ <strong>9 </strong>.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};
