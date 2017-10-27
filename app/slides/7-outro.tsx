import * as React from 'react';
import { SpeakerNotes } from '../reveal-react/';

export class Outro extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section>
                    <h3>Thank You For Listening</h3>
                    <ul>
                        <li>Stylable Docs - Stylable.io</li>
                        <li>github.com/wix/stylable</li>
                        <li>Slides @ ...</li>
                        <li>@idoros</li>
                    </ul>

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
                        - slides are available at ...
                        - I'll be sure to tweet the URL as well
                        - talk to me, @idoros on twitter & will be at the wix booth during the break
                        `}
                    </SpeakerNotes>
                </section>
            </section>
        );
    }
}