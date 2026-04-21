'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { ApiKey, ApiProvider, ApiKeyContextType } from '@/types/api';

const ApiKeyContext = createContext<ApiKeyContextType | undefined>(undefined);

const STORAGE_KEY = 'veo-api-keys';

export const ApiKeyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load API keys from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setApiKeys(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load API keys from storage:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save API keys to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(apiKeys));
      } catch (error) {
        console.error('Failed to save API keys to storage:', error);
      }
    }
  }, [apiKeys, isLoaded]);

  const addApiKey = (name: string, key: string, provider: ApiProvider) => {
    const newApiKey: ApiKey = {
      id: Date.now().toString(),
      name,
      provider,
      key,
      createdAt: new Date().toISOString(),
      isActive: true,
    };
    setApiKeys(prev => [...prev, newApiKey]);
  };

  const deleteApiKey = (id: string) => {
    setApiKeys(prev => prev.filter(key => key.id !== id));
  };

  const updateApiKey = (id: string, updates: Partial<ApiKey>) => {
    setApiKeys(prev =>
      prev.map(key =>
        key.id === id ? { ...key, ...updates, lastUsed: new Date().toISOString() } : key
      )
    );
  };

  const getActiveApiKey = (provider: ApiProvider): ApiKey | null => {
    return apiKeys.find(key => key.provider === provider && key.isActive) || null;
  };

  if (!isLoaded) {
    return <>{children}</>;
  }

  return (
    <ApiKeyContext.Provider
      value={{
        apiKeys,
        addApiKey,
        deleteApiKey,
        updateApiKey,
        getActiveApiKey,
      }}
    >
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = () => {
  const context = useContext(ApiKeyContext);
  if (!context) {
    throw new Error('useApiKey must be used within ApiKeyProvider');
  }
  return context;
};
