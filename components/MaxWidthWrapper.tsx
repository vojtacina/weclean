import { ReactElement } from "react";


export default function MaxWidthWrapper({children}:{children: ReactElement}) {


    return (
        <div className="w-full flex justify-center">
            <div className=" max-w-screen-lg 2xl:max-w-screen-xl w-full px-3">
                {children}
            </div>
        </div>
    )
}