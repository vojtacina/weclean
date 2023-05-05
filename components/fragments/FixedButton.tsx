import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { CalcFormContext } from '../contexts/CalcFormContext'
import Button from '../UI/Button'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
    children: ReactNode
}

function FixedButton(props: Props) {
    const { } = props

    const { preferences, setPreferences } = useContext(CalcFormContext)

    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <AnimatePresence>
            {scrollPosition > 100 &&
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className={`fixed bottom-4 left-0 right-0 flex justify-center z-40 md:hidden px-4`}>
                    <div className="inline-flex">
                        <Button className={`shadow-lg ${preferences.modalSent && "  bg-green-call hover:bg-green-call cursor-not-allowed"}`} primary onClick={() => setPreferences({ ...preferences, modalOpened: preferences?.modalSent ? false : true })}>{preferences?.modalSent ? "Brzy se Vám ozveme 🙂" : props.children}</Button>
                    </div>
                </motion.div>
            }

        </AnimatePresence>

    )
}

export default FixedButton
