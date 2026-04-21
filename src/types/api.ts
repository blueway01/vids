export type ApiKeyProvider = 'google-veo' | 'custom';

export type ApiKey = {
  id: string;
  name: string;
  provider: ApiKeyProvider;
  key: string;
  createdAt: string;
  lastUsed?: string;
  isActive: boolean;
};

export type ApiKeyContextType = {
  apiKeys: ApiKey[];
  addApiKey: (name: string, key: string, provider: ApiKeyProvider) => void;
  deleteApiKey: (id: string) => void;
  updateApiKey: (id: string, updates: Partial<ApiKey>) => void;
  getActiveApiKey: (provider: ApiKeyProvider) => ApiKey | null;
};
