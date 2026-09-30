/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * PHẦN 3: ĐỊNH HƯỚNG 3 THÁNG CUỐI NĂM
 * - Nền xanh lá chữ vàng ánh kim quét nhẹ
 */

import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import { TiltCard } from './TiltCard';

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
        
        {/* Section Header Nền Xanh Lá Chữ Vàng Ánh Kim Quét Nhẹ */}
        <motion.div
          className="text-center mb-6 py-2 overflow-visible"
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 border border-amber-300/40 shadow-xl rounded-2xl sm:rounded-full py-3.5 px-6 sm:px-10 inline-block"
          >
            <span className="shimmer-gold-text text-xl sm:text-2xl lg:text-3xl font-black tracking-wider uppercase leading-relaxed block">
              ĐỊNH HƯỚNG 3 THÁNG CUỐI NĂM
            </span>
          </motion.h2>
        </motion.div>

        {/* Strategic Infographic Cards với 3D Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-4 items-stretch">
          
          {/* Card 1 */}
          <TiltCard className="h-full">
            <motion.div
              className="info-card rounded-2xl p-5 sm:p-6 border-l-4 border-l-emerald-600 bg-white flex flex-col justify-between shadow-xs h-full"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <AnimatedCheckBadge index={0} />
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed pt-0.5">
                  Tiếp tục bổ sung, hoàn thiện “Đề án phát triển du lịch đến năm <strong className="text-emerald-700 font-extrabold font-num">2030</strong>”
                </div>
              </div>
            </motion.div>
          </TiltCard>

          {/* Card 3 */}
          <TiltCard className="h-full">
            <motion.div
              className="info-card rounded-2xl p-5 sm:p-6 border-l-4 border-l-emerald-600 bg-white flex flex-col justify-between shadow-xs h-full"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <AnimatedCheckBadge index={2} />
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed pt-0.5">
                  Đẩy mạnh quảng bá du lịch tại thị trường quốc tế
                </div>
              </div>
            </motion.div>
          </TiltCard>

          {/* Card 2: Phát triển sản phẩm du lịch đặc trưng (Dạng List) */}
          <TiltCard className="h-full">
            <motion.div
              className="info-card rounded-2xl p-5 sm:p-6 border-l-4 border-l-emerald-600 bg-white flex flex-col justify-between shadow-xs h-full"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <AnimatedCheckBadge index={1} />
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed pt-0.5 w-full">
                  <div className="text-slate-900 font-bold mb-1.5">
                    Phát triển sản phẩm du lịch đặc trưng:
                  </div>
                  <ul className="space-y-1.5 text-slate-800 font-medium text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>Ngắm TPHCM từ trên cao bằng trực thăng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>Du lịch đường thủy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>Du lịch MICE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>Du lịch sinh thái</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>Du lịch biển đảo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>Du lịch kết hợp y tế</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </TiltCard>

          {/* Card 4: Sự kiện lớn (Dạng List) */}
          <TiltCard className="h-full">
            <motion.div
              className="info-card rounded-2xl p-5 sm:p-6 border-l-4 border-l-emerald-600 bg-white flex flex-col justify-between shadow-xs h-full"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <AnimatedCheckBadge index={3} />
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed pt-0.5 w-full">
                  <div className="text-slate-900 font-bold mb-1.5">
                    Các sự kiện lớn:
                  </div>
                  <ul className="space-y-2 text-slate-800 font-medium text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>Tuần lễ Du lịch TPHCM lần thứ <strong className="text-emerald-700 font-extrabold font-num">6</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>Giải Marathon Quốc tế TPHCM Lần thứ <strong className="text-emerald-700 font-extrabold font-num">9</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </TiltCard>

        </div>
      </div>
    </motion.section>
  );
};
