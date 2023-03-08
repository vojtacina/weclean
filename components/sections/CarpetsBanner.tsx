import Image from "next/image"
import { useContext } from "react"
import { CalcFormContext } from "../contexts/CalcFormContext"
import MaxWidthWrapper from "../MaxWidthWrapper"
import RenderButton from "../RenderButton"
import Button from "../UI/Button"

export default function CarpetsBanner({ data }: {
    data: {
        title: string,
        description: string,
        button?: [string, string | (() => void)]
    }
}) {

    const { preferences, setPreferences } = useContext(CalcFormContext)

    return (
        <div className=" w-full relative flex items-center justify-start overflow-hidden">
            <Image src="/images/bannerbg.jpg" blurDataURL="/images/bg.jpg" layout="fill" objectFit="cover" className="z-0" placeholder="blur" alt="Extrakční čištění koberců - WeClean" />
            <div className=" py-8 md:py-24  text-white w-full z-10">
                <MaxWidthWrapper>
                    <div className="md:w-1/3">
                        <div className="">
                            <h1 className=" text-2xl mb-1 font-semibold">{data.title}</h1>
                            <div className="opacity-75 font-light mt-4">{data.description}</div>
                        </div>
                        <div className="hidden mt-8 md:flex items-center gap-4">
                            {data.button &&
                                <div className="hidden md:block">
                                    <RenderButton button={data.button} primary />
                                </div>
                            }
                        </div>
                    </div>
                </MaxWidthWrapper>


            </div>
        </div>
    )
}