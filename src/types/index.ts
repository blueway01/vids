export type Category = 'Cinematic' | 'Corporate' | 'Animation' | 'Lifestyle' | 'Nature';

export type PromptItem = {
  id: string;
  title: string;
  category: Category;
  englishPrompt: string;
  japaneseDescription: string;
  vidsTip: string;
  tags: string[];
  gradient: string;
};
