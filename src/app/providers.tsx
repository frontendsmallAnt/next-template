'use client'
import { SessionProvider } from "next-auth/react";
import { TRPCProvider } from "@/app/TrpcProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TRPCProvider>
        {children}
      </TRPCProvider>
    </SessionProvider>
  );
}