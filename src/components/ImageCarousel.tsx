/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ImageCarousel Component - Slider trình chiếu ảnh chuyên nghiệp
 * - Khung hình 16:9, bo góc & đổ bóng nhẹ
 * - Tiêu đề & chú thích chi tiết bên dưới
 * - Nút Trước/Sau (Prev/Next) nổi bật viền vàng chữ xanh/ngọc
 * - Ẩn nút điều hướng khi chỉ có 1 ảnh
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  src: string;
  fallbackSrc?: string;
  title?: string;
  caption: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number; // ms, default 10000ms
  badgeTitle?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  autoPlayInterval = 10000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = next, -1 = prev
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  // Auto-play timer
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalSlides, isPaused, autoPlayInterval, currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  if (totalSlides === 0) return null;

  const currentSlide = slides[currentIndex];

  // Variations for smooth slide transition
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <div
      className="w-full my-4 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-emerald-100 shadow-lg">
        
        {/* Carousel Image Display Container */}
        <div className="relative w-full aspect-[16/9] min-h-[240px] sm:min-h-[340px] rounded-2xl overflow-hidden bg-slate-950 shadow-md group">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <img
                src={currentSlide.src}
                alt={currentSlide.caption}
                onError={(e) => {
                  if (currentSlide.fallbackSrc) {
                    (e.target as HTMLImageElement).src = currentSlide.fallbackSrc;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows (Hiển thị khi có nhiều hơn 1 ảnh, thiết kế Nổi Bật Tinh Tế) */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Ảnh trước"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-amber-300 backdrop-blur-md border-2 border-amber-300/60 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 z-20 focus:outline-hidden cursor-pointer group"
              >
                <ChevronLeft className="w-7 h-7 stroke-[3] transition-transform group-hover:-translate-x-0.5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Ảnh sau"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-amber-300 backdrop-blur-md border-2 border-amber-300/60 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 z-20 focus:outline-hidden cursor-pointer group"
              >
                <ChevronRight className="w-7 h-7 stroke-[3] transition-transform group-hover:translate-x-0.5" />
              </button>
            </>
          )}

        </div>

        {/* Caption Section Below Image */}
        <div className="mt-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/90">
          {currentSlide.title && (
            <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span>{currentSlide.title}</span>
            </h4>
          )}
          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed italic">
            {currentSlide.caption}
          </p>
        </div>

        {/* Pagination Dots Row (Chỉ hiển thị khi có từ 2 ảnh trở lên) */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2 mt-3.5">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={`dot-${slide.id}`}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Chuyển đến ảnh ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full focus:outline-hidden cursor-pointer ${
                    isActive
                      ? 'w-8 h-2.5 bg-emerald-700 shadow-xs'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
