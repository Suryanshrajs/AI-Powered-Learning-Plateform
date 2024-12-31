"use client";

import { Accordion } from "flowbite-react";
import VideoCard from "./VideoCard";

interface videoSessionsType {
    title: string
    url: string
    id: number
    description: string
}


interface props {
    contentList: videoSessionsType[];
    setVideoUrl: (url: string) => void;
    setVideoDescription: (url: string) => void;
    contentListTopics: string[]
}


export function AccordianComp({ contentList, setVideoUrl, setVideoDescription, contentListTopics }: props) {
    console.log(contentListTopics   )

    return (
        <Accordion className="rounded-none">

            <Accordion.Panel className="rounded-none">
                <Accordion.Title className="h-14 focus:outline-none focus:ring-0 first:rounded-none">
                    {contentListTopics[0]}
                </Accordion.Title>
                <Accordion.Content className="p-[0px] focus:outline-none ring-0">
                    {contentList.map((e, index) => (
                        <VideoCard
                            key={index}
                            title={e.description}
                            setVideoUrl={setVideoUrl}
                            url={e.url}
                            setVideoDescription={setVideoDescription}


                        />
                    ))}
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel className="rounded-none">
                <Accordion.Title className="h-14 focus:outline-none focus:ring-0">
                {contentListTopics[1]}
                </Accordion.Title>
                <Accordion.Content className="p-[2px] focus:outline-none ring-0">
                    {contentList.map((e, index) => (
                        <VideoCard
                            key={index}
                            title={e.title}
                            setVideoUrl={setVideoUrl}
                            url={e.url}
                            setVideoDescription={setVideoDescription}


                        />
                    ))}
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel className="rounded-none">
                <Accordion.Title className="h-14 focus:outline-none focus:ring-0">
                {contentListTopics[2]}
                </Accordion.Title>
                <Accordion.Content className="p-[2px] focus:outline-none ring-0">
                    {contentList.map((e, index) => (
                        <VideoCard
                            key={index}
                            title={e.title}
                            setVideoUrl={setVideoUrl}
                            url={e.url}
                            setVideoDescription={setVideoDescription}


                        />
                    ))}
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}
