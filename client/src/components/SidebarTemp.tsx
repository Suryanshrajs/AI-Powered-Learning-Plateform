import React, { RefObject } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { AccordianComp } from './AccordianComp';

// Define the types for the props
interface VideoSession {
  title: string;
  url: string;
  id: number;
  description: string;
}

interface SidebarTempProps {
  sidebarRef: RefObject<HTMLDivElement>; // type for sidebarRef (HTMLDivElement reference)
  toggleSidebar: () => void; // type for the function
  isOpen: boolean; // type for the isOpen state
  contentList: VideoSession[]; // List of video sessions
  setVideoUrl: (url: string) => void; // Function to set the video URL
  setVideoDescription: (description: string) => void; // Function to set the video description
  contentListTopics: string[]; // List of topics
}

const SidebarTemp: React.FC<SidebarTempProps> = ({ 
  sidebarRef, 
  toggleSidebar, 
  isOpen, 
  contentList, 
  setVideoUrl, 
  setVideoDescription, 
  contentListTopics 
}) => {
  return (
    <div
      ref={sidebarRef}
      className={`border-r border-gray-600 transition-all duration-500 bg-gray-900 text-gray-300 h-full overflow-hidden ${isOpen ? "w-[32rem]" : "w-0"}`}
    >
      <div className="h-full">
        <div className="w-full flex justify-end pt-2 pb-1 bg-gray-700">
          <FaArrowLeftLong
            onClick={toggleSidebar}
            className="cursor-pointer hover:bg-gray-500 translate-all duration-75 rounded-md h-10 w-10 px-2 text-2xl text-white"
          />
        </div>
        <AccordianComp 
          contentList={contentList} 
          setVideoUrl={setVideoUrl} 
          setVideoDescription={setVideoDescription} 
          contentListTopics={contentListTopics} 
        />
      </div>
    </div>
  );
};

export default SidebarTemp;
