import React from 'react';
import Card from '@/components/Card';
 
import { Header } from '@/components/HeaderPage';

const page = () => {
    return (<>
        <Header></Header>
        <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 h-full w-full">
        <img src="/dsaroadmap.png" alt="dsa" className='p-10 w-full h-full'/>
        </div>
    </>

    );
};

export default page;
