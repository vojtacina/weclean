

import * as React from 'react';
import { ReactNode } from 'react';

export interface ParagraphProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    className?: string
}

export function Paragraph(props: ParagraphProps) {
    const { children, className } = props
    return (
        <p {...props} className={`mb-2 leading-6 text-gray-700 ${className}`}>
            {children}
        </p>
    );
}
