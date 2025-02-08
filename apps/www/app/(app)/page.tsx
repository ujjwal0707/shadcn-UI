"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Corrected for Next.js App Router
import { Card, CardContent } from "@/registry/new-york/ui/card";
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"

export default function IndexPage() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log("Form Data:", formData);
    if (formData.username === "admin" && formData.password === "Admin@2024#") {
      setError(false);
      router.push("/examples/mail");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <Card className="w-full max-w-sm p-6 bg-white shadow-lg">
        <CardContent>
          <h4 className="text-center text-lg font-bold text-gray-900 mb-4">
            Login
          </h4>
          {error && (
            <p className="mb-2 text-sm text-red-500 text-center">
              Invalid Login Credentials!
            </p>
          )}
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="mb-3"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="mb-3"
          />
          <Button
            className="w-full bg-primary font-semibold hover:bg-black hover:text-white"
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
