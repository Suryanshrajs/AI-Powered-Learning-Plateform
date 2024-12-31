// components/Sidebar.tsx
"use client"
import { useState } from 'react';

const VidoeSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-gray-800 text-white`}>
            <div className="flex flex-col items-center justify-between w-full h-full p-4">
                <button onClick={toggleSidebar} className="mb-4 text-white">
                    {isOpen ? 'Hide' : 'Show'} Sidebar
                </button>
                {isOpen && (
                    <div className="flex flex-col items-start space-y-4">
                        <a href="#" className="text-lg">Home</a>
                        <a href="#" className="text-lg">About</a>
                        <a href="#" className="text-lg">Services</a>
                        <a href="#" className="text-lg">Contact</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VidoeSidebar;
