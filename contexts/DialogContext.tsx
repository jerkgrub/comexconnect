import { createContext, useContext, ReactNode } from 'react';

type DialogContextType = {
  showDialog: (content: ReactNode) => void;
  hideDialog: () => void;
};

export const DialogContext = createContext<DialogContextType | null>(null);

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
} 