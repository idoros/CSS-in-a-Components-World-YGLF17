import * as React from 'react';
import { SpeakerNotes } from '../reveal-react';
import * as deindent from 'deindent';

import {stylable, properties} from 'wix-react-tools';

import titleFullCSS from './title-full.st.css';

interface TitleFullProps extends properties.Props {
    children: React.ReactNode;
    title?: string;
}

function isReactNode(node:any):node is React.ReactElement<any> {
    return node && !!node.type;
}

@stylable(titleFullCSS)
@properties
export default class TitleFull extends React.Component<TitleFullProps> {
    render() {
        const {children, title} = this.props;

        let content:React.ReactNode[] = [];
        let speakerNotes:React.ReactNode = null;
        React.Children.forEach(children, child => {
            if(isReactNode(child)){
                if(child.type === SpeakerNotes) { 
                    speakerNotes = child; 
                    return;
                }
            }
            content.push(child);
        });
        if(title){
            if(!isReactNode(speakerNotes) || !speakerNotes.props){
                speakerNotes = <SpeakerNotes>{`# ${title}`}</SpeakerNotes>;
            } else {
                let { markdown, children:speakerNotesContent} = speakerNotes.props;
                const DL = `
`;
                speakerNotesContent = markdown ? `# ${title}`+ DL + DL + (deindent(speakerNotesContent) || '') : [<h1>{title}</h1>, speakerNotesContent];
                speakerNotes = React.cloneElement(speakerNotes, {children:speakerNotesContent})
            }
        }
        // const roleMap = childByType(this.props.children);
        return (
            <section className="center">
                <h1 className="title">{content}</h1>
                {speakerNotes}
            </section>                    
        );
    }
}


