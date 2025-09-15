"use client";

import { useEffect, useState } from 'react';
import { useUsers } from '@/lib/hooks';

interface AppInitializerProps {
  children: React.ReactNode;
}

export function AppInitializer({ children }: AppInitializerProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const { users } = useUsers();

  useEffect(() => {
    // Aguardar os usuários serem carregados
    if (users.length > 0) {
      setIsInitialized(true);
    }
  }, [users]);

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-blue-700 dark:text-blue-300">Carregando FitAI Coach...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}