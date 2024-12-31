"use client";

import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const SignupPage = () => {
  const [isClient, setIsClient] = useState(false);

  const fullnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const fullName = fullnameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    try {
      const response = await axios.post(
        "http://localhost:3001/api/register",
        { fullName, email, password },
        { withCredentials: true } // Allows cookies to be sent and received
      );

      if (response.status === 200) {
        console.log("Signup successful:", response.data.message);
        alert("Signup successful! You can now log in.");
      }
    } catch (error: any) {
      console.log("Signup failed:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  if (!isClient) return null;

  return (
    <Card className="h-[29rem] w-[28rem] p-3">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fullname" value="Your full name" />
          </div>
          <TextInput
            id="fullname"
            type="text"
            placeholder="Full Name"
            required
            ref={fullnameRef}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            ref={emailRef}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            ref={passwordRef}
          />
        </div>
        <Button type="submit">Submit</Button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          If registered?{" "}
          <a
            className="ml-1 text-blue-700 hover:underline dark:text-blue-500"
            href="/login/"
          >
            Login.
          </a>
        </div>
      </form>
    </Card>
  );
};

export default SignupPage;
