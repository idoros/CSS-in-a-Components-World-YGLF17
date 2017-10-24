import * as React from 'react';
import {  } from '../reveal-react';

import {stylable} from 'wix-react-tools/dist/src/react-component-features/stylable-feature';
import {properties} from 'wix-react-tools/dist/src/react-component-features/properties-feature';

import titleFullCSS from './title-full.st.css';

interface TitleFullProps extends properties.Props {
    children: React.ReactNode;
}

function isReactNode(node:any):node is React.ReactElement<any> {
    return node && !!node.props;
}
type ChildGroup = {[S: string]: React.ReactNode};
function groupChildren(children:React.ReactNode, slotNames: string[]): ChildGroup {
    return React.Children.toArray(children).reduce<ChildGroup>((acc, vnode:React.ReactNode) => {
        const role = isReactNode(vnode) && vnode.props['data-role'];
        if(slotNames.indexOf(role) !== -1) {
            acc[role] = vnode;
        } else {
            (acc.children as any).push(vnode);
        }
        return acc;
    }, {children:[]} as ChildGroup);
}

@stylable(titleFullCSS)
@properties
export default class TitleFull extends React.Component<TitleFullProps> {
    static defaultProps:TitleFullProps = {
        children: '',
    };
    render() {
        // const {children, speakerNotes} = groupChildren(this.props.children, ['speaker-notes']);
        return (
            <div>
                <h1 className="title">
                    {this.props.children}
                </h1>
            </div>                    
        );
    }
}


