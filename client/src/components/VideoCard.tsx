
import { MdVideocam } from "react-icons/md";

interface Props {
    setVideoUrl: (url: string) => void; // Callback function type
    title: string;
    url: string;
    setVideoDescription : (url: string) => void;
}

// VideoCard Component
const VideoCard = ({ title, setVideoUrl, url, setVideoDescription }: Props) => {
    const handleClick = () => {
        setVideoUrl(url); // Call the callback function with the URL
        setVideoDescription(title)
    };

    return (
        <a
            onClick={handleClick}
            className="border-gray-600 cursor-pointer videoCard hover:bg-[#2563eb] transition-all duration-75 h-14 w-full px-3 flex items-center gap-3"
        >
            <MdVideocam />
            <p className="truncate ">
                {title.length > 46 ? `${title.slice(0, 46)}...` : title}
            </p>
        </a>
    );
};

export default VideoCard;
