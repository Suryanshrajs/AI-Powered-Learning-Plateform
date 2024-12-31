"use client"
import { Header } from '@/components/HeaderPage'
import React, { useEffect, useState } from 'react';
import SignupPage from '@/components/SignupPage';

const page = () => {

    const [isClient, setIsClient] = useState(false);

    // hydration error fix
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <>
            <Header></Header>

            <div className="flex items-center justify-center h-screen w-screen bg-[#111827]">
                <SignupPage></SignupPage>
            </div>
        </>
    )
}

export default page;