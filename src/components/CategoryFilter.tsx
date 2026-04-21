'use client';

import { Category } from '@/types';
import { cn } from '@/lib/utils';

type Props = {
  activeCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
};

const CATEGORIES: (Category | 'All')[] = ['All', 'Cinematic', 'Corporate', 'Animation', 'Nature', 'Lifestyle'];

export const CategoryFilter = ({ activeCategory, onCategoryChange }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
            activeCategory === cat
              ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              : "bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:bg-white/10"
          )}
        >
          {cat === 'All' ? 'すべて' : cat}
        </button>
      ))}
    </div>
  );
};
