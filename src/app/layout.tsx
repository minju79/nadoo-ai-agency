import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

const nanumPen = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-handwriting',
});

export const metadata: Metadata = {
  title: "나도 AI 비즈니스 에이전시 | Premium AI Solutions",
  description: "아이디어는 말로, 결과는 완성으로! 당신의 비즈니스를 빛내는 프리미엄 AI 솔루션 에이전시입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${cormorant.variable} ${nanumPen.variable}`}>
      <body style={{ background: '#0a0a0a' }}>
        {children}
      </body>
    </html>
  );
}
