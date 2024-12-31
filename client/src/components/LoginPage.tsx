"use client";

import { Button, Card , Label, TextInput } from "flowbite-react";
import React, { useRef} from "react";
import axios from "axios";

function LoginPage() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
 
    const handleEmailChange = () => {
        console.log("Email:", emailRef.current?.value);
    };

    const handlePasswordChange = () => {
        console.log("Password:", passwordRef.current?.value);
    };

    

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const email = emailRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        console.log("Form submitted with:", { email, password });

        try {
            const response = await axios.post("https://ai-powered-lms.onrender.com/api/login", {
                email,
                password,
            }, {
                withCredentials: true,
            });

            console.log("Login successful:", response.data);

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);

                localStorage.setItem("user", JSON.stringify({
                    name: response.data.user.fullName,
                    email: response.data.user.email,    // Store email
                }));

                window.location.href = "/";
            }

        } catch (error) {
            console.log("Login failed:", error);
        }
    };


    return (
        <Card className="h-[24rem] w-[28rem] p-5">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                        onChange={handleEmailChange}
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
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="flex items-center gap-2">
               
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Not registered?
                    <a
                        className="ml-1 text-blue-700 hover:underline dark:text-blue-500"
                        href="/signup/"
                    >
                        Create an account.
                    </a>
                </div>
            </form>
        </Card>
    );
}

export default LoginPage;
