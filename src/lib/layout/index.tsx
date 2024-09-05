'use client';

import { usePathname } from 'next/navigation'; // Alterado para usePathname
import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const shouldShowHeader = pathname === '/login';

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col">
        {shouldShowHeader && <Header />}
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
