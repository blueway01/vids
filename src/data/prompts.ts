import { PromptItem } from '@/types';

export const PROMPTS: PromptItem[] = [
  {
    id: 'corp-1',
    title: 'プロフェッショナルな挨拶',
    category: 'Corporate',
    englishPrompt: 'Medium close-up shot, a confident project manager in a minimalist, sunlit office, professional attire. The character turns to the camera, smiling warmly. Soft, diffused studio lighting, shallow depth of field, corporate commercial aesthetic.',
    japaneseDescription: 'Google Vidsでのプレゼンテーション導入部に最適な、清潔感のある挨拶シーン。',
    vidsTip: '「Ingredients」機能で自社のロゴやオフィス画像をアップロードして一貫性を保ちましょう。',
    tags: ['プレゼン', '挨拶', 'ビジネス'],
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'cine-1',
    title: 'ネオンシティ・サイバーパンク',
    category: 'Cinematic',
    englishPrompt: 'Cinematic wide shot, a futuristic sleek robot walking through a rain-slicked Tokyo neon city at night, vibrant blue and pink neon lights reflecting on puddles, high detail, 8k, blade runner aesthetic.',
    japaneseDescription: '雨に濡れた夜の都市を歩く高度なロボット。映画のような重厚なビジュアル。',
    vidsTip: '音楽生成AI「Lyria」でシンセサイザー系のBGMを合わせるとより効果的です。',
    tags: ['SF', '夜景', 'ロボット'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'anim-1',
    title: '3Dアニメーション・キャラクター',
    category: 'Animation',
    englishPrompt: 'Close-up of a cute, fluffy small monster with glowing eyes, sitting on a floating island in a colorful magical world. Pixar-style 3D animation, soft rim lighting, expressive eyes, vibrant colors.',
    japaneseDescription: 'ピクサースタイルの可愛らしいモンスター。キャラクター性を重視した動画向け。',
    vidsTip: '参照画像を使用して、複数のシーンでキャラクターの見た目を固定するのがコツです。',
    tags: ['キャラクター', 'ファンタジー', '子供向け'],
    gradient: 'from-orange-400 to-red-500'
  },
  {
    id: 'nature-1',
    title: '静かな湖畔の夜明け',
    category: 'Nature',
    englishPrompt: 'Low-angle medium shot, clear mountain lake at sunrise, mist rising from the water, snow-capped mountains in the background. Slow pan left across the shoreline. Deep morning blues and golden highlights.',
    japaneseDescription: '日の出前の幻想的な湖。落ち着いた雰囲気のビデオブログや背景に。',
    vidsTip: 'BGMには「Lyria」で生成した穏やかなピアノ曲や環境音を組み合わせましょう。',
    tags: ['自然', '風景', 'リラックス'],
    gradient: 'from-teal-500 to-blue-500'
  },
  {
    id: 'life-1',
    title: '料理のシズル感',
    category: 'Lifestyle',
    englishPrompt: 'Extreme close-up shot, fresh pasta being tossed in a pan with glossy tomato sauce and basil. Steam rising, vibrant colors, soft cinematic lighting. High frame rate feel, detailed textures.',
    japaneseDescription: '食欲をそそる料理のクローズアップ。紹介動画やSNS向け。',
    vidsTip: '「Ingredients」で実際の料理写真を参照させると、よりリアルな質感が得られます。',
    tags: ['料理', 'シズル感', 'グルメ'],
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    id: 'abst-1',
    title: '光の軌跡 - 抽象表現',
    category: 'Lifestyle',
    englishPrompt: 'Abstract motion of glowing particle trails in a dark void. Flowing lines of light in gold and electric blue, weaving together. Ethereal atmospheric glow, shallow depth of field, minimalist ambient aesthetic.',
    japaneseDescription: '抽象的な光の動き。オープニングや背景映像として非常に強力です。',
    vidsTip: 'Vidsの背景としてループ再生させると、プレゼン資料が非常にモダンになります。',
    tags: ['抽象', '背景素材', 'サイバー'],
    gradient: 'from-blue-900 to-purple-900'
  },
  {
    id: 'edu-1',
    title: '歴史ドキュメンタリー風',
    category: 'Cinematic',
    englishPrompt: 'Detailed medium shot, a medieval scribe writing on parchment by candlelight in an ancient library. Dust motes dancing in the light, warm amber tones, historical realism, dramatic shadows.',
    japaneseDescription: '歴史を感じさせる重厚なシーン。教育ビデオや解説動画に。',
    vidsTip: 'AIアバターにナレーションを担当させ、この映像を背景に使うと教育効果が高まります。',
    tags: ['歴史', 'ドキュメンタリー', '書斎'],
    gradient: 'from-amber-900 to-yellow-950'
  },
  {
    id: 'life-2',
    title: '朝のヨガルーティン',
    category: 'Lifestyle',
    englishPrompt: 'Medium shot, a person practicing yoga in a sun-drenched minimalist living room filled with plants. Calm atmosphere, soft morning light, lens flare, peaceful cinematic tone.',
    japaneseDescription: '爽やかな朝のひととき。ウェルネスや日常の紹介に。',
    vidsTip: '自然音を「Lyria」で生成し、リラックスした雰囲気を強調しましょう。',
    tags: ['ヨガ', 'ルーティン', '健康'],
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    id: 'corp-2',
    title: 'チーム・コラボレーション',
    category: 'Corporate',
    englishPrompt: 'Over-the-shoulder shot of a diverse team in a bright modern co-working space, looking at a digital screen together and nodding. Clean lines, upbeat professional atmosphere, soft focus background.',
    japaneseDescription: 'チームの協力体制を表現するシーン。会社紹介動画に最適。',
    vidsTip: '特定の人物をAIアバターとして配置し、セリフを喋らせることも可能です。',
    tags: ['チーム', 'オフィス', '多様性'],
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'cine-2',
    title: '映画のラストシーンのような砂漠',
    category: 'Cinematic',
    englishPrompt: 'Cinematic tracking shot, a lonely traveler walking through vast golden sand dunes at sunset, long shadows, dramatic orange sky, cinematic film grain, high contrast.',
    japaneseDescription: '夕日の砂漠を歩く旅人。壮大な物語の終わりを予感させる演出。',
    vidsTip: '画角やカメラの動き（Tracking shot）を指定することで、プロのような映像になります。',
    tags: ['ドラマチック', '砂漠', '旅'],
    gradient: 'from-amber-600 to-orange-700'
  }
];
