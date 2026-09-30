/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CountUp Component - Hiệu ứng đếm số động mượt mà khi cuộn tới màn hình
 */

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  value: number; // Giá trị đích cần đếm tới
  duration?: number; // Thời gian đếm (giây)
  decimals?: number; // Số chữ số thập phân
  prefix?: string;
  suffix?: string;
  formatter?: (val: number) => string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  duration = 2.2,
  decimals = 0,
  prefix = '',
  suffix = '',
  formatter,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const startValue = 0;
    const endValue = value;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Hàm gia tốc easeOutExpo giúp đếm mượt và giảm tốc tinh tế ở đoạn cuối
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = startValue + (endValue - startValue) * easeOutProgress;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  // Định dạng số theo chuẩn Việt Nam
  const formattedStr = formatter
    ? formatter(displayValue)
    : decimals > 0
    ? displayValue.toLocaleString('vi-VN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : Math.round(displayValue).toLocaleString('vi-VN');

  return (
    <span ref={ref} className={`inline-block font-num ${className}`}>
      {prefix}
      {formattedStr}
      {suffix}
    </span>
  );
};
