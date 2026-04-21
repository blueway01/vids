'use client';

import { useState } from 'react';
import { PromptItem } from '@/types';
import { motion } from 'framer-motion';
import { Copy, Check, Video, Info, Sparkles, Edit2, Save, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  item: PromptItem;
  onUpdate?: (id: string, updates: Partial<PromptItem>) => void;
};

export const PromptCard = ({ item, onUpdate }: Props) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({ ...item });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(item.englishPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    onUpdate?.(item.id, editValues);
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={isEditing ? {} : { y: -5 }}
      className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group relative"
    >
      {/* Edit Trigger */}
      <button 
        onClick={() => setIsEditing(!isEditing)}
        className="absolute top-4 right-14 z-10 p-2 rounded-full bg-black/40 text-white/50 hover:text-white transition-colors border border-white/10"
      >
        {isEditing ? <X size={14} /> : <Edit2 size={14} />}
      </button>

      {/* Thumbnail area / Gradient preview */}
      <div className={cn(
        "h-40 relative overflow-hidden bg-gradient-to-br transition-all duration-500",
        item.gradient
      )}>
        {!isEditing && (
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
             <Video size={60} className="text-white" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-black/40 backdrop-blur-md rounded-full border border-white/10">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {isEditing ? (
          <div className="space-y-4">
            <input 
              value={editValues.title}
              onChange={(e) => setEditValues({...editValues, title: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-primary/50"
              placeholder="タイトル"
            />
            <textarea 
              value={editValues.japaneseDescription}
              onChange={(e) => setEditValues({...editValues, japaneseDescription: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs outline-none focus:border-primary/50 min-h-[60px]"
              placeholder="日本語解説"
            />
            <textarea 
              value={editValues.englishPrompt}
              onChange={(e) => setEditValues({...editValues, englishPrompt: e.target.value})}
              className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-primary/50 min-h-[80px]"
              placeholder="英文プロンプト"
            />
            <button 
              onClick={handleSave}
              className="w-full py-2 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary/90 flex items-center justify-center gap-2"
            >
              <Save size={14} />
              変更を保存
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              {item.title}
              <Sparkles size={16} className="text-secondary" />
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
              {item.japaneseDescription}
            </p>

            <div className="relative mb-6">
              <div className="p-4 bg-black/50 rounded-xl border border-white/5 text-xs font-mono text-white/80 leading-relaxed min-h-[80px] break-words">
                {item.englishPrompt}
              </div>
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-white/60"
                title="プロンプトをコピー"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="mt-auto">
              <div className="p-3 rounded-2xl bg-primary/5 border border-primary/10 flex gap-3">
                 <Info size={16} className="text-primary shrink-0 mt-0.5" />
                 <div>
                   <p className="text-[9px] font-bold text-primary uppercase tracking-tighter mb-0.5">Vids Hint</p>
                   <p className="text-[11px] text-white/60 italic leading-snug line-clamp-2">{item.vidsTip}</p>
                 </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
