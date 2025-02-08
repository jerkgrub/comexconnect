import { ReactNode, useState } from 'react';
import { Dialog } from 'tamagui';
import { DialogContext } from '@/contexts/DialogContext';

export function DialogProvider({ children }: { children: ReactNode }) {
  const [dialogContent, setDialogContent] = useState<ReactNode | null>(null);

  const showDialog = (content: ReactNode) => {
    setDialogContent(content);
  };

  const hideDialog = () => {
    setDialogContent(null);
  };

  return (
    <DialogContext.Provider value={{ showDialog, hideDialog }}>
      {children}
      <Dialog modal open={!!dialogContent} onOpenChange={(open) => !open && hideDialog()}>
        {dialogContent}
      </Dialog>
    </DialogContext.Provider>
  );
} 