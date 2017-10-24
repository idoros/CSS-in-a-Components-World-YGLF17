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
                        - thank you
                            - all
                            - organizers
                            - bruce for bruce
                        - i hope ... think about styling and components in a different light
                        - Stylable docs, stylable.io
                        - repo on github.com/wix/stylable
                        - take a look, give us your input, help bring css and components together
                        - slides at, TBD, tweet
                        - talk to me, @idoros, wix booth during the break
                        `}
                    </SpeakerNotes>
                </section>
            </section>
        );
    }
}