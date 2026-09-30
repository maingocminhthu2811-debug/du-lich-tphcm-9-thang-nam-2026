/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Hero Title & Animated Interactive Green Cover
 * - Tích hợp CountUp cho các số liệu hiệu ứng đếm động mượt mà
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';
import { CountUp } from './CountUp';

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleBannerClick = () => {
    sound.playClick();
  };

  // 15 refined light rays distributed across the banner
  const lightRays = [
    { left: '4%', width: 'w-1', delay: '0s', duration: '3.4s' },
    { left: '11%', width: 'w-1.5', delay: '0.8s', duration: '4.2s' },
    { left: '18%', width: 'w-0.5', delay: '1.5s', duration: '3.6s' },
    { left: '25%', width: 'w-1.5', delay: '0.3s', duration: '4.5s' },
    { left: '32%', width: 'w-1', delay: '2.1s', duration: '3.8s' },
    { left: '39%', width: 'w-1.5', delay: '1.1s', duration: '4.0s' },
    { left: '46%', width: 'w-1.5', delay: '0.6s', duration: '3.5s' },
    { left: '53%', width: 'w-1', delay: '2.4s', duration: '4.3s' },
    { left: '60%', width: 'w-1.5', delay: '1.7s', duration: '3.7s' },
    { left: '67%', width: 'w-1.5', delay: '0.2s', duration: '4.6s' },
    { left: '74%', width: 'w-1', delay: '1.3s', duration: '3.9s' },
    { left: '81%', width: 'w-1.5', delay: '2.8s', duration: '4.2s' },
    { left: '87%', width: 'w-1.5', delay: '0.9s', duration: '3.6s' },
    { left: '93%', width: 'w-1', delay: '2.0s', duration: '4.4s' },
  ];

  return (
    <motion.section
      id="tong-quan"
      className="pt-2 pb-6 px-3 sm:px-6 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      
      {/* Interactive & Animated Cover Banner */}
      <div
        onMouseMove={handleMouseMove}
        onClick={handleBannerClick}
        className="relative w-full aspect-auto sm:aspect-[16/9] min-h-fit sm:min-h-[480px] max-h-none sm:max-h-[720px] rounded-3xl overflow-hidden shadow-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-600 via-teal-800 to-emerald-950 text-white cursor-pointer select-none transition-all duration-300 flex flex-col justify-between p-5 sm:p-10 md:p-12 gap-5"
      >
        
        {/* Dynamic Interactive Cursor Glow */}
        <div
          className="absolute w-96 h-96 rounded-full bg-radial from-emerald-300/20 via-teal-400/5 to-transparent blur-3xl pointer-events-none transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 z-0"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
          }}
        />

        {/* Dynamic Animated Thicker Light Rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {lightRays.map((ray, idx) => (
            <div
              key={`thick-ray-${idx}`}
              className={`absolute bottom-0 ${ray.width} h-[88%] bg-gradient-to-t from-white/40 via-emerald-100/20 to-transparent blur-[1px] animate-rising-ray`}
              style={{
                left: ray.left,
                animationDelay: ray.delay,
                animationDuration: ray.duration,
              }}
            />
          ))}

          {/* Animated Background Mesh Circles */}
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full border border-emerald-400/15 animate-spin-slow pointer-events-none" />
          <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full border border-dashed border-amber-300/15 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse' }} />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-teal-300/15 animate-spin-slow pointer-events-none" />
        </div>

        {/* Prominent Headline Area */}
        <div className="relative z-10 my-auto py-2 text-center max-w-5xl mx-auto flex flex-col items-center justify-center">
          
          {/* Cluster 1: DU LỊCH TPHCM */}
          <div className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider uppercase drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] leading-snug">
            DU LỊCH TPHCM
          </div>

          {/* Cluster 2: BỨC PHÁ TĂNG TRƯỜNG */}
          <div className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 tracking-tight uppercase drop-shadow-[0_4px_18px_rgba(251,191,36,0.6)] my-1 py-1 px-2 leading-snug">
            BỨC PHÁ TĂNG TRƯỞNG
          </div>

          {/* Cluster 3: 9 THÁNG ĐẦU NĂM 2026 */}
          <div className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-100 tracking-widest uppercase drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] leading-snug">
            9 THÁNG ĐẦU NĂM 2026
          </div>

        </div>

        {/* Quick Metric Highlights với Số liệu đếm động */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 max-w-4xl mx-auto w-full">
          
          {/* Static Metric 1 */}
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xs">
            <div className="flex items-center justify-between text-xs sm:text-base font-semibold text-emerald-100 mb-1">
              <span>Tổng thu du lịch</span>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-black text-white font-num tracking-tight">
              282.696 tỷ đồng
            </div>
            <div className="text-xs sm:text-sm text-amber-300 font-bold flex items-center gap-1 mt-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> +43.4 % so với 2025
            </div>
          </div>

          {/* Static Metric 2 */}
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xs">
            <div className="flex items-center justify-between text-xs sm:text-base font-semibold text-emerald-100 mb-1">
              <span>Khách quốc tế</span>
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-black text-white font-num tracking-tight">
              8.517.428 lượt
            </div>
            <div className="text-xs sm:text-sm text-teal-300 font-bold flex items-center gap-1 mt-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> +34.5% so với 2025
            </div>
          </div>

          {/* Static Metric 3 */}
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xs">
            <div className="flex items-center justify-between text-xs sm:text-base font-semibold text-emerald-100 mb-1">
              <span>Khách nội địa</span>
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-black text-white font-num tracking-tight">
              39.565.000 lượt
            </div>
            <div className="text-xs sm:text-sm text-amber-200 font-medium mt-0.5">
              Đạt 79.1% chỉ tiêu năm
            </div>
          </div>

        </div>

      </div>

    </motion.section>
  );
};
