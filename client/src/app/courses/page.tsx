"use client"
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import { Header } from '@/components/HeaderPage';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setCourses } from '@/store/features/coursesdata/coursesdataSlice';
import axios from 'axios';
import Loader from '@/components/Loader';

interface Course {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

const Page = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const coursesFromRedux = useAppSelector((state) => state.courseData.courses);
    const subjectNamesFromRedux = useAppSelector((state) => state.courseData.subjectNames);

    const [courseData, setCourseData] = useState<Course[]>([]); // Only courses here
    const [loading, setLoading] = useState(true);

    const handleCardClick = (id: number) => {
        console.log(`Card clicked with ID: ${id}`);
        router.push(`/courses/subject/${id}`);
    };

    useEffect(() => {
        // If courses and subjectNames are already in Redux, don't fetch from server
        if (coursesFromRedux.length > 0 && subjectNamesFromRedux.length > 0) {
            setCourseData(coursesFromRedux);
            setLoading(false);
        } else {
            // Fetch from the server if not in Redux
            const fetchCourses = async () => {
                try {
                    const response = await axios.get('http://localhost:3001/api/courses'); // Replace with your API endpoint
                    console.log((response.data.courses)[0]);

                    const courses = response.data.courses[0].courses;
                    const subjectNames = response.data.courses[0].subjectNames;
                    setCourseData(courses);

                    // Dispatch to Redux to store courses and subjectNames
                    dispatch(setCourses({ courses, subjectNames }));

                    setLoading(false);
                } catch (err: any) {
                    console.log(err);
                    setLoading(false);
                }
            };

            fetchCourses();
        }
    }, [dispatch, coursesFromRedux, subjectNamesFromRedux]);

    if (loading) {
        return (<>
            <Header />
            <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
                <Loader></Loader>
            </div>
        </>
        );
    }

    return (
        <>
            <Header />
            <div className="flex-wrap flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-7 gap-x-6 gap-y-5  px-3">
                {courseData.map((e: Course) => {
                    return <Card
                        key={e.id}
                        id={e.id}
                        title={e.name}
                        imageUrl={e.imageUrl}
                        description={e.description}
                        customOnClick={handleCardClick}
                    />
                })}
            </div>
        </>
    );
};

export default Page;
