import * as React from 'react';

type MarkdownProps = {
    children:React.ReactNode;
    externalURL?:string;
    seperator?:string;
    vertical?:string;
    separatorNotes?:string;
};
//data-separator={seperator} data-vertical={vertical} data-separator-notes={separatorNotes}
export const Markdown = ({children, externalURL="", seperator='^\n---\n$', vertical='^\n--\n$', separatorNotes='^Note:'}:MarkdownProps) => {
    return (
        <div data-markdown={externalURL} >
            {externalURL ? null : <script type="text/template">{children}</script> }
        </div>
    );
}