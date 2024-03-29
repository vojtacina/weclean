import Image from "next/image"
import { Link } from "react-scroll"
import NextLink from "next/link"
import { useContext } from "react"
import { Phone } from "phosphor-react"
import { CalcFormContext } from "../contexts/CalcFormContext"
import MaxWidthWrapper from "../MaxWidthWrapper"
import RenderButton from "../RenderButton"
import Button from "../UI/Button"

export default function MainJumbotron({ data }: {
    data: {
        image: string
        title: string,
        subtitle: string,
        buttons: Array<[string, string | (() => void)]>
    }
}) {

    const { preferences, setPreferences } = useContext(CalcFormContext)

    const image = require(`../../public/images/${data.image}`)

    return (
        <section className="">
            <div className=" w-full relative flex items-center justify-start bg-black md:min-h-0  overflow-hidden md:rounded-none shadow-lg">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black z-10"></div>
                <Image src={image} priority fill className="z-0 object-cover" placeholder="blur" alt="Extrakční čištění koberců - WeClean" />
                <div className=" py-8 lg:py-48  text-white w-full z-10">
                    <MaxWidthWrapper>
                        <div className="pt-16">
                            <div className="">
                                <h1 className=" text-3xl font-medium md:text-4xl lg:text-5xl mb-1">{data.title}</h1>
                                <p className="text-xl opacity-75 font-light">{data.subtitle}</p>

                                <div className="mt-4 text-xl font-light md:flex items-center gap-x-2">
                                    <p className="opacity-75 mb-4 md:mb-0">Zavolejte nám:</p>
                                    <a href="tel:777772054" className="md:hidden">
                                        <Button primary className=" bg-green-call hover:bg-green-call">
                                            <div className="flex items-center gap-x-1">
                                                <Phone />
                                                <div className="font-medium">777 772 054</div>
                                            </div>
                                        </Button>
                                    </a>
                                    <div className="md:flex items-center gap-x-1 hidden">
                                        <Phone />
                                        <a href="tel:777772054">777 772 054</a>
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
        </section>

    )
}