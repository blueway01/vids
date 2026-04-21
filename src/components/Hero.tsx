'use client';

import { motion } from 'framer-motion';
import { Sparkles, Video, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[50%] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Sparkles size={16} className="text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">Google Veo 3.1 & Vids Optimized</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            VEO <span className="text-primary italic">HUB</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            究極の映像プロンプト生成ツール。<br />
            あなたのイマジネーションを、Google Veoに届く完璧な英文へ。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/40">
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-secondary" />
              <span className="text-sm font-bold uppercase tracking-widest">Real-time Translate</span>
            </div>
            <div className="flex items-center gap-2">
              <Video size={18} className="text-primary" />
              <span className="text-sm font-bold uppercase tracking-widest">Cinema Quality</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
