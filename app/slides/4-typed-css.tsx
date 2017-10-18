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
                            * Components as types - Gallery example
                            * Styles as interfaces
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
                            * CSS Superset
                                * Inner Parts as Pseudo-Classes 
                                * Define custom Pseudo-Classes
                                * Type Aware Dependencies
                            * Type Checking - code completions, highlighting & validations
                            * Optimizations - Ruleset shaking, based on imports, what's not used isn't bundled
                        `}
                    </SpeakerNotes>
                </section>

            </section>
        );
    }
}