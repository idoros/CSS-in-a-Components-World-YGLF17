import * as React from 'react';
import { Markdown } from './markdown';

type SpeakerNotesProps = {
    children:React.ReactNode;
    markdown?:boolean;
};

export const SpeakerNotes = ({children, markdown}:SpeakerNotesProps) => {
    return (
        <aside className="notes">
            { markdown ? <Markdown>{children}</Markdown> : children }
        </aside>
    );
}