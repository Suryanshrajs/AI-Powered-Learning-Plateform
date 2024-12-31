"use client"
import React from 'react';
import '@/styles/loader.css'; // Import the CSS file

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-full w-full bg-gray-50 dark:bg-gray-900 pt-20">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
