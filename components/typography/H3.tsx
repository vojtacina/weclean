

import * as React from 'react';

export interface H1Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {

}

export function H3({ children, className }: H1Props) {
    return (
        <h3 className={`text-lg mob:text-base mb-2 font-semibold ${className}`}>
            {children}
        </h3>
    );
}
