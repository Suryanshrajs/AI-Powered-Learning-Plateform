import Image from 'next/image';
import React from 'react';
import { Header } from '@/components/HeaderPage';

const page = () => {
    return (<>
        <Header></Header>
        <Image src="/dsaroadmap.png" alt="dsa" className='p-10 w-full h-full' layout="fill" objectFit="contain" />

    </>

    );
};

export default page;
