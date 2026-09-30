/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * PHẦN 2: SỰ KIỆN VÀ SẢN PHẨM ĐỘT PHÁ
 * - Tích hợp 3D Tilt Effect & CountUp cho các số liệu sự kiện
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Handshake, Newspaper, HeartHandshake, DollarSign } from 'lucide-react';
import { ImageCarousel, CarouselSlide } from './ImageCarousel';
import { CountUp } from './CountUp';
import { TiltCard } from './TiltCard';

export const Section2Events: React.FC = () => {
  // Slides cho Sự kiện 1 (ITE HCMC - Hình 1)
  const event1Slides: CarouselSlide[] = [
    {
      id: 'ite-hcmc-img1',
      src: '/1.jpg',
      fallbackSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
      caption: 'Lễ khai mạc Hội chợ Du lịch Quốc tế TPHCM lần thứ 20 (ITE HCMC 2026), ngày 27-8',
    },
  ];

  // Slides cho Sự kiện 2 (Lễ hội Áo dài - Hình 2, Hình 3)
  const event2Slides: CarouselSlide[] = [
    {
      id: 'ao-dai-img2',
      src: '/2.jpg',
      fallbackSrc: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop',
      caption: 'Cuộc thi Duyên dáng Áo dài TPHCM năm 2026',
    },
    {
      id: 'ao-dai-img3',
      src: '/3.jpg',
      fallbackSrc: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop',
      caption: 'Lễ hội Áo dài TPHCM lần thứ 12 năm 2026',
    },
  ];

  // Slides cho Sự kiện 3 (Lễ 2-9 - Hình 4, Hình 5, Hình 6, Hình 7)
  const event3Slides: CarouselSlide[] = [
    {
      id: 'le-2-9-img4',
      src: '/4.jpg',
      fallbackSrc: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
      caption: 'TPHCM rực rỡ cờ hoa chào mừng Quốc khánh 2-9',
    },
    {
      id: 'le-2-9-img5',
      src: '/5.jpg',
      fallbackSrc: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200&auto=format&fit=crop',
      caption: 'TPHCM rực rỡ cờ hoa chào mừng Quốc khánh 2-9',
    },
    {
      id: 'le-2-9-img6',
      src: '/6.jpg',
      fallbackSrc: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
      caption: 'Người dân hân hoan mừng Quốc khánh 2-9',
    },
    {
      id: 'le-2-9-img7',
      src: '/7.jpg',
      fallbackSrc: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=1200&auto=format&fit=crop',
      caption: 'Người dân hân hoan mừng Quốc khánh 2-9',
    },
  ];

  return (
    <motion.section
      id="phan-2"
      className="py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Main Header */}
        <motion.div
          className="text-center mb-10 py-2 overflow-visible"
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
            SỰ KIỆN VÀ SẢN PHẨM ĐỘT PHÁ
          </motion.h2>
        </motion.div>

        {/* Các phần sự kiện lớn với hiệu ứng 3D Tilt */}
        <div className="flex flex-col gap-10 sm:gap-12">
          
          {/* ========================================================================= */}
          {/* SỰ KIỆN 1: HỘI CHỢ DU LỊCH QUỐC TẾ TPHCM LẦN THỨ 20 (ITE HCMC) */}
          {/* ========================================================================= */}
          <TiltCard tiltMaxAngle={6} scaleOnHover={1.015}>
            <motion.div
              className="info-card rounded-3xl p-6 sm:p-8 border-t-4 border-t-emerald-600 bg-white shadow-lg flex flex-col gap-6"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Title */}
              <div className="text-center py-2 px-2 overflow-visible">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-center text-emerald-800 tracking-wide leading-relaxed py-2">
                  HỘI CHỢ DU LỊCH QUỐC TẾ TPHCM <br /> LẦN THỨ 20 (ITE HCMC)
                </h3>
              </div>

              {/* Các con số chỉ tiêu nổi bật */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-base">
                <div className="p-4 rounded-2xl bg-amber-100/80 border border-amber-300/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 rounded-xl bg-amber-200/90 text-emerald-800 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-extrabold text-emerald-700 text-2xl font-num block">
                      <CountUp value={520} />
                    </span>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">đơn vị triển lãm</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-100/80 border border-amber-300/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 rounded-xl bg-amber-200/90 text-emerald-800 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-extrabold text-emerald-700 text-2xl font-num block">
                      <CountUp value={309} />
                    </span>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">người mua quốc tế từ 32 quốc gia/vùng lãnh thổ</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-100/80 border border-amber-300/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 rounded-xl bg-amber-200/90 text-emerald-800 shrink-0">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-extrabold text-emerald-700 text-2xl font-num block">
                      <CountUp value={21000} />
                    </span>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">cuộc hẹn giao thương B2B</span>
                  </div>
                </div>
              </div>

              {/* Trình chiếu hình ảnh phía dưới (Hình 1) */}
              <div className="pt-2 border-t border-slate-100">
                <ImageCarousel slides={event1Slides} autoPlayInterval={10000} />
              </div>
            </motion.div>
          </TiltCard>

          {/* ========================================================================= */}
          {/* SỰ KIỆN 2: LỄ HỘI ÁO DÀI TPHCM LẦN THỨ 12 */}
          {/* ========================================================================= */}
          <TiltCard tiltMaxAngle={6} scaleOnHover={1.015}>
            <motion.div
              className="info-card rounded-3xl p-6 sm:p-8 border-t-4 border-t-emerald-600 bg-white shadow-lg flex flex-col gap-6"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Title */}
              <div className="text-center py-2 px-2 overflow-visible">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-center text-emerald-800 tracking-wide leading-relaxed py-2">
                  LỄ HỘI ÁO DÀI TPHCM LẦN THỨ 12
                </h3>
              </div>

              {/* Các con số chỉ tiêu nổi bật */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
                <div className="p-4 rounded-2xl bg-amber-100/80 border border-amber-300/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 rounded-xl bg-amber-200/90 text-emerald-800 shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-extrabold text-emerald-700 text-2xl font-num block">
                      <CountUp value={11} />
                    </span>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">đơn vị tài trợ</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-100/80 border border-amber-300/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 rounded-xl bg-amber-200/90 text-emerald-800 shrink-0">
                    <Newspaper className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-extrabold text-emerald-700 text-2xl font-num block">
                      <CountUp value={300} />
                    </span>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">tin bài từ các cơ quan báo chí trong và ngoài nước</span>
                  </div>
                </div>
              </div>

              {/* Trình chiếu hình ảnh phía dưới (Hình 2, Hình 3) */}
              <div className="pt-2 border-t border-slate-100">
                <ImageCarousel slides={event2Slides} autoPlayInterval={10000} />
              </div>
            </motion.div>
          </TiltCard>

          {/* ========================================================================= */}
          {/* SỰ KIỆN 3: CHUỖI HOẠT ĐỘNG KỲ NGHĨ LỄ 2-9 */}
          {/* ========================================================================= */}
          <TiltCard tiltMaxAngle={6} scaleOnHover={1.015}>
            <motion.div
              className="info-card rounded-3xl p-6 sm:p-8 border-t-4 border-t-emerald-600 bg-white shadow-lg flex flex-col gap-6"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Title */}
              <div className="text-center py-2 px-2 overflow-visible">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-center text-emerald-800 tracking-wide leading-relaxed py-2">
                  CHUỖI HOẠT ĐỘNG KỲ NGHĨ LỄ 2-9
                </h3>
              </div>

              {/* Các con số chỉ tiêu nổi bật */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
                <div className="p-4 rounded-2xl bg-amber-100/80 border border-amber-300/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 rounded-xl bg-amber-200/90 text-emerald-800 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">Thu hút</span>{' '}
                    <span className="font-extrabold text-emerald-700 text-2xl font-num block">
                      <CountUp value={1.7} decimals={1} suffix=" triệu lượt khách" />
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-100/80 border border-amber-300/80 flex items-center gap-3.5 shadow-2xs">
                  <div className="p-3 rounded-xl bg-amber-200/90 text-emerald-800 shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">Doanh thu đạt</span>{' '}
                    <span className="font-extrabold text-emerald-700 text-2xl font-num block">
                      <CountUp value={4900} suffix=" tỷ đồng" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Trình chiếu hình ảnh phía dưới (Hình 4, 5, 6, 7) */}
              <div className="pt-2 border-t border-slate-100">
                <ImageCarousel slides={event3Slides} autoPlayInterval={10000} />
              </div>
            </motion.div>
          </TiltCard>

        </div>
      </div>
    </motion.section>
  );
};
