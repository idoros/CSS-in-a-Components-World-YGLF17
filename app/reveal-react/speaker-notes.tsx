import * as React from 'react';

type SpeakerNotesProps = {
    children:React.ReactNode;
};

export const SpeakerNotes = ({children}:SpeakerNotesProps) => {
    return (
        <aside className="notes">
            {children}
        </aside>
    );
}