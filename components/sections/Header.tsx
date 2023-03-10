import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DotsThree, DotsThreeVertical, Hamburger } from 'phosphor-react'
import NextLink from 'next/link'
import { Link } from 'react-scroll'
import ContextMenu from '../UI/ContextMenu'
import { useRouter } from 'next/router'

interface Props {
    invert?: boolean,
    page?: string
}

function Header(props: Props) {
    const { invert, page } = props
    const router = useRouter()

    const [scrollPosition, setScrollPosition] = useState(0)
    const [selPage, setSelPage] = useState(router?.pathname)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() => {
        if (selPage != router?.pathname) {
            router.push(selPage)
        }
    }, [selPage, router])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>

            <div className={`absolute z-20 top-0 left-0 right-0 p-4 flex justify-between ${invert ? "text-black" : "text-white"} duration-200 ${scrollPosition > 48 && "bg-blue-darke"}`}>
                <NextLink href='/' className="relative z-20 w-48 h-6 md:h-8">
                    <Image src={`/images/focuscleaning_${invert ? "black" : "white"}.svg`} priority fill className='object-contain object-left' alt="WeClean logo společnosti" />
                </NextLink>
                <div className="hidden lg:flex justify-around pr-6">
                    <MenuLink link={["Úvod", "/"]} />
                    <MenuLink link={["Čištění koberců", "/sluzby/cisteni-kobercu"]} />
                    <MenuLink link={["Úklidové služby", "/sluzby/uklidove-sluzby"]} />
                    <MenuLink link={["Péče o podlahy", "/sluzby/pece-o-podlahy"]} />
                    <MenuLink link={["O nás", "/o-nas"]} />
                </div>
                <div className="lg:hidden">
                    <ContextMenu options={[
                        { value: "/", text: "Úvod" },
                        { value: "/sluzby/cisteni-kobercu", text: "Čištění koberců" },
                        { value: "/sluzby/uklidove-sluzby", text: "Úklidové služby" },
                        { value: "/sluzby/pece-o-podlahy", text: "Péče o podlahy" },
                        { value: "/o-nas", text: "O nás" },
                    ]} value={selPage} setValue={(to) => setSelPage(to)}>
                        <DotsThreeVertical size={24} />
                    </ContextMenu>
                </div>
            </div>
        </>
    )
}

function MenuLink({ link }: { link: [string, string] }) {

    return (
        link[1].includes("#") ?
            <Link to={link[1].replace("#", "")} smooth className="opacity-75 hover:opacity-100 px-6 py-1" href={link[1]}>{link[0]}</Link>
            :
            <NextLink className="opacity-75 hover:opacity-100 px-6 py-1 font-light" href={link[1]}>{link[0]}</NextLink>
    )
}

export default Header
