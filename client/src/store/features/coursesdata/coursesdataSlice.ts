import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface VideoContent {
    id: number
    title: string
    url: string
    description: string
}

export interface Subject {
    id: number
    name: string
    imageUrl: string
    description: string
    videoContent: VideoContent[]
    topics: string[]
}

export interface SubjectName {
    id: number
    name: string

    subjects: Subject[]
}

export interface Course {
    id: number
    name: string
    description: string
    imageUrl: string
}

// Define the initial state
interface CourseState {
    courses: Course[]
    subjectNames: SubjectName[]
}

const initialState: CourseState = {
    courses: [],
    subjectNames: []
}

export const courseSlice = createSlice({
    name: 'courseData',
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<Course>) => {
            state.courses.push(action.payload)
        },
        addSubject: (state, action: PayloadAction<{ courseId: number; subject: Subject }>) => {
            const course = state.subjectNames.find(c => c.id === action.payload.courseId)
            if (course) {
                course.subjects.push(action.payload.subject)
            }
        },
        updateCourseDescription: (state, action: PayloadAction<{ courseId: number; description: string }>) => {
            const course = state.courses.find(c => c.id === action.payload.courseId)
            if (course) {
                course.description = action.payload.description
            }
        },

        setCourses: (state, action: PayloadAction<{ courses: Course[]; subjectNames: SubjectName[] }>) => {
            state.courses = action.payload.courses;
            state.subjectNames = action.payload.subjectNames;
        },
    },
})

// Export actions and reducer
export const { addCourse, addSubject, updateCourseDescription, setCourses } = courseSlice.actions
export default courseSlice.reducer
