"use client";

import { createContext, useContext, useState } from "react";

interface LoadingContextType {
  hasLoaded: boolean;
  setHasLoaded: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ hasLoaded, setHasLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
