import type React from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';

import Header from '@/components/layouts/contact/header';
import { IBMPlexSansJP, NunitoSans } from '@/styles/font';

import type { JSX } from 'react';
import type { RootLayoutProps } from '@/types';


export const metadata: Metadata = {
  title: 'お問い合わせ - Terminal | 中京大学公式エンジニアサークル',
};


/**
 * 問い合わせフォーム専用のレイアウトを構成する。
 *
 * @param param0 - 子要素
 * @returns 生成したページ
 */
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="ja">
      <body className={`${NunitoSans.className} ${IBMPlexSansJP.className}min-h-screen`}>
        <Header />
        <main className="container mx-auto px-4 pt-2 md:py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
