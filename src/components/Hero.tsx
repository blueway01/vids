'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
          Enhanced for Google Veo 3.1 & Vids
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">AI Video</span>{' '}
          <span className="text-gradient">Prompt Library</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          クリエイティブな映像制作を加速させる、Google Veo 3.1専用の厳選プロンプト集。
          Google Vidsでの動画制作へそのまま活用できます。
        </p>
      </motion.div>
    </section>
  );
};
