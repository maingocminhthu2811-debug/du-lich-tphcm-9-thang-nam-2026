/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * PHẦN 1: NHỮNG CON SỐ TĂNG TRƯỜNG ẤN TƯỢNG - Nền xanh lá chữ vàng ánh kim quét nhẹ
 */

import React from 'react';
import { motion } from 'framer-motion';
import { RotateCw, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { CountUp } from './CountUp';
import { TiltCard } from './TiltCard';

interface Section1FlipCardsProps {
  box2Flipped: boolean;
  onToggleFlipBox2: () => void;
}

export const Section1FlipCards: React.FC<Section1FlipCardsProps> = ({ box2Flipped, onToggleFlipBox2 }) => {
  return (
    <motion.section
      id="phan-1"
      className="py-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Nền Xanh Lá Chữ Vàng Ánh Kim Quét Nhẹ */}
        <motion.div
          className="text-center mb-8 py-2 overflow-visible"
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
              NHỮNG CON SỐ TĂNG TRƯỜNG ẤN TƯỢNG
            </span>
          </motion.h2>
        </motion.div>

        {/* 3 Cards Grid (+1 Size chữ, Tích hợp 3D Tilt Effect) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000 items-stretch">
          
          {/* ========================================================================= */}
          {/* BOX 1: TỔNG THU DU LỊCH */}
          {/* ========================================================================= */}
          <TiltCard className="h-full">
            <motion.div
              className="info-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border-t-4 border-t-emerald-600 overflow-hidden min-h-[440px] h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 min-h-[48px] flex items-center">
                  TỔNG THU DU LỊCH
                </h3>

                <div className="space-y-3.5 text-slate-800 text-base leading-relaxed flex-1">
                  {/* Yellow Background + Green Numbers */}
                  <div className="p-4 rounded-xl bg-amber-100/80 border border-amber-300/80">
                    <div className="text-emerald-700 font-black text-2xl sm:text-3xl font-num">
                      <CountUp value={282696} suffix=" tỷ đồng" />
                    </div>
                  </div>
                  
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 flex items-center justify-between">
                    <span className="text-sm sm:text-base">Tăng <strong className="text-emerald-700 font-extrabold font-num"><CountUp value={43.4} decimals={1} suffix="%" /></strong> so với cùng kỳ 2025</span>
                    <span className="text-emerald-700 bg-amber-100/90 text-xs px-2.5 py-1 rounded font-bold flex items-center gap-0.5 shrink-0 ml-1 border border-amber-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700" /> +<CountUp value={43.4} decimals={1} suffix="%" />
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800">
                    <div className="text-sm sm:text-base">Đạt <strong className="text-emerald-700 font-extrabold font-num"><CountUp value={85.7} decimals={1} suffix="%" /></strong> kế hoạch năm 2026 (<strong className="text-emerald-700 font-bold font-num"><CountUp value={330000} suffix=" tỷ" /></strong>)</div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mt-3 overflow-hidden">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '85.7%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TiltCard>

          {/* ========================================================================= */}
          {/* BOX 2: KHÁCH DU LỊCH QUỐC TẾ (Lật Card 3D) */}
          {/* ========================================================================= */}
          <TiltCard className="h-full" tiltMaxAngle={8}>
            <motion.div
              className="min-h-[440px] h-full relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer rounded-2xl ${
                  box2Flipped ? 'rotate-y-180' : ''
                }`}
                onClick={onToggleFlipBox2}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onToggleFlipBox2();
                  }
                }}
                aria-label="Lật BOX 2"
              >
                {/* Front of Box 2 */}
                <div className="absolute inset-0 backface-hidden info-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border-t-4 border-t-emerald-600 overflow-hidden">
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 min-h-[48px] flex items-center">
                        KHÁCH DU LỊCH QUỐC TẾ
                      </h3>
                    </div>

                    <div className="space-y-3.5 text-slate-800 text-base leading-relaxed flex-1 mt-1">
                      {/* Yellow Background + Green Numbers */}
                      <div className="p-4 rounded-xl bg-amber-100/80 border border-amber-300/80">
                        <div className="text-emerald-700 font-black text-2xl sm:text-3xl font-num">
                          <CountUp value={8517428} suffix=" lượt" />
                        </div>
                      </div>
                      
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 flex items-center justify-between">
                        <span className="text-sm sm:text-base">Tăng <strong className="text-emerald-700 font-extrabold font-num"><CountUp value={34.5} decimals={1} suffix="%" /></strong> so với cùng kỳ 2025</span>
                        <span className="text-emerald-700 bg-amber-100/90 text-xs px-2.5 py-1 rounded font-bold flex items-center gap-0.5 shrink-0 ml-1 border border-amber-300">
                          <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700" /> +<CountUp value={34.5} decimals={1} suffix="%" />
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800">
                        <div className="text-sm sm:text-base">Đạt <strong className="text-emerald-700 font-extrabold font-num"><CountUp value={77.4} decimals={1} suffix="%" /></strong> kế hoạch năm 2026 <br /> (<strong className="text-emerald-700 font-bold font-num"><CountUp value={11} suffix=" triệu lượt" /></strong>)</div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mt-3 overflow-hidden">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '77.4%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2.5 mt-2 border-t border-slate-100 text-center text-sm text-emerald-800 font-bold flex items-center justify-center gap-1 shrink-0">
                    <RotateCw className="w-4 h-4 text-emerald-700" />
                    <span>Xem thêm</span>
                  </div>
                </div>

                {/* Back of Box 2 */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 info-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border-t-4 border-t-emerald-600 bg-amber-50/50 overflow-hidden">
                  <div className="flex-1 flex flex-col">
                    <div className="space-y-3.5 text-sm sm:text-base text-slate-900 leading-relaxed flex-1">
                      <div className="p-4 rounded-xl bg-white border border-amber-300 shadow-2xs font-medium">
                        Tập trung khai thác thị trường trọng điểm: <strong>Hàn Quốc, Nhật Bản, Australia, Đông Bắc Á (Chi tiêu cao)</strong>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-amber-300 shadow-2xs font-medium">
                        Chuyển dịch chiến lược: từ phát triển chiều rộng sang chiều sâu <strong>(Tổ chức thành công Hội chợ Du lịch Quốc tế ITE HCMC 2026, Chuỗi hoạt động kỳ nghỉ lễ 2-9)</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2.5 mt-2 border-t border-amber-200 text-center text-sm text-emerald-800 font-bold shrink-0">
                    Quay lại
                  </div>
                </div>
              </div>
            </motion.div>
          </TiltCard>

          {/* ========================================================================= */}
          {/* BOX 3: KHÁCH DU LỊCH NỘI ĐỊA */}
          {/* ========================================================================= */}
          <TiltCard className="h-full">
            <motion.div
              className="info-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border-t-4 border-t-emerald-600 overflow-hidden min-h-[440px] h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 min-h-[48px] flex items-center">
                  KHÁCH DU LỊCH NỘI ĐỊA
                </h3>

                <div className="space-y-3.5 text-slate-800 text-base leading-relaxed flex-1">
                  {/* Yellow Background + Green Numbers */}
                  <div className="p-4 rounded-xl bg-amber-100/80 border border-amber-300/80">
                    <div className="text-emerald-700 font-black text-2xl sm:text-3xl font-num">
                      <CountUp value={39565000} suffix=" lượt" />
                    </div>
                  </div>
                  
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 flex items-start justify-between gap-1.5">
                    <span className="text-sm sm:text-base leading-snug">Giảm <strong className="text-amber-800 font-bold font-num"><CountUp value={5.2} decimals={1} suffix="%" /></strong> so với cùng kỳ (do áp lực giá vé máy bay và xu hướng thắt chặt chi tiêu)</span>
                    <span className="text-amber-800 bg-amber-100/90 text-xs px-2 py-0.5 rounded font-bold flex items-center gap-0.5 shrink-0 mt-0.5 border border-amber-300">
                      <ArrowDownRight className="w-3.5 h-3.5 text-amber-800" /> -<CountUp value={5.2} decimals={1} suffix="%" />
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800">
                    <div className="text-sm sm:text-base">Đạt <strong className="text-emerald-700 font-extrabold font-num"><CountUp value={79.1} decimals={1} suffix="%" /></strong> chỉ tiêu năm 2026 <br /> (<strong className="text-emerald-700 font-bold font-num"><CountUp value={50} suffix=" triệu lượt" /></strong>)</div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mt-3 overflow-hidden">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '79.1%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TiltCard>

        </div>
      </div>
    </motion.section>
  );
};
