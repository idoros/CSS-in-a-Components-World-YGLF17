import * as React from 'react';

type CodeProps = {
    children:React.ReactNode;
    lang?:string;
    noEscape?:boolean;
    trim?:boolean;
};
const Code = ({children, lang, noEscape, trim}:CodeProps) => {
    return (
        <pre className={lang||''}>
            <code data-trim={trim} data-noescape={noEscape}>{children}</code>
        </pre>
    );
}

type fragmentFade = 'in'|'out'|'semi-out'|'out-hide'|'in-hidden';
type fragmentAnimation = 'grow'|'shrink'|'zoom-in'|'up'|'down'|'left'|'right';
type fragmentHighlight = 'highlight-red'|'highlight-current-red'|'highlight-green'|'highlight-current-green'|'highlight-blue'|'highlight-current-blue';
type FragmentProps = {
    children:React.ReactNode;
    index?:number;
    tagName?:string;
    fade?:fragmentFade;
    animation?:fragmentAnimation|fragmentAnimation[];
    highlight?:fragmentHighlight;
};
const classMap = {
    in:'fade-in',
    out:'fade-out',
    'semi-out':'semi-fade-out',
    'out-hide':'fade-out fade-out-hide',
    'in-hidden':'fade-in fade-in-hidden',
    up:'fade-up',
    down:'fade-down',
    left:'fade-left',
    right:'fade-right'
};
const Fragment = ({tagName, children, index, fade, animation, highlight}:FragmentProps) => {
    const ElType = tagName || 'div';
    const classNames = ['fragment']
    fade && classNames.push(fade);
    animation && classNames.concat(animation);
    highlight && classNames.push(highlight);
    return React.createElement(ElType, {
        'data-fragment-index': index,
        className: classNames.map(name => classMap[name] || name).join(' ')
    }, children);
}



export class ComponentsInCSS extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>Components<br/>+<br/>CSS</h1>
                </section>
                <section>
                    <h3>Many Ways to Style a Component</h3>
                    {/* <Fragment fade="in" index={index++}>1111</Fragment>
                    <Fragment fade="in" index={index++}>222</Fragment> */}
                    <Fragment fade="in" index={index++}>
                        <Fragment fade="out-hide" index={index}>
                            xxxx
                        </Fragment>
                    </Fragment>
                    <Fragment fade="in" index={index++}>
                        <Fragment fade="out-hide" index={index}>
                            yyyy
                        </Fragment>
                    </Fragment>
                    {this.generateMatchingExamples(elementTargetingExamples, index)}
                </section>
            </section>
        );
    }
    private generateMatchingExamples(examples:CodeExample[], index:number=0) {
        return examples.map(({title, timeline, snippets}) => [
            title ? <Fragment fade="in" index={index}><div>{title}</div></Fragment> : null,
            timeline.map(snippetIds => {
                return <Fragment fade="out-hide" index={index+1}>
                <Fragment fade="in" index={index++}>
                    { 
                        snippetIds.map(snipId => {
                            let {lang, code} = snippets[snipId];
                            const markSplit = code.split(/%(.+)%/);
                            const codeTarget = markSplit.map((snip, index) => index % 2 ? <mark>{snip}</mark> : snip);
                            return <Code lang={lang} trim={true} noEscape={codeTarget.length>1}>{codeTarget}</Code>
                        })
                    }
                    </Fragment>
                </Fragment>;
            })
        ]);
    }
}

type CodeExample = {
    title?:string;
    timeline:string[][];
    snippets:{[id:string]:{lang:string, code:string}};
};

const elementTargetingExamples = [
    {
        title: 'CSS classes',
        timeline:[
            ['noSelector', 'html'],
            ['iconSelector', 'iconSelectorMatch'],
            ['iconSelector', 'iconSelectorMatchToMuch'],
            ['iconOfNavBtnSelector', 'iconOfNavBtnSelectorMatch']
        ],
        snippets:{
            noSelector:{
                lang:'nohighlight',
                code:`Icon of navigation button of our gallery?`
            },
            iconSelector:{
                lang:'css',
                code:`.icon`
            },
            iconOfNavBtnSelector:{
                lang:'css',
                code:`.navBtn .icon`
            },
            html:{
                lang:'html',
                code:`
                <div class="myGallery">
                    <div class="navBtn">
                        <div class="icon"></div>
                    </div>
                </div>
                `
            },
            iconSelectorMatch:{
                lang:'html',
                code:`
                <div class="myGallery">
                    <div class="navBtn">
                        <div class="%icon%"></div>
                    </div>
                </div>
                `
            },
            iconSelectorMatchToMuch:{
                lang:'html',
                code:`
                <div class="myGallery">
                    <div class="navBtn">
                        <div class="%icon%"></div>
                    </div>
                    <div class="%icon%"></div>
                </div>
                `
            },
            iconOfNavBtnSelectorMatch:{
                lang:'html',
                code:`
                <div class="myGallery">
                    <div class="navBtn">
                        <div class="%icon%"></div>
                    </div>
                    <div class="icon"></div>
                </div>
                `
            },
            iconOfNavBtnSelectorMatchManyGalleries:{
                lang:'html',
                code:`
                <div class="myGallery">
                    <div class="navBtn">
                        <div class="%icon%"></div>
                    </div>
                    <div class="icon"></div>
                </div>
                `
            }
        }
    },
    // {
    //     title: 'CSS classes',
    //     css:`.myGallery .navBtn .icon`,
    //     html:`
    //     <div class="myGallery">
    //         <div class="btn">
    //             <div class="icon"></div>
    //         </div>
    //     </div>
    //     `
    // },
    // {
    //     title: 'CSS attribute selector',
    //     css:`.myGallery  [aria-label=”nav”] .icon`,
    //     html:`
    //     <div class="myGallery">
    //         <div aria-label="nav">
    //             <div class="icon"></div>
    //         </div>
    //     </div>
    //     `
    // },
    // {
    //     title: 'BEM style',
    //     css:`.myGallery.gallery--root .gallery--navBtn .btn--icon`,
    //     html:`
    //     <div class="myGallery gallery--root">
    //         <div class="gallery--navBtn">
    //             <div class="btn--icon"></div>
    //         </div>
    //     </div>
    //     `
    // }
];


//<div style={{display:'flex'}}>
//                        <div style={{flex:3}}>
//                            <Fragment fade="in" index={0}>
//                                <Fragment fade="out-shrink" index={1}>I'll fade in, then out</Fragment>
//                            </Fragment>
//                            <Fragment fade="in" index={1}>
//                                <Fragment fade="out-shrink" index={2}>fsdfsfsft</Fragment>
//                            </Fragment>
//                            <Fragment fade="in" index={2}>
//                                <Fragment fade="out-hide" index={3}><Code lang="html">{HTML_1}</Code></Fragment>
//                            </Fragment>
//                            <Fragment fade="in" index={3}>
//                                <Fragment fade="out-hide" index={4}><Code lang="html">{HTML_1}</Code></Fragment>
//                            </Fragment>
//                            {/* <Fragment index={0}>zzzzz</Fragment>
//                            <Fragment index={2}>yyy</Fragment>
//                            <Fragment index={4}>xxxx</Fragment> */}
//                        </div>
//                        <div style={{flex:2}}>
//                            {/* <Fragment index={1}>
//                                <Code lang="html">{HTML_1}</Code>
//                            </Fragment>
//                            <Fragment index={3}>
//                                <Code lang="html">{HTML_1}</Code>
//                            </Fragment> */}
//                        </div>
//                    </div>