'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, ChevronDown, Wand2, AlertCircle, Loader2 } from 'lucide-react';
import { PROMPT_OPTIONS } from '@/data/options';
import { cn } from '@/lib/utils';

export const PromptBuilder = () => {
  const [selections, setSelections] = useState({
    shot: '',
    subject: PROMPT_OPTIONS.subject[1].value, // デフォルトで何か一つ選ばれてる方が親切
    action: '',
    environment: '',
    camera: '',
    style: ''
  });

  const [customJpInput, setCustomJpInput] = useState('');
  const [fullPrompt, setFullPrompt] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  
  // プロンプト生成ロジック：空文字の項目は除外して結合
  useEffect(() => {
    const parts = [
      selections.shot,
      selections.subject,
      selections.action,
      selections.environment,
      selections.camera,
      selections.style
    ].filter(part => part !== ''); // 未選択を除外

    if (parts.length > 0) {
      setFullPrompt(parts.join(', ') + '.');
    } else {
      setFullPrompt('Please select at least one element or type below.');
    }
  }, [selections]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPrompt);
  };

  const translateText = async (text: string) => {
    setIsTranslating(true);
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=en&dt=t&q=${encodeURIComponent(text)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data && data[0] && data[0][0] && data[0][0][0]) return data[0][0][0];
      return text;
    } catch (error) {
      return text;
    } finally {
      setIsTranslating(false);
    }
  };

  const handleAddTranslation = async () => {
    if (!customJpInput) return;
    const translated = await translateText(customJpInput);
    setFullPrompt(prev => {
      const base = prev === 'Please select at least one element or type below.' 
        ? '' 
        : prev.trim().replace(/\.$/, '');
      
      const connector = base ? ', ' : '';
      return `${base}${connector}${translated}.`;
    });
    setCustomJpInput('');
  };

  return (
    <section className="container mx-auto px-6 max-w-4xl my-24">
      {/* Login Alert */}
      <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex gap-4 items-start">
        <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
        <div className="text-sm leading-relaxed">
          <p className="font-bold text-amber-500 mb-1">Googleログインに関する注意</p>
          <p className="text-white/60">
            自動操作ブラウザを使用している場合、セキュリティ上の理由でGoogleログインが制限されることがあります。
            通常のブラウザ（Chrome等）でこのページを開いてご利用ください。
          </p>
        </div>
      </div>

      <div className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
        
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary/20 rounded-2xl text-primary shadow-lg shadow-primary/20">
            <Sparkles size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">プロンプトビルダー</h2>
            <p className="text-sm text-muted-foreground font-medium">日本語の文章から高精度な英文プロンプトを自動生成</p>
          </div>
        </div>

        {/* Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
          {Object.entries(PROMPT_OPTIONS).map(([key, options]) => (
            <div key={key} className="space-y-2">
              <label className="text-[10px] font-black uppercase text-white/40 tracking-wider ml-1">
                {key === 'shot' ? '1. 画角' : key === 'subject' ? '2. 被写体' : key === 'action' ? '3. 動作' : key === 'environment' ? '4. 環境' : key === 'camera' ? '5. 動き' : '6. スタイル'}
              </label>
              <div className="relative group">
                <select 
                  value={(selections as any)[key]}
                  onChange={(e) => setSelections({...selections, [key]: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm appearance-none focus:border-primary/50 outline-none transition-all cursor-pointer hover:bg-white/10"
                >
                  {options.map(opt => <option key={opt.value} value={opt.value} className="bg-zinc-900">{opt.label}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Translation and Result Area */}
        <div className="space-y-6">
          <div className="relative">
             <input 
               type="text" 
               value={customJpInput}
               onChange={(e) => setCustomJpInput(e.target.value)}
               placeholder="ここから更に日本語の文章で指示を追加できます..."
               className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary/50 outline-none"
             />
             <button 
               onClick={handleAddTranslation}
               disabled={!customJpInput || isTranslating}
               className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all text-xs font-bold disabled:opacity-50 min-w-[140px] justify-center"
             >
               {isTranslating ? <Loader2 size={14} className="animate-spin" /> : <Wand2 size={14} />}
               翻訳して追加
             </button>
          </div>

          <div className="bg-black/95 border border-primary/40 rounded-2xl p-6 relative group overflow-hidden border-l-8">
            <div className="absolute top-0 right-0 p-4">
              <button onClick={handleCopy} className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-lg translate-y-[-4px]">
                <Copy size={16} /> Vidsにコピー
              </button>
            </div>
            <div className="mb-2 text-[10px] font-black uppercase text-primary tracking-widest">Final English Prompt</div>
            <textarea
              value={fullPrompt}
              onChange={(e) => setFullPrompt(e.target.value)}
              className="w-full bg-transparent text-lg font-mono leading-relaxed text-white pr-36 min-h-[8rem] outline-none resize-none pt-2"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
