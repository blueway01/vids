'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { PromptBuilder } from '@/components/PromptBuilder';
import { PromptCard } from '@/components/PromptCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { PROMPTS } from '@/data/prompts';
import { Category } from '@/types';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredPrompts = activeCategory === 'All' 
    ? PROMPTS 
    : PROMPTS.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen pb-24">
      <Hero />
      <PromptBuilder />
      
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Prompt Library</h2>
            <p className="text-muted-foreground italic text-sm">Google Veo 3.1 向けに最適化された高品質なプロンプト集</p>
          </div>
          <CategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrompts.map((prompt, index) => (
            <PromptCard key={prompt.id} item={prompt} />
          ))}
        </div>
      </section>
    </main>
  );
}
