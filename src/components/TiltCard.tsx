/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * TiltCard Component - Hiệu ứng 3D Tilt Effect khi di chuột (Hover)
 * - Sử dụng Framer Motion useMotionValue & useSpring cho chuyển động 3D cực kỳ mượt mà
 * - Tự động hồi vị trí (Reset) khi di chuột ra ngoài
 * - Tích hợp lớp ánh kim nhẹ (Glare / Sheen effect)
 */

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number; // Góc nghiêng tối đa (độ), mặc định 12
  scaleOnHover?: number; // Phóng to khi hover, mặc định 1.025
  glareOpacity?: number; // Độ sáng phản quang, mặc định 0.15
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  tiltMaxAngle = 10,
  scaleOnHover = 1.02,
  glareOpacity = 0.12,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values cho vị trí con trỏ tương đối (-0.5 đến 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mùa xuân xoay góc X và Y mượt mà
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  // Biến đổi tọa độ chuột thành góc xoay 3D (RotateX & RotateY)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltMaxAngle, -tiltMaxAngle]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltMaxAngle, tiltMaxAngle]);

  // Vị trí độ sáng phản quang (Glare)
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: scaleOnHover }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`relative perspective-1000 select-none ${className}`}
    >
      {/* Nền phản quang mượt (3D Glare Sheen Overlay) */}
      <motion.div
        className="absolute inset-0 rounded-inherit pointer-events-none z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,${glareOpacity}) 0%, transparent 80%)`,
        }}
      />

      {/* Nội dung bên trong thẻ */}
      <div className="relative z-0 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
