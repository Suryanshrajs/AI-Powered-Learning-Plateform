import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export const useDynamicPathname = () => {
    const [pathname, setCurrentPathname] = useState('');
    const pathnameRouter = usePathname();

    useEffect(() => {
        setCurrentPathname(pathnameRouter);
    }, [pathnameRouter])

    const updatePathname = (newPath: string) => {
        setCurrentPathname(newPath);
    };

    return { pathname, updatePathname };

}