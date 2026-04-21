'use client';

import { useState } from 'react';
import { useApiKey } from '@/context/ApiKeyContext';
import { ApiKeyProvider } from '@/types/api';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Eye, EyeOff, Trash2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ApiKeyManager = () => {
  const { apiKeys, addApiKey, deleteApiKey, updateApiKey } = useApiKey();
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const [provider, setProvider] = useState<ApiKeyProvider>('google-veo');
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
            className="absolute bottom-16 right-0 w-96 bg-slate-900 border border-slate-700 rounded-lg shadow-xl p-6 max-h-96 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">API Keys</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition"
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
                  className="space-y-4 mb-4 p-4 bg-slate-800 rounded-lg"
                >
                  <input
                    type="text"
                    placeholder="Key name (e.g., 'My Veo API')"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                  <select
                    value={provider}
                    onChange={e => setProvider(e.target.value as ApiKeyProvider)}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="google-veo">Google Veo API</option>
                    <option value="custom">Custom API</option>
                  </select>
                  <textarea
                    placeholder="API Key"
                    value={key}
                    onChange={e => setKey(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition flex items-center justify-center gap-2"
                    >
                      <Check size={16} /> Add
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-medium transition"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.form>
              ) : (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition flex items-center justify-center gap-2"
                >
                  <Plus size={16} /> Add API Key
                </button>
              )}
            </AnimatePresence>

            <div className="space-y-3">
              {apiKeys.length === 0 ? (
                <p className="text-slate-400 text-sm text-center py-4">
                  No API keys added yet
                </p>
              ) : (
                apiKeys.map(apiKey => (
                  <motion.div
                    key={apiKey.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="p-3 bg-slate-800 border border-slate-700 rounded"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white text-sm truncate">
                          {apiKey.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          {apiKey.provider === 'google-veo'
                            ? 'Google Veo API'
                            : 'Custom API'}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteApiKey(apiKey.id)}
                        className="text-slate-400 hover:text-red-400 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 px-2 py-1 bg-slate-700 rounded text-xs text-slate-300 font-mono overflow-hidden text-ellipsis">
                        {visibleKeys.has(apiKey.id) ? apiKey.key : maskKey(apiKey.key)}
                      </code>
                      <button
                        onClick={() => toggleKeyVisibility(apiKey.id)}
                        className="text-slate-400 hover:text-white transition"
                      >
                        {visibleKeys.has(apiKey.id) ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
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
          'w-14 h-14 rounded-full shadow-lg font-bold text-lg transition',
          isOpen
            ? 'bg-slate-700 text-white'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
        )}
      >
        <Plus size={24} className="mx-auto" />
      </motion.button>
    </div>
  );
};
