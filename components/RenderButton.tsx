import React, { ReactNode } from 'react'
import { Link } from 'react-scroll'
import Button, { ButtonProps } from './UI/Button'
import NextLink from "next/link"

interface Props {
    button: [string, string | (() => void)],
    primary?: boolean,
    link?: boolean
}

function LikeLink({children}:{children:ReactNode}) {

    return (
        <div className="text-blue-primary hover:text-opacity-80 cursor-pointer">{children}</div>
    )
}

function RenderButton(props: Props) {
    const { button, link, ...rest } = props

    return (
        <>
            {typeof button[1] == "string" && (button[1].includes("#")) &&
                <Link to={button[1].replace("#", "")} spy={true} smooth={true} duration={500} offset={24}>
                    {link ? <LikeLink>{button?.[0]}</LikeLink> : <Button {...rest}>{button?.[0]}</Button>}
                </Link>
            }
            {typeof button[1] == "string" && (button[1].includes("/")) &&
                <NextLink href={button[1]}>
                     {link ? <LikeLink>{button?.[0]}</LikeLink> : <Button {...rest}>{button?.[0]}</Button>}
                </NextLink>
            }
            {(typeof button[1] != "string") &&
                 (link ? <LikeLink>{button?.[0]}</LikeLink> : <Button {...rest} onClick={button[1]}>{button?.[0]}</Button>)
            }
        </>
    )
}

export default RenderButton