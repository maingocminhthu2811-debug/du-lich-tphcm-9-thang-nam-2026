/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Top Bar Navigation - Fresh Mint Light Theme
 */

import React, { useState } from 'react';
import { Volume2, VolumeX, RotateCw, BarChart3 } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  onToggleFlipBox2?: () => void;
  box2Flipped?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleFlipBox2, box2Flipped }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
    if (nextState) {
      sound.playClick();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="font-extrabold text-sm sm:text-base text-emerald-800 tracking-tight flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
            <BarChart3 className="w-4 h-4" />
          </div>
          <span>DU LỊCH TPHCM 2026</span>
        </div>

        {/* Quick Nav Links */}
        <nav className="hidden sm:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <a href="#phan-1" className="hover:text-emerald-700 transition-colors">
            Phần 1: Số Liệu
          </a>
          <a href="#phan-2" className="hover:text-emerald-700 transition-colors">
            Phần 2: Sự Kiện
          </a>
          <a href="#phan-3" className="hover:text-emerald-700 transition-colors">
            Phần 3: Định Hướng
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {onToggleFlipBox2 && (
            <button
              onClick={onToggleFlipBox2}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <RotateCw className="w-3.5 h-3.5 text-sky-600" />
              <span>{box2Flipped ? 'Mặt trước Box 2' : 'Lật Box 2'}</span>
            </button>
          )}

          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            aria-label="Âm thanh"
            className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
