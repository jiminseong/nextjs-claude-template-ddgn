"use client";

import { useState } from "react";
import { SignupForm } from "@/components/signup-form";
import { SigninForm } from "@/components/signin-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center justify-center min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">환영합니다!</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isSignup
              ? "새 계정을 만들어 서비스를 시작해보세요"
              : "기존 계정으로 로그인하세요"
            }
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <Button
            variant={isSignup ? "default" : "outline"}
            onClick={() => setIsSignup(true)}
          >
            회원가입
          </Button>
          <Button
            variant={!isSignup ? "default" : "outline"}
            onClick={() => setIsSignup(false)}
          >
            로그인
          </Button>
        </div>

        {isSignup ? <SignupForm /> : <SigninForm />}
      </main>
    </div>
  );
}
