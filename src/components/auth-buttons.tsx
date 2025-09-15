"use client";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignInButton() {
  return (
    <Button 
      onClick={() => signIn()} 
      className="bg-blue-600 hover:bg-blue-700"
    >
      登录
    </Button>
  );
}




export function SignOutButton() {
  return (
    <Button 
      onClick={() => signOut()} 
      variant="outline"
      className="mt-2"
    >
      登出
    </Button>
  );
}