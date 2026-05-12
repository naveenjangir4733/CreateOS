// src/context/AppProviders.tsx
import React from 'react';
import { ActiveTabProvider } from './activeTab/activeTab';
import { ThemeProvider } from './theme/theme';

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ActiveTabProvider>
      <ThemeProvider>
        <ActiveTabProvider>{children}</ActiveTabProvider>
      </ThemeProvider>
    </ActiveTabProvider>
  );
};
