import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApiKeyProvider } from "@/context/ApiKeyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VEO HUB - Google Veo 3.1 Prompt Library",
  description: "Google Vids & Veo 3.1 向けの高精度プロンプト生成・管理ツール。日本語から英語への自動翻訳機能付き。",
  keywords: ["Google Veo", "Google Vids", "AI Video", "Prompt Engineering"],
  authors: [{ name: "VEO HUB Team" }],
  openGraph: {
    title: "VEO HUB - Cinematic Video Prompt Library",
    description: "プロフェッショナルな動画プロンプトを、直感的なビルダーと日本語翻訳で作成。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEO HUB",
    description: "Google Veo 3.1 プロンプト生成ツール",
    creator: "@blueway01",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body className={`${inter.className} bg-[#020202] text-white antialiased selection:bg-primary/30`}>
        <ApiKeyProvider>
          {children}
        </ApiKeyProvider>
      </body>
    </html>
  );
}
