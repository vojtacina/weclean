
import React, { useEffect, useState } from 'react'


export function useIsMobile(size: "mob" | "sm") {
    const [width, setWidth] = useState<number>(0)

    function allowedWidth() {
        switch(size) {
            case "mob": return 1150
            case "sm": return 768
            default: return 768
        }
    
    }

    function handleWindowSizeChange() {
        setWidth(window?.innerWidth);
    }
    useEffect(() => {
        setWidth(window?.innerWidth)
        window?.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window?.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= allowedWidth()) ? true : false;
}
