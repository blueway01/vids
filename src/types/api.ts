export type ApiProvider = 'google' | 'openai' | 'anthropic';

export interface ApiKey {
  id: string;
  name: string;
  provider: ApiProvider;
  key: string;
  createdAt: string;
  lastUsed?: string;
  isActive: boolean;
}

export interface ApiKeyContextType {
  apiKeys: ApiKey[];
  addApiKey: (name: string, key: string, provider: ApiProvider) => void;
  deleteApiKey: (id: string) => void;
  updateApiKey: (id: string, updates: Partial<ApiKey>) => void;
  getActiveApiKey: (provider: ApiProvider) => ApiKey | null;
}
