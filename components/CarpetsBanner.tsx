import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Button from "./UI/Button"

export default function CarpetsBanner() {

    return (
        <div className=" w-full relative flex items-center justify-start">
            <Image src="/images/bannerbg.jpg" blurDataURL="/bg.jpg" layout="fill" objectFit="cover" className="z-0" placeholder="blur" alt="Extrakční čištění koberců - WeClean" />
            <div className=" py-8 md:py-24  text-white w-full z-10">
                <MaxWidthWrapper>
                    <div className="md:w-1/3">
                        <div className="">
                            <h1 className=" text-2xl mb-1 font-semibold">Vaše koberce budou zářit čistotou!</h1>
                            <div className="opacity-75 font-light mt-4">Používáme profesionální čistící stroje značky Kärcher a účinnou chemii, která zbaví koberec všech viditelných i neviditelných nečistot.</div>
                        </div>
                        <div className="hidden mt-8 md:flex items-center gap-4">
                            <div className="hidden md:block">
                                <Button primary>Přejít k objednávce</Button>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>


            </div>
        </div>
    )
}