// utils/fetchData.ts
export const fetchData = async () => {
    const response = await fetch('http://localhost:3001/api/courses');
    console.log(response)
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };
  