import { ReactElement, ReactNode } from "react";


export default function MaxWidthWrapper({children}:{children: ReactNode}) {


    return (
        <div className="w-full flex justify-center">
            <div className=" max-w-screen-lg 2xl:max-w-screen-xl w-full px-4">
                {children}
            </div>
        </div>
    )
}