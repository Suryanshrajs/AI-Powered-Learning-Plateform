
interface props {
    videoUrl: string
}
const YouTubePlayer: React.FC<props> = ({ videoUrl }) => {
  
 
    return (

        <div className="video duration-500 h-full w-full rounded-md mr-3">
            <iframe
                className="h-full w-full rounded-md"
                src={videoUrl || undefined}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>


    );
};

export default YouTubePlayer;

 