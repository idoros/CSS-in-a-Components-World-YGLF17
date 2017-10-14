import * as React from 'react';

type MarkdownProps = {
    children:React.ReactNode;
    externalURL?:string;
};

export const Markdown = ({children, externalURL=""}:MarkdownProps) => {
    return (
        <div data-markdown={externalURL}>
            {externalURL ? null : <script type="text/template">{children}</script> }
        </div>
    );
}