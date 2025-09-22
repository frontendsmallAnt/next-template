'use client'
import { trpcClientReact, setUpClient } from '@/utils/api'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
export function TRPCProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())
    return <trpcClientReact.Provider client={setUpClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </trpcClientReact.Provider>
}