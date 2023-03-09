

import * as React from 'react';

export interface H1Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {

}

export function H1({ children, className }: H1Props) {
    return (
        <h1 className={`text-4xl mob:text-2xl mb-4 font-medium ${className}`}>
            {children}
        </h1>
    );
}
