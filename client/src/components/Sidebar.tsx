import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { AccordianComp } from './AccordianComp'


interface videoSessionsType {
    title: string
    url: string
    id: number
    description: string

}


interface props {
    sidebarRef: any
    toggleSidebar: () => void
    isOpen: boolean
    contentList: videoSessionsType[]
    setVideoUrl: (url: string) => void;
    setVideoDescription: (url: string) => void;
    contentListTopics: string[]
}

const Sidebar = ({ sidebarRef, toggleSidebar, isOpen, contentList, contentListTopics, setVideoDescription, setVideoUrl }: props) => {


    return (
        <div
            ref={sidebarRef}
            className={` border-r border-gray-600 transition-all duration-500 bg-gray-900 text-gray-300 h-full overflow-hidden ${isOpen ? "w-[32rem]" : "w-0"
                }`}
        >
            <div className="h-full">
                <div className="w-full flex   justify-end pt-2 pb-1 bg-gray-700" >
                    <FaArrowLeftLong
                        onClick={toggleSidebar}
                        className=" cursor-pointer hover:bg-gray-500 translate-all duration-75 rounded-md h-10  w-10 px-2  text-2xl text-white"
                    />


                </div>
                <AccordianComp contentListTopics = {contentListTopics} setVideoUrl={setVideoUrl} setVideoDescription={setVideoDescription} contentList={contentList} />
            </div>
        </div>
    )
}

export default Sidebar