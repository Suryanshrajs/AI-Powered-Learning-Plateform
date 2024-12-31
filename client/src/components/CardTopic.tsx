"use client";

import { Card, Progress } from "flowbite-react";
import { useState } from "react";

interface CardProps {
    title: string;
    imageUrl: string;
    callBack: () => void
}

const CardTopic: React.FC<CardProps> = ({ title, imageUrl, callBack }) => {
    const [progress, setProgress] = useState(10); // Initial progress value

    return (
        <div onClick={callBack} className="cursor-pointer max-w-[370px] rounded-lg border bg-neutral-100 dark:bg-[#181a1b] hover:shadow-2xl dark:border-[#353a3c] shadow-md p-[1px] transition-all duration-300 select-none">
            {/* Image Section */}
            <div className="max-h-48 w-full overflow-hidden rounded-t-md rounded-b-sm mb-2">
                <img
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="object-contain w-full h-full"
                    src={imageUrl}
                />
            </div>

            <div className="mx-2">
                {/* Title */}
                <h3 className="dark:text-[#e8e6e3] mb-2 font-rubik text-lg font-bold tracking-tight md:text-2xl">
                    {title}
                </h3>

                {/* Progress Section */}
                <div className=" mt-2 flex items-center gap-3 font-bold mb-3">

                    <p className="text-base text-[#6e96cf]">{progress}%</p>

                    {/* <p className="rounded-md bg-green-500 text-white px-2 py-1 text-sm"> */}
                    <Progress progress={progress} className=" w-[19rem] block" />
                    {/* </p> */}


                </div>
            </div>
        </div>
    );
};

export default CardTopic;
