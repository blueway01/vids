'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type BannerProps = {
  position: 'top' | 'bottom';
};

export const BannerAds = ({ position }: BannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full p-3 md:px-5 relative shadow-lg z-[9999] transition-all duration-300",
        // ハンドオーバーの指定通りのグラデーション色を使用
        "bg-gradient-to-br from-[#667eea] to-[#764ba2]",
        position === 'top' ? "sticky top-0" : "fixed bottom-0 left-0"
      )}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 bg-white/90 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center text-[#333] transition-all hover:scale-110 z-[10000] shadow-sm"
        aria-label="バナーを閉じる"
      >
        <X size={18} />
      </button>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* 製品 1: Bookmark Manager */}
        <a
          href="https://ikoibito.vercel.app/index_ja.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 w-full min-w-[280px] bg-white rounded-lg p-3 md:px-5 flex items-center justify-between text-[#333] transition-all hover:-translate-y-0.5 hover:shadow-md group cursor-pointer"
        >
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
              <Image
                src="/bookmark-icon.png"
                alt="Bookmark Manager"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold leading-tight">Bookmark Manager & Link Checker Pro</h3>
              <p className="text-[11px] md:text-xs text-[#666]">ブックマークを効率的に管理・整理</p>
            </div>
          </div>
          <div className="ml-3 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-[12px] md:text-[13px] font-bold whitespace-nowrap group-hover:brightness-110 shadow-sm">
            詳細を見る →
          </div>
        </a>

        {/* 製品 2: YouTube SidePlayer */}
        <a
          href="https://chromewebstore.google.com/detail/youtube-sideplayer-pro/pbfpjilphogmgnggeennadoadhmdbcgb?authuser=0&hl=ja"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 w-full min-w-[280px] bg-white rounded-lg p-3 md:px-5 flex items-center justify-between text-[#333] transition-all hover:-translate-y-0.5 hover:shadow-md group cursor-pointer"
        >
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
              <Image
                src="/008A.png"
                alt="YouTube SidePlayer"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold leading-tight">YouTube SidePlayer Pro</h3>
              <p className="text-[11px] md:text-xs text-[#666]">YouTubeをサイドで快適再生</p>
            </div>
          </div>
          <div className="ml-3 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-[12px] md:text-[13px] font-bold whitespace-nowrap group-hover:brightness-110 shadow-sm">
            インストール →
          </div>
        </a>
      </div>
    </div>
  );
};
