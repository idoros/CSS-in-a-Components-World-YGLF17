import * as React from 'react';
import { SpeakerNotes } from '../reveal-react';
import { FullScreenTitle } from '../layout/';
import console = require('../assets/images/console.jpg');


export class TypedCSS extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <FullScreenTitle data-background-image={console} titleStyle={{'text-shadow': '8px 2px 9px rgba(0, 0, 0, 0.8)'}}>
                    Stylesheet<br/>Interface
                    <SpeakerNotes markdown>{`
                    - possible solution, introducing an interface
                    - such an interface, would enable us to describe the relations and definitions of inner parts and state
                    - starting to sound like a type system
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <section>
                    <h3>Typed CSS</h3>
                    <ul>
                        <li>CSS Superset
                            <ul>
                                <li>Inner parts as Pseudo-Elements</li>
                                <li>Create custom Pseudo-Classes</li>
                                <li>Type aware dependencies</li>
                            </ul>
                        </li>
                        <li>IDE & Build support</li>
                        <li>Optimization - "ruleset shaking"</li>
                    </ul>

                    <SpeakerNotes markdown> 
                        {`
                        - why the hell not
                        - talk about typed CSS
                        - css superset with syntax describing internals parts & states with their implementation
                        - export them for reuse
                        - static analysis recognizes syntax, provides IDE & build support
                        - code completions, validations, highlighting
                        - in the build pipeline, identify CSS definitions not used
                        - ruleset shaking, like tree shaking, but for CSS
                        - show you a project...
                        `}
                    </SpeakerNotes>
                </section>

            </section>
        );
    }
}