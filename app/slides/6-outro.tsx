import * as React from 'react';
import { SpeakerNotes } from '../reveal-react/';

export class Outro extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>Outro</h1>
                    <pre>TODO: Add content</pre>

                    <SpeakerNotes markdown>
                        {`
                            * Resources
                                * Repo
                                * Doc center
                                * Presentation
                                * Social
                        `}
                    </SpeakerNotes>
                </section>
            </section>
        );
    }
}