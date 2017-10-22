import * as React from 'react';

type fragmentFade = 'in'|'out'|'semi-out'|'out-hide'|'in-hidden';
type fragmentAnimation = 'grow'|'shrink'|'zoom-in'|'up'|'down'|'left'|'right';
type fragmentHighlight = 'highlight-red'|'highlight-current-red'|'highlight-green'|'highlight-current-green'|'highlight-blue'|'highlight-current-blue';
type FragmentProps = {
    children:React.ReactNode;
    index?:number;
    tagName?:string;
    style?:React.CSSProperties;
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
export const Fragment = ({tagName, style, children, index, fade, animation, highlight}:FragmentProps) => {
    const ElType = tagName || 'div';
    const classNames = ['fragment']
    fade && classNames.push(fade);
    animation && classNames.concat(animation);
    highlight && classNames.push(highlight);
    return React.createElement(ElType, {
        'data-fragment-index': index,
        className: classNames.map(name => classMap[name] || name).join(' '),
        style
    }, children);
}