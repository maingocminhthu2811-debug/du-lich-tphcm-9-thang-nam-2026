/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Main Application Component - Light Fresh Mint Green Theme with Full-page Animated Background
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { Section1FlipCards } from './components/Section1FlipCards';
import { Section2Events } from './components/Section2Events';
import { Section3Checklist } from './components/Section3Checklist';
import { sound } from './utils/audio';

export default function App() {
  const [box2Flipped, setBox2Flipped] = useState<boolean>(false);

  const toggleFlipBox2 = () => {
    sound.playFlip();
    setBox2Flipped((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef8f2] via-[#f4faf6] to-[#eaf5ee] text-slate-800 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950 relative overflow-hidden pt-4">
      
      {/* Global Animated Ambient Background Layer (Hiệu ứng động nền cả bài) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Ambient Orb 1 - Emerald Glow */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-emerald-300/25 blur-3xl animate-orb-1"
        />
        {/* Floating Ambient Orb 2 - Mint/Teal Glow */}
        <div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-teal-300/20 blur-3xl animate-orb-2"
        />
        {/* Floating Ambient Orb 3 - Warm Amber Soft Glow */}
        <div
          className="absolute bottom-20 left-1/4 w-[450px] h-[450px] rounded-full bg-amber-200/20 blur-3xl animate-orb-1"
          style={{ animationDelay: '4s' }}
        />
        {/* Subtle Geometric Background Dot Matrix */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 space-y-4 relative z-10">
        {/* TÍT: DU LỊCH TPHCM BỨC PHÁ TĂNG TRƯỞNG 9 THÁNG ĐẦU NĂM 2026 */}
        <HeroSection />

        {/* PHẦN 1: NHỮNG CON SỐ TĂNG TRƯỞNG ẤN TƯỢNG (box hiệu ứng lật - Box 2) */}
        <Section1FlipCards box2Flipped={box2Flipped} onToggleFlipBox2={toggleFlipBox2} />

        {/* PHẦN 2: SỰ KIỆN VÀ SẢN PHẨM ĐỘT PHÁ */}
        <Section2Events />

        {/* PHẦN 3: ĐỊNH HƯỚNG 3 THÁNG CUỐI NĂM */}
        <Section3Checklist />
      </main>
    </div>
  );
}
