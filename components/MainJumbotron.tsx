import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Button from "./UI/Button"
import { Link } from "react-scroll"
import { useContext } from "react"
import { CalcFormContext } from "./contexts/CalcFormContext"
import { Phone } from "phosphor-react"

export default function MainJumbotron() {

    const { preferences, setPreferences } = useContext(CalcFormContext)

    return (
        <div className=" w-full shadow-lg relative flex items-center justify-start bg-gray-700">
            <Image src="/images/bg.jpg" blurDataURL="/images/bg.jpg" layout="fill" objectFit="cover" className="z-0" placeholder="blur" alt="Extrakční čištění koberců - WeClean" />
            <div className="absolute left-4 top-4">
                <Image src="/images/focuscleaning.png" width={252} height={38} alt="WeClean logo společnosti" />
            </div>
            <div className=" pt-32 pb-12 lg:py-48  text-white w-full z-10">
                <MaxWidthWrapper>
                    <div className="">
                        <div className="">
                            <h1 className=" text-3xl font-semibold md:text-4xl lg:text-5xl mb-1">Profesionální úklid a čištění koberců Brno</h1>
                            <div className="text-xl opacity-75 font-light">Zkušenosti od roku 1996</div>

                            <div className="mt-4 text-xl font-light flex items-center gap-x-2">
                                <div className="opacity-75">Zavolejte nám:</div>
                                <div className="flex items-center gap-x-1">
                                    <Phone />
                                    <a href="tel:777772054">777777 20 54</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 md:flex grid items-center gap-4">
                            <div className="hidden md:block">
                                <Link to="kalkulacka" spy={true} smooth={true} duration={500} offset={24}>
                                    <Button>Spočítat cenu</Button>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <Button primary onClick={() => setPreferences({ ...preferences, modalOpened: true })}>Přejít k objednávce</Button>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>


            </div>
        </div>
    )
}