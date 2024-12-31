// pages/index.tsx
"use client";
import { Header } from '@/components/HeaderPage';
import RightSidebar from '@/components/RightSidebar';
import Sidebar from '@/components/Sidebar';
import VideoPlayer from '@/components/VideoPlayer';
import { Subject, SubjectName, VideoContent } from '@/store/features/coursesdata/coursesdataSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { setCourses } from '@/store/features/coursesdata/coursesdataSlice';
import Loader from '@/components/Loader';

const Page = () => {
    const params = useParams();
    const courseId = parseInt(Array.isArray(params?.courseId) ? params?.courseId[0] : params?.courseId || "0");
    const subjectId = parseInt(Array.isArray(params?.subjectId) ? params?.subjectId[0] : params?.subjectId || "0");

    const router = useRouter();
    const dispatch = useAppDispatch();

    // Selectors to get subject names and video content from Redux store
    const subjectNamesFromRedux = useAppSelector((state) => state.courseData.subjectNames);
    const subjectNames = subjectNamesFromRedux.find((e: SubjectName) => e.id === courseId)?.subjects || [];
    const subject = subjectNames.find((e: Subject) => e.id === subjectId);
    const contentList = subject?.videoContent || [];
    const contentListTopics = subject?.topics || [];

    const [isOpen, setIsOpen] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const [rightBarIsOpen, setRightBarIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [videoUrl, setVideoUrl] = useState<string>('');
    const [videoDescription, setVideoDescription] = useState<string>('');
    const [loading, setLoading] = useState(false);

    // Fetch video content if it's not present in Redux
    useEffect(() => {
        const fetchVideoContent = async () => {
            if (contentList.length === 0) { // If no content in Redux, fetch from server
                setLoading(true);
                try {
                    const response = await axios.get('http://localhost:3001/api/courses'); // Replace with your API endpoint
                    const fetchedSubjectNames = response.data.courses[0].subjectNames;

                    // Dispatch the data to Redux
                    dispatch(setCourses({ courses: response.data.courses[0].courses, subjectNames: fetchedSubjectNames }));
                    setLoading(false);
                    if (contentList.length > 0) {
                        setVideoUrl(contentList[0].url);
                    }
                } catch (err: any) {
                    console.error('Error fetching video content:', err);
                    setLoading(false);
                }
            } else {
                if (contentList.length > 0) {
                    setVideoUrl(contentList[0].url);
                }
            }
        };

        fetchVideoContent();
    }, [dispatch, contentList]);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
        setRightBarIsOpen(false);
    };

    function handleClick() {
        setIsOpen(false);
        setRightBarIsOpen((prev) => !prev);
    }

    useEffect(() => {
        const updateSidebarWidth = () => {
            if (sidebarRef.current) {
                setSidebarWidth(sidebarRef.current.offsetWidth);
            }
        };

        updateSidebarWidth();
        window.addEventListener("resize", updateSidebarWidth);

        return () => {
            window.removeEventListener("resize", updateSidebarWidth);
        };
    }, [isOpen]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient || loading) {
        return <>
        <Header />
        <Loader></Loader>
        </>
    }

    return (
        <>
            <Header />
            <div className="flex pt-14 h-screen w-screen">
                <div className="flex w-full bg-[#111827]">
                    <Sidebar setVideoDescription={setVideoDescription} setVideoUrl={setVideoUrl} contentListTopics={contentListTopics} contentList={contentList} sidebarRef={sidebarRef} toggleSidebar={toggleSidebar} isOpen={isOpen} />

                    {/* Main Content */}
                    <VideoPlayer isOpen={isOpen} toggleSidebar={toggleSidebar} sidebarWidth={sidebarWidth} handleClick={handleClick} videoUrl={videoUrl} videoDescription={videoDescription} />

                    <RightSidebar isOpen={rightBarIsOpen} toggleSidebar={handleClick} />
                </div>
            </div>
        </>
    );
};

export default Page;
