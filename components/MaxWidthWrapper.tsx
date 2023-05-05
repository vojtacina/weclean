import { ReactElement, ReactNode } from "react";


export default function MaxWidthWrapper({children, noPadding}:{children: ReactNode, noPadding?: boolean}) {


    return (
        <div className="w-full flex justify-center">
            <div className={`max-w-screen-lg w-full ${noPadding ? "px-0" : "px-4"}`}>
                {children}
            </div>
        </div>
    )
}