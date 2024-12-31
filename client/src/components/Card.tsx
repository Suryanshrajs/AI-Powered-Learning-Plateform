import React from 'react';

interface CardProps {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    customOnClick: (id: number) => void; // Renamed prop
}

const Card: React.FC<CardProps> = ({
    id,
    title,
    imageUrl,
    description,
    customOnClick,
}) => {

    
    return (
        <div
            className="cursor-pointer max-w-[390px] rounded-lg border bg-neutral-100 dark:bg-[#181a1b] hover:shadow-2xl dark:border-[#353a3c] shadow-md p-3 transition-all duration-300 select-none"
            onClick={() => customOnClick(id)} // Call customOnClick with the card's id
        >
            {/* Image Section */}
            <div className="max-h-52 w-full overflow-hidden rounded-lg mb-4">
                <img
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="object-contain w-full h-full"
                    src={imageUrl}
                />
            </div>

            {/* Content Section */}
            <div>
                {/* Title */}
                <h3 className="dark:text-[#e8e6e3] mb-2 font-rubik text-lg font-bold tracking-tight md:text-2xl">
                    {title}
                </h3>
                <div className="h-[2px] w-3/4 bg-gray-300 opacity-10"></div>

                {/* Description Section */}
                <div className="mt-1 flex items-center gap-3 font-bold">
                    <p className="text-base text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
