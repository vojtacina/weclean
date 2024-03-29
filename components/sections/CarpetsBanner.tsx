import Image from "next/image"
import { useContext } from "react"
import { CalcFormContext } from "../contexts/CalcFormContext"
import MaxWidthWrapper from "../MaxWidthWrapper"
import RenderButton from "../RenderButton"
import Button from "../UI/Button"

export default function CarpetsBanner({ data }: {
    data: {
        image: string,
        title: string,
        description: string,
        button?: [string, string | (() => void)]
    }
}) {

    const { preferences, setPreferences } = useContext(CalcFormContext)

    const image = require(`../../public/images/${data?.image}`)

    return (
        <section className="p-4 md:p-0">
            <div className=" w-full relative flex items-center justify-start overflow-hidden rounded-lg md:rounded-none shadow-lg">
                <Image src={image} fill className="z-0 object-cover" placeholder="blur" alt="Extrakční čištění koberců - WeClean" />
                <div className=" py-4 md:py-24  text-white w-full z-10 bg-black bg-opacity-30">
                    <MaxWidthWrapper>
                        <div className="md:w-1/3">
                            <div className="">
                                <h2 className=" text-2xl mb-1 font-medium mt-4">{data.title}</h2>
                                <p className="opacity-75 font-light mt-4">{data.description}</p>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                {data.button &&
                                    <div className="w-full md:w-auto">
                                        <RenderButton button={data.button} primary />
                                    </div>
                                }
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </div>
        </section>

    )
}