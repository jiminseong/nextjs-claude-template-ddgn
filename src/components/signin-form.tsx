"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/app/api";

interface SigninFormData {
  name: string;
}

export function SigninForm() {
  const [formData, setFormData] = useState<SigninFormData>({
    name: "",
  });
  const [errors, setErrors] = useState<Partial<SigninFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof SigninFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<SigninFormData> = {};

    if (!formData.name) {
      newErrors.name = "이름을 입력해주세요";
    } else if (formData.name.length < 2) {
      newErrors.name = "이름은 최소 2자 이상이어야 합니다";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const [result, error] = await api.account.signin({
        name: formData.name,
      });

      if (error) {
        console.error("로그인 실패:", error);

        let errorMessage = "로그인에 실패했습니다.";

        switch (error.code) {
          case "account:no_such_user":
            errorMessage = "존재하지 않는 사용자입니다. 회원가입을 먼저 해주세요.";
            break;
          case "invalid_argument":
            errorMessage = "잘못된 값이 입력되었습니다.";
            break;
          case "network":
            errorMessage = "네트워크 연결을 확인해주세요.";
            break;
          default:
            errorMessage = `로그인에 실패했습니다: ${error.message || "알 수 없는 오류"}`;
        }

        alert(errorMessage);
        return;
      }

      console.log("로그인 성공:", result);
      alert(`로그인이 완료되었습니다! 사용자 ID: ${result.id}`);

      // 폼 초기화
      setFormData({
        name: "",
      });
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>기존 계정으로 로그인하세요</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="" htmlFor="name">
              이름
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력하세요"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>
        </CardContent>
        <CardFooter className="">
          <Button type="submit" className="w-full mt-4 " disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
