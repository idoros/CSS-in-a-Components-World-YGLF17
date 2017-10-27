import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
    unHighlight?:boolean;
    completions?:string[];
    completionIndex?:number;
};

export class MarkCode extends React.Component<MarkCodeProps> {
    static defaultProps = {
        markSymbol: '%',
        markMapping: {},
        dimUnmarked: false,
        unHighlight: false,
        completions: [],
        completionIndex: 0
    };
    static completions = '$$$COMPLETIONS$$$';
    static caret = '$$$CARET$$$';
    render(){
        const {children, lang, markSymbol, markMapping, dimUnmarked, unHighlight} = this.props;
        // format
        const code = deindent(children)
                    .trim()
                    .replace(MarkCode.completions, () => markSymbol + MarkCode.completions + markSymbol)
                    .replace(MarkCode.caret, () => markSymbol + MarkCode.caret + markSymbol);
        // split on marks
        const markSplit = code.split(new RegExp(`${markSymbol}([^${markSymbol}]+)${markSymbol}`));
        // create code with marks input
        const codeTarget = markSplit.map((snip, index) => {
            if(index % 2){ // mark
                const isReserved = snip === MarkCode.completions || snip === MarkCode.caret;
                const name = isReserved ? snip : markMapping![snip];
                const value = isReserved ? '' : snip;
                return <mark data-name={name}>{value}</mark>;
            }
            return snip;
        });
        //
        const className:string[] = [];
        dimUnmarked && (className.push('dimUnmarked'));
        unHighlight && (className.push('unHighlight'));
        return <Code lang={lang} trim={true} noEscape={codeTarget.length>1} className={className.join(' ')}>{codeTarget}</Code>
    }
    componentDidMount() {
        const root = ReactDOM.findDOMNode(this);
        const completionsAnchor = root.querySelector(`mark[data-name="${MarkCode.completions}"]`);
        if(completionsAnchor && completionsAnchor instanceof HTMLElement){
            const {completions, completionIndex} = this.props;
            completionsAnchor.style.position = 'relative';
            completionsAnchor.style.display = 'inline-block';
            const options = completions!.map((option, index) => `<div style="${index===completionIndex?'background:#737888':''}">${option}</div>`)
            completionsAnchor.innerHTML = `<div style="width:240px; background:#505258; position:absolute; top: -1em; color: #d6d9dc;">${options.join('')}</div>`
        }
    }

}
