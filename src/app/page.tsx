'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { CategoryFilter } from '@/components/CategoryFilter';
import { PromptCard } from '@/components/PromptCard';
import { PromptBuilder } from '@/components/PromptBuilder';
import { PROMPTS as INITIAL_PROMPTS } from '@/data/prompts';
import { Category, PromptItem } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, X, Sparkles, Wand2, User, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [prompts, setPrompts] = useState<PromptItem[]>(INITIAL_PROMPTS);
  const [isAdding, setIsAdding] = useState(false);
  const [newPrompt, setNewPrompt] = useState({
    title: '',
    japaneseDescription: '',
    englishPrompt: '',
    category: 'Cinematic' as Category,
    useAvatar: false,
    useReference: false
  });

  const filteredPrompts = activeCategory === 'All'
    ? prompts
    : prompts.filter(p => p.category === activeCategory);

  const handleUpdate = (id: string, updates: Partial<PromptItem>) => {
    setPrompts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const autoTranslate = () => {
    let text = newPrompt.japaneseDescription;
    const dict: Record<string, string> = {
      'シネマティック': 'Cinematic lighting',
      'ロボット': 'robot',
      'オフィス': 'modern office',
      'リアル': 'high realism',
      '未来': 'futuristic',
      '雨': 'rainy',
      '夜': 'at night',
      '笑顔': 'smiling',
      '歩く': 'walking',
      '自然': 'lush nature'
    };

    let english = text;
    Object.entries(dict).forEach(([jp, en]) => {
      english = english.split(jp).join(en + ' ');
    });

    if (english === text) english = `A scene of ${text}`;
    
    let final = english.trim() + ', 8k, detailed.';
    if (newPrompt.useAvatar) final += ' Audio: Character speaking.';
    if (newPrompt.useReference) final += ' Reference Asset included.';
    
    setNewPrompt({ ...newPrompt, englishPrompt: final });
  };

  const handleAdd = () => {
    const item: PromptItem = {
      ...newPrompt,
      id: `custom-${Date.now()}`,
      vidsTip: 'カスタムアバター・素材設定が有効なプロンプトです。',
      gradient: newPrompt.useAvatar ? 'from-secondary/40 to-black' : 'from-accent/40 to-black',
      tags: ['カスタム', newPrompt.useAvatar ? 'アバター' : '', newPrompt.useReference ? '素材参照' : ''].filter(Boolean)
    };
    setPrompts([item, ...prompts]);
    setIsAdding(false);
    setNewPrompt({ title: '', japaneseDescription: '', englishPrompt: '', category: 'Cinematic', useAvatar: false, useReference: false });
  };

  return (
    <main className="min-h-screen pb-24">
      <div className="glow-mesh" />
      
      <header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white text-xs">V</span>
          </div>
          VEO HUB
        </div>
        <div className="flex gap-4">
           <button 
             onClick={() => setIsAdding(true)}
             className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-xs font-bold"
           >
             <Plus size={14} />
             新規プロンプト
           </button>
           <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-all shadow-xl shadow-white/10 active:scale-95">
             Get Started
           </button>
        </div>
      </header>

      <Hero />
      
      <PromptBuilder />

      <div className="container mx-auto px-6 max-w-7xl mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold mb-2">Prompt Library</h2>
          <p className="text-muted-foreground italic">Vidsの新機能（アバター・素材参照）をライブラリにも追加可能</p>
        </div>
        <CategoryFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Add Form Card */}
          <AnimatePresence>
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="glass-card rounded-3xl p-6 border-primary/40 bg-black/40 border-dashed border-2 flex flex-col gap-4 sticky top-24 z-20 h-fit"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold flex items-center gap-2">
                    <Plus size={18} className="text-primary" />
                    ライブラリに追加
                  </h3>
                  <button onClick={() => setIsAdding(false)} className="text-white/40 hover:text-white"><X size={18} /></button>
                </div>
                
                <input 
                  placeholder="タイトル"
                  value={newPrompt.title}
                  onChange={e => setNewPrompt({...newPrompt, title: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-primary/50 outline-none"
                />
                
                <div className="flex gap-2">
                   <button 
                     onClick={() => setNewPrompt({...newPrompt, useAvatar: !newPrompt.useAvatar})}
                     className={cn(
                       "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-[10px] font-bold border transition-all",
                       newPrompt.useAvatar ? "bg-secondary/20 border-secondary text-secondary" : "bg-white/5 border-white/10 text-white/40"
                     )}
                   >
                     <User size={12} /> アバター
                   </button>
                   <button 
                     onClick={() => setNewPrompt({...newPrompt, useReference: !newPrompt.useReference})}
                     className={cn(
                       "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-[10px] font-bold border transition-all",
                       newPrompt.useReference ? "bg-accent/20 border-accent text-accent" : "bg-white/5 border-white/10 text-white/40"
                     )}
                   >
                     <ImageIcon size={12} /> 素材参照
                   </button>
                </div>

                <div className="relative">
                  <textarea 
                    placeholder="日本語の内容"
                    value={newPrompt.japaneseDescription}
                    onChange={e => setNewPrompt({...newPrompt, japaneseDescription: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-primary/50 outline-none min-h-[60px]"
                  />
                  <button 
                    onClick={autoTranslate}
                    className="absolute bottom-2 right-2 flex items-center gap-1 bg-primary/20 text-primary border border-primary/30 rounded-lg px-2 py-1 text-[9px] font-bold"
                  >
                    <Wand2 size={10} /> 翻訳
                  </button>
                </div>

                <textarea 
                  placeholder="英文プロンプト"
                  value={newPrompt.englishPrompt}
                  onChange={e => setNewPrompt({...newPrompt, englishPrompt: e.target.value})}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-[10px] font-mono text-white/50 min-h-[60px]"
                />

                <button 
                  onClick={handleAdd}
                  disabled={!newPrompt.title || !newPrompt.englishPrompt}
                  className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Sparkles size={14} /> ライブラリに追加
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            {filteredPrompts.map((item) => (
              <PromptCard key={item.id} item={item} onUpdate={handleUpdate} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <footer className="mt-32 pt-16 border-t border-white/5 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 text-muted-foreground text-sm">
          <div>© 2026 Veo Prompt Hub. Built for Google Generative AI components.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
