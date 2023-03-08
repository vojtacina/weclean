

import * as React from 'react';

export interface H1Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {

}

export function H2({ children, className }: H1Props) {
    return (
        <h2 className={`text-xl mob:text-base mb-2 font-medium ${className}`}>
            {children}
        </h2>
    );
}
