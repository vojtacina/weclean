import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useContext } from 'react'
import CalcMobileProgress from './CalcMobileProgress'
import { CalcFormContext } from './contexts/CalcFormContext'
import Modal from './UI/Modal'

interface Props {
    children: ReactNode
}

export default function ModalsWrapper(props: Props) {
    const { children } = props
    const { preferences, setPreferences } = useContext(CalcFormContext)

    return (
        <>
            {children}
            <AnimatePresence>
                {preferences?.modalOpened &&
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-50">
                        </motion.div>
                        <Modal close={() => setPreferences({ ...preferences, modalOpened: false })}>
                            <CalcMobileProgress close={() => setPreferences({ ...preferences, modalOpened: false })} />
                        </Modal>
                    </>
                }
            </AnimatePresence>
        </>
    )
}