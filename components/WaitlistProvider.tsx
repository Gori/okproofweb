"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { WaitlistModal } from "./WaitlistModal";

const WaitlistContext = createContext<() => void>(() => {});
export const useWaitlist = () => useContext(WaitlistContext);

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);

  return (
    <ConvexProvider client={convex}>
      <WaitlistContext.Provider value={openModal}>
        {children}
        <WaitlistModal open={open} onClose={() => setOpen(false)} />
      </WaitlistContext.Provider>
    </ConvexProvider>
  );
}
