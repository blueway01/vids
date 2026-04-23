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
  },
  {
    id: 'anim-2',
    title: 'スタジオジブリ風の風景',
    category: 'Animation',
    englishPrompt: 'Hand-drawn animation style, a rolling green hill with a single large willow tree, white fluffy clouds in a bright blue sky, gentle breeze moving the grass. Studio Ghibli aesthetic, watercolor textures, peaceful atmosphere.',
    japaneseDescription: '手書きアニメーションの温かみを感じる草原。懐かしく平和な映像に。',
    vidsTip: '「Style」に特定のスタジオ名を指定することで、好みの絵作りを誘導できます。',
    tags: ['アニメ', 'ジブリ風', '草原'],
    gradient: 'from-green-200 to-blue-400'
  },
  {
    id: 'nature-2',
    title: '幻想的なオーロラ',
    category: 'Nature',
    englishPrompt: 'Static wide shot, vibrant green and violet aurora borealis dancing over a snowy arctic mountain range and reflective icy lake. Cold moonlight, crisp starry sky, 8k resolution, hyper-realistic.',
    japaneseDescription: '北極圏の夜空を彩るオーロラ。圧倒的な没入感のある自然描写。',
    vidsTip: '色彩のコントラストが激しいため、Veoの再現力の高さを最も実感できるプロンプトの一つです。',
    tags: ['オーロラ', '北極', '星空'],
    gradient: 'from-indigo-900 to-emerald-900'
  },
  {
    id: 'corp-3',
    title: 'ハイテク・ラボの作業風景',
    category: 'Corporate',
    englishPrompt: 'Medium shot, a scientist in a clean white lab coat working with a glowing blue holographic projection of a DNA strand in a high-tech laboratory. Futuristic UI elements, bright laboratory lighting, sharp focus.',
    japaneseDescription: '近未来の研究所での作業シーン。最先端技術やイノベーションの表現に。',
    vidsTip: '「Medium shot」を指定することで、人物の動作と背景のディテールをバランスよく捉えられます。',
    tags: ['科学', '研究所', 'ホログラム'],
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'life-3',
    title: '雨の日のカフェ読書',
    category: 'Lifestyle',
    englishPrompt: 'Close-up shot, a steaming cup of coffee next to an open book on a wooden table by a window. Raindrops streaming down the glass, blurred city lights in the background. Cozy atmosphere, warm tones, slow cinematic feel.',
    japaneseDescription: '雨音を感じる静かなカフェ。コーヒーの湯気と窓越しの景色が情緒的なシーン。',
    vidsTip: '「Cozy atmosphere」というキーワードが、Veoに温かみのある照明を指示します。',
    tags: ['カフェ', '読書', '雨'],
    gradient: 'from-stone-600 to-orange-900'
  },
  {
    id: 'cine-3',
    title: 'ネオ東京の裏路地',
    category: 'Cinematic',
    englishPrompt: 'High-angle medium shot, a mysterious figure in a trench coat walking through a dark, narrow cyberpunk alleyway. Glowing neon signs in kanji, steam from vents, puddles reflecting neon lights, cinematic atmosphere.',
    japaneseDescription: 'サイバーパンクな都市の裏路地。ドラマチックな陰影とネオンのコントラスト。',
    vidsTip: '「Kanji」を指定することで、日本的なサイバーパンクの世界観を強調できます。',
    tags: ['サイバーパンク', '裏路地', 'ネオン'],
    gradient: 'from-rose-900 to-slate-900'
  },
  {
    id: 'anim-3',
    title: 'クレイアニメ・クッキング',
    category: 'Animation',
    englishPrompt: 'Stop-motion claymation style, a clumsy clay chef character spinning a ball of dough. Charming handmade textures, slightly jerky movement for authentic stop-motion feel, bright kitchen lighting, tactile surfaces.',
    japaneseDescription: 'クレイアニメ（粘土細工）の愛らしいシェフ。ストップモーション特有の質感を再現。',
    vidsTip: '「Stop-motion」や「Tactile surfaces」という言葉が、独特のコマ撮り感を演出します。',
    tags: ['クレイアニメ', 'ストップモーション', '教育'],
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'nature-3',
    title: '深海の生命体',
    category: 'Nature',
    englishPrompt: 'Extreme close-up shot, a bioluminescent jellyfish pulsing gently in the deep dark ocean. Glowing neon blue and pink filaments, suspended particles in the water, ethereal lighting, high detail.',
    japaneseDescription: '光を放つ深海のクラゲ。神秘的で抽象的な美しさを持つ映像。',
    vidsTip: ' Veoは生物の複雑な動きや発光現象を非常に滑らかに生成できます。',
    tags: ['深海', 'クラゲ', '発光'],
    gradient: 'from-blue-900 to-indigo-950'
  },
  {
    id: 'corp-4',
    title: '自動化される物流倉庫',
    category: 'Corporate',
    englishPrompt: 'Wide angle tracking shot, multiple orange autonomous robots moving quickly and precisely through a vast modern logistics warehouse. Motion blur on robots, static industrial shelving, bright cool lighting, high-tech operation.',
    japaneseDescription: '整然と動く物流ロボットたち。自動化や効率化、DXをテーマにした動画に。',
    vidsTip: '「Tracking shot」を使うことで、広大な空間とスピード感を同時に表現できます。',
    tags: ['DX', 'ロボット', '物流'],
    gradient: 'from-slate-700 to-orange-600'
  },
  {
    id: 'life-4',
    title: '幻想的な水中ポートレート',
    category: 'Lifestyle',
    englishPrompt: 'Cinematic medium shot, a person in a flowing white dress floating underwater in a clear blue pool. Sunbeams piercing the water surface, bubbles, graceful movement, soft cinematic lighting, ethereal mood.',
    japaneseDescription: '水中に漂う女性。差し込む光とドレスの動きが芸術的なポートレート。',
    vidsTip: '「Flowing」という表現が、Veoに流体（水や布）の自然な挙動を促します。',
    tags: ['水中', 'ポートレート', 'アート'],
    gradient: 'from-cyan-400 to-blue-500'
  }
];
