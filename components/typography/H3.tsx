

import * as React from 'react';

export interface H1Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {

}

export function H3({ children, className }: H1Props) {
    return (
        <h3 className={`text-xl mob:text-lg mb-2 font-medium ${className}`}>
            {children}
        </h3>
    );
}
