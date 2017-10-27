import * as React from 'react';
import { SpeakerNotes } from '../reveal-react';
import { FullScreenTitle } from '../layout/';

export class TypedCSS extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <FullScreenTitle title="target state">
                    Stylesheet<br/>Interface
                    <SpeakerNotes markdown>{`
                    - possible solution, introducing an interface
                    - allows describing relations and definitions of inner parts and state
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
                                <li>Type aware wependencies</li>
                            </ul>
                        </li>
                        <li>IDE & Build support</li>
                        <li>Optimization - "ruleset shaking"</li>
                    </ul>

                    <SpeakerNotes markdown> 
                        {`
                        - why the hell not
                        - talk about typed CSS
                        - css superset with syntax describing internals parts, states & their implementation
                        - export them for reuse
                        - static analysis recognizes syntax, provides IDE support
                        - code completions, validations, highlighting
                        - in the build pipeline, identify CSS definitions not used
                        - ruleset shaking, like tree shaking
                        - show you a project...
                        `}
                    </SpeakerNotes>
                </section>

            </section>
        );
    }
}