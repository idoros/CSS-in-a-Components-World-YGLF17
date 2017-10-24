import * as React from 'react';
import { SpeakerNotes } from '../reveal-react';

export class TypedCSS extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>Stylesheets<br/>Interfaces</h1>

                    <SpeakerNotes markdown> 
                        {`
                        - possible solution, introducing an interface
                        - allows describing relations and definitions of inner parts and state
                        - starting to sound like a type system
                        `}
                    </SpeakerNotes>
                </section>
                <section>
                    <h3>Typed CSS</h3>
                    <ul>
                        <li>CSS Superset
                            <ul>
                                <li>Inner Parts as Pseudo-Elements</li>
                                <li>Create Custom Pseudo-Classes</li>
                                <li>Type Aware Dependencies</li>
                            </ul>
                        </li>
                        <li>IDE & Build Support</li>
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