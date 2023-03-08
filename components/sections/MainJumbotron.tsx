import Image from "next/image"
import { Link } from "react-scroll"
import NextLink from "next/link"
import { useContext } from "react"
import { Phone } from "phosphor-react"
import { CalcFormContext } from "../contexts/CalcFormContext"
import MaxWidthWrapper from "../MaxWidthWrapper"
import RenderButton from "../RenderButton"

export default function MainJumbotron({ data }: {
    data: {
        image: string
        title: string,
        subtitle: string,
        buttons: Array<[string, string | (() => void)]>
    }
}) {

    const { preferences, setPreferences } = useContext(CalcFormContext)

    return (
        <div className=" w-full relative flex items-center justify-start bg-gray-700">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-30 bg-black z-10"></div>
            <Image src={`/images/${data.image}`} blurDataURL={`/images/${data.image}`} layout="fill" objectFit="cover" className="z-0" placeholder="blur" alt="Extrakční čištění koberců - WeClean" />
            <div className="absolute left-4 top-4 z-20 w-48 h-6 md:h-8 ">
                    <Image src="/images/focuscleaning.png" layout="fill" objectFit="contain" objectPosition="left" alt="WeClean logo společnosti" />
            </div>
            <div className=" pt-32 pb-12 lg:py-48  text-white w-full z-10">
                <MaxWidthWrapper>
                    <div className="">
                        <div className="">
                            <h1 className=" text-3xl font-semibold md:text-4xl lg:text-5xl mb-1">{data.title}</h1>
                            <div className="text-xl opacity-75 font-light">{data.subtitle}</div>

                            <div className="mt-4 text-xl font-light md:flex items-center gap-x-2">
                                <div className="opacity-75">Zavolejte nám:</div>
                                <div className="flex items-center gap-x-1">
                                    <Phone />
                                    <a href="tel:777772054">777777 20 54</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 md:flex grid items-center gap-4">
                            {data.buttons?.map((button, i) => (
                                <div key={`button_${i}`} className="hidden md:block">
                                    <RenderButton button={button} primary={i == (data.buttons.length) - 1} />
                                </div>
                            ))}
                        </div>
                    </div>
                </MaxWidthWrapper>


            </div>
        </div>
    )
}