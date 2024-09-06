'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const shouldShowHeader = pathname === '/';

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GoogleOAuthProvider clientId="c">
        <div className="flex flex-col">
          {shouldShowHeader && <Header />}
          <main>{children}</main>
        </div>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default Layout;
