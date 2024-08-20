// Providers.tsx
"use client"
import React, { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
type props ={
    children:ReactNode
}
const Providers = ({ children }:props) => {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
