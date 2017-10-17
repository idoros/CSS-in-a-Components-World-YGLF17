import * as React from 'react';
import * as deindent from 'deindent';

type CodeProps = {
    children:React.ReactNode;
    lang?:'css'|'javascript'|string;
    noEscape?:boolean;
    trim?:boolean;
    className?:string;
};

export const Code = ({children, lang='', noEscape, trim, className=''}:CodeProps) => {
    return (
        <pre className={lang}>
            <code className={className} data-trim={trim} data-noescape={noEscape}>{children}</code>
        </pre>
    );
}

type MarkCodeProps = {
    children:string;
    lang?:string;
    markSymbol?:string;
    markMapping?:{[s:string]:string};
    dimUnmarked?:boolean;
};
export const MarkCode = ({children, lang, markSymbol = '%', markMapping = {}, dimUnmarked=false}:MarkCodeProps) => {
    const code = deindent(children).trim();
    const markSplit = code.split(new RegExp(`${markSymbol}([^${markSymbol}]+)${markSymbol}`));
    const codeTarget = markSplit.map((snip, index) => index % 2 ? <mark data-name={markMapping[snip]}>{snip}</mark> : snip);
    return <Code lang={lang} trim={true} noEscape={codeTarget.length>1} className={dimUnmarked?'dimUnmarked':''}>{codeTarget}</Code>
};
