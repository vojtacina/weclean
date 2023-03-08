
import React from "react";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export default function Underline(props: Props) {
    const {children} = props;
    return (
        <div {...props} className="relative border-b border-black">
            {children}
        </div>
    )
}