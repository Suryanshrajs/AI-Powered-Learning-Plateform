"use client";
import { Header } from '@/components/HeaderPage';
import RightSidebar from '@/components/RightSidebar';
import Sidebar from '@/components/Sidebar';
import VideoPlayer from '@/components/VideoPlayer';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { setCourses } from '@/store/features/coursesdata/coursesdataSlice';
import Loader from '@/components/Loader';

const Page = () => {
    const params = useParams();
    const courseId = parseInt(Array.isArray(params?.courseId) ? params?.courseId[0] : params?.courseId || "0");
    const subjectId = parseInt(Array.isArray(params?.subjectId) ? params?.subjectId[0] : params?.subjectId || "0");

    const dispatch = useAppDispatch();

    const subjectNamesFromRedux = useAppSelector((state) => state.courseData.subjectNames);
    const subjectNames = subjectNamesFromRedux.find((e) => e.id === courseId)?.subjects || [];
    const subject = subjectNames.find((e) => e.id === subjectId);

    // Memoize contentList and contentListTopics to prevent unnecessary re-renders
    const contentList = useMemo(() => {
        return subject?.videoContent || [];
    }, [subject]);

    const contentListTopics = useMemo(() => {
        return subject?.topics || [];
    }, [subject]);

    const [isOpen, setIsOpen] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const [rightBarIsOpen, setRightBarIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [videoUrl, setVideoUrl] = useState<string>('');
    const [videoDescription, setVideoDescription] = useState<string>('');
    const [loading, setLoading] = useState(false);

    // Fetch video content if not available in Redux store
    useEffect(() => {
        const fetchVideoContent = async () => {
            if (contentList.length === 0) {
                setLoading(true);
                try {
                    const response = await axios.get('https://ai-powered-lms.onrender.com/api/courses');
                    const fetchedSubjectNames = response.data.courses[0].subjectNames;

                    dispatch(setCourses({ courses: response.data.courses[0].courses, subjectNames: fetchedSubjectNames }));
                    setLoading(false);
                    if (contentList.length > 0) {
                        setVideoUrl(contentList[0].url);
                    }
                } catch (err) {
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

    // Track the sidebar width on resize
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
            <Loader />
        </>;
    }

    return (
        <>
            <Header />
            <div className="flex pt-14 h-screen w-screen">
                <div className="flex w-full bg-[#111827]">
                    <Sidebar
                        setVideoDescription={setVideoDescription}
                        setVideoUrl={setVideoUrl}
                        contentListTopics={contentListTopics}
                        contentList={contentList}
                        sidebarRef={sidebarRef}
                        toggleSidebar={toggleSidebar}
                        isOpen={isOpen}
                    />
                    <VideoPlayer
                        isOpen={isOpen}
                        toggleSidebar={toggleSidebar}
                        sidebarWidth={sidebarWidth}
                        handleClick={handleClick}
                        videoUrl={videoUrl}
                        videoDescription={videoDescription}
                    />
                    <RightSidebar isOpen={rightBarIsOpen} toggleSidebar={handleClick} />
                </div>
            </div>
        </>
    );
};

export default Page;
