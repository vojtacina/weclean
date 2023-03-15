import React, { ReactNode } from 'react'
import { Link } from 'react-scroll'
import Button, { ButtonProps } from './UI/Button'
import NextLink from "next/link"
import { ArrowRight } from 'phosphor-react'

interface Props {
    button: [string, string | (() => void)],
    primary?: boolean,
    link?: boolean
}

function LikeLink({children}:{children:ReactNode}) {

    return (
        <div className="text-blue-primary hover:text-opacity-80 cursor-pointer flex items-center gap-x-2">
            <div className=""><ArrowRight /></div>
            <div className="">{children}</div>
        </div>
    )
}

function RenderButton(props: Props) {
    const { button, link, ...rest } = props

    return (
        <>
            {typeof button[1] == "string" && (button[1].includes("#")) &&
                <a href={button[1]}>
                    {link ? <LikeLink>{button?.[0]}</LikeLink> : <Button {...rest}>{button?.[0]}</Button>}
                </a>
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
