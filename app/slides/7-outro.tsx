import * as React from 'react';
import { SpeakerNotes } from '../reveal-react/';
import twitterLogo = require('../assets/twitter.svg');

export class Outro extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section>
                    <h3>Thank You for Listening</h3>
                    <ul>
                        <li>Stylable Docs - Stylable.io</li>
                        <li>Stylable repo - github.com/wix/stylable</li>
                        <li>Slides - goo.gl/zaHjyE</li>
                        <li><img className="plain" src={twitterLogo} style={{width:'1em'}}/> @ idoros</li>
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