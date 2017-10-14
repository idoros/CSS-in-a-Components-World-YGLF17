import * as React from 'react';

type CodeProps = {
    children:React.ReactNode;
    lang?:string;
    noEscape?:boolean;
    trim?:boolean;
};

export const Code = ({children, lang, noEscape, trim}:CodeProps) => {
    return (
        <pre className={lang||''}>
            <code data-trim={trim} data-noescape={noEscape}>{children}</code>
        </pre>
    );
}