import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Button from "./UI/Button"

export default function MainJumbotron() {


    return (
        <div className=" w-full relative flex items-center justify-start">
            <Image src="/bg.jpg" blurDataURL="/bg.jpg" layout="fill" objectFit="cover" className="z-0" placeholder="blur" />
            <div className="absolute left-4 top-4">
                <Image src="/weclean-logo.png" width={100} height={28} />
            </div>
            <div className="pt-24 pb-5 md:pt-32 md:pb-24 lg:py-48  text-white w-full z-10">
                <MaxWidthWrapper>
                    <div className="">
                        <div className="">
                            <h1 className=" text-2xl md:text-3xl lg:text-5xl mb-1">Profesionální úklid a čištění koberců</h1>
                            <div className="text-xl opacity-75 font-light">v okolí Šumperka a Zábřehu</div>

                            <div className="mt-4 font-light">zavolejte nám: <strong>774148327</strong></div>
                        </div>
                        <div className="mt-8 md:flex grid items-center gap-4">
                            <div className="hidden md:block">
                                <Button>Spočítat cenu</Button>
                            </div>
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