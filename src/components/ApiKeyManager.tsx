'use client';

import { useState } from 'react';
import { useApiKey } from '@/context/ApiKeyContext';
import { ApiProvider } from '@/types/api';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Eye, EyeOff, Trash2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ApiKeyManager = () => {
  const { apiKeys, addApiKey, deleteApiKey } = useApiKey();
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const [provider, setProvider] = useState<ApiProvider>('google');
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());

  const handleAddKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && key.trim()) {
      addApiKey(name, key, provider);
      setName('');
      setKey('');
      setShowForm(false);
    }
  };

  const toggleKeyVisibility = (id: string) => {
    setVisibleKeys(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const maskKey = (key: string) => {
    return key.slice(0, 4) + '•'.repeat(Math.max(0, key.length - 8)) + key.slice(-4);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute bottom-16 right-0 w-96 bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl p-6 max-h-[32rem] overflow-y-auto backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight">API Keys</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <AnimatePresence>
              {showForm ? (
                <motion.form
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleAddKey}
                  className="space-y-4 mb-6 p-4 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Key Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Google Cloud v1"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 text-sm"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Provider</label>
                    <select
                      value={provider}
                      onChange={e => setProvider(e.target.value as ApiProvider)}
                      className="w-full px-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary/50 text-sm appearance-none"
                    >
                      <option value="google">Google Gemini / Veo</option>
                      <option value="openai">OpenAI</option>
                      <option value="anthropic">Anthropic Claude</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">API Key Content</label>
                    <textarea
                      placeholder="Paste your key here..."
                      value={key}
                      onChange={e => setKey(e.target.value)}
                      className="w-full px-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 text-sm font-mono resize-none h-24"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-2.5 bg-primary text-white rounded-xl font-bold text-sm tracking-tight hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <Check size={16} /> 保存する
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-sm transition-all"
                    >
                      キャンセル
                    </button>
                  </div>
                </motion.form>
              ) : (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full mb-6 px-4 py-3 bg-white text-black rounded-2xl font-black text-sm tracking-tight hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5"
                >
                  <Plus size={18} /> 新しいAPIキーを追加
                </button>
              )}
            </AnimatePresence>

            <div className="space-y-3">
              {apiKeys.length === 0 ? (
                <div className="text-center py-12 px-4 border border-dashed border-white/10 rounded-3xl">
                  <p className="text-zinc-500 text-sm">
                    APIキーが未登録です
                  </p>
                </div>
              ) : (
                apiKeys.map(apiKey => (
                  <motion.div
                    key={apiKey.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="p-4 bg-white/5 border border-white/10 rounded-2xl group/item"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-white text-sm truncate tracking-tight">
                          {apiKey.name}
                        </p>
                        <p className="text-[10px] uppercase tracking-widest font-black text-primary mt-0.5">
                          {apiKey.provider}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteApiKey(apiKey.id)}
                        className="p-1.5 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-400/10 transition-all opacity-0 group-hover/item:opacity-100"
                        title="キーを削除"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-auto">
                      <code className="flex-1 px-3 py-1.5 bg-black/40 rounded-lg text-[10px] text-zinc-400 font-mono overflow-hidden text-ellipsis border border-white/5">
                        {visibleKeys.has(apiKey.id) ? apiKey.key : maskKey(apiKey.key)}
                      </code>
                      <button
                        onClick={() => toggleKeyVisibility(apiKey.id)}
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-white transition-colors"
                      >
                        {visibleKeys.has(apiKey.id) ? (
                          <EyeOff size={14} />
                        ) : (
                          <Eye size={14} />
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-16 h-16 rounded-full shadow-2xl font-bold flex items-center justify-center transition-all duration-500',
          isOpen
            ? 'bg-zinc-800 text-white rotate-45 border border-white/20'
            : 'bg-primary text-white hover:shadow-primary/20'
        )}
      >
        <Plus size={28} />
      </motion.button>
    </div>
  );
};
