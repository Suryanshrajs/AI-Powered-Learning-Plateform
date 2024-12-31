"use client"
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { RootState } from '@/store/store';
import { setCourses } from '@/store/features/coursesdata/coursesdataSlice';
import CardTopic from '@/components/CardTopic';
import { Header } from '@/components/HeaderPage';
import axios from 'axios';
import { Subject, SubjectName } from '@/store/features/coursesdata/coursesdataSlice';
import Loader from '@/components/Loader';

const Page = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const id = params?.courseId || 0;
    const router = useRouter();


    // Selectors to get courses and subjectNames from Redux store
    const subjectNames = useAppSelector((state: RootState) => state.courseData.subjectNames);
    const subjects = subjectNames.find((e: SubjectName) => e.id == id)?.subjects || [];

    // State for loading
    const [loading, setLoading] = useState(false);

    // Fetch subjects if they are not in Redux
    useEffect(() => {
        const fetchSubjects = async () => {
            if (subjectNames.length === 0) { // If no subjects in Redux, fetch from server
                setLoading(true);
                try {
                    const response = await axios.get('http://localhost:3001/api/courses'); // Replace with your API endpoint
                    const fetchedSubjectNames = response.data.courses[0].subjectNames;

                    // Dispatch the data to Redux
                    dispatch(setCourses({ courses: response.data.courses[0].courses, subjectNames: fetchedSubjectNames }));
                    setLoading(false);
                } catch (err: any) {
                    console.error('Error fetching subjects:', err);
                    setLoading(false);
                }
            }
        };

        fetchSubjects();
    }, [dispatch, subjectNames]);

    const handleCardClick = (subjectId: number) => {
        console.log(`Card clicked with ID: ${id}`);
        router.push(`/courses/subject/${id}/video/${subjectId}`);
    };


    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
                <div className="loader">Loading...</div> {/* You can replace this with a spinner or any loading component */}
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="flex-wrap flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-7 gap-x-6 gap-y-5  px-3">
                {subjects.length > 0 ? (
                    subjects.map((e: Subject) => (
                        <CardTopic key={e.id} imageUrl={e.imageUrl} title={e.name} callBack={() => handleCardClick(e.id)} />
                    ))
                ) : (
                    <Loader></Loader>

                )}
            </div>
        </>
    );
};

export default Page;
