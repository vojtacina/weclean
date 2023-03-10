
import React, { ReactNode, useContext } from 'react'

interface Props {
    children?: ReactNode,
    options: Array<{ text: string | any, value: string | number | any, disabled?: boolean }>,
    value: string,
    setValue: (to:string) => void
}

function ContextMenu(props: Props) {
    const { children, options, value, setValue } = props


    return (
        <div className="relative group overflow-hidden">
            <label htmlFor='context-menu'>
                {children}
            </label>
            <select
                value={value ?? ""}
                onChange={e => { setValue(e.target.value)}}
                id="context-menu"
                className='absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer'
                >
                 {
                    options.map((o, i) =>
                        <option key={`option-${i}`} value={o.value} disabled={o.disabled}>{o.text}</option>
                    )
                }
            </select>
        </div>
    )
}

export default ContextMenu
