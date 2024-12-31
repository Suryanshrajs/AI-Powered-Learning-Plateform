"use client";
import Image from "next/image";

import { Progress } from "flowbite-react";


interface CardProps {
    title: string;
    imageUrl: string;
    callBack: () => void
}

const CardTopic: React.FC<CardProps> = ({ title, imageUrl, callBack }) => {
   // const [progress, setProgress] = useState(10); // Initial progress value
    const progress = 10;
    return (
        <div onClick={callBack} className="cursor-pointer max-w-[370px] rounded-lg border bg-neutral-100 dark:bg-[#181a1b] hover:shadow-2xl dark:border-[#353a3c] shadow-md p-[1px] transition-all duration-300 select-none">
            {/* Image Section */}
            <Image
    alt={title}
    loading="lazy"
    decoding="async"
    className="object-contain w-full h-full"
    src={imageUrl}
    width={370}  // Adjust width accordingly
    height={208} // Adjust height accordingly
/>

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
