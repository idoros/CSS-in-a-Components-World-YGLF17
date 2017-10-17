import * as React from 'react';
import { SpeakerNotes } from '../reveal-react';

export class TypedCSS extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>Stylesheets as Interfaces</h1>

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
                                <li>Classes as Pseudo-Elements</li>
                                <li>Define custom Pseudo-Classes</li>
                            </ul>
                        </li>
                        <li>Type Aware Dependencies</li>
                        <li>IDE & Build - code completions, highlighting & validations</li>
                        <li>Optimization - ruleset shaking</li>
                    </ul>

                    <SpeakerNotes markdown> 
                        {`
                            * CSS Superset
                                * Inner Parts as Pseudo-Classes 
                                * Define custom Pseudo-Classes
                            * Type Aware Dependencies - typed imports, exports
                            * Type Checking - code hinting, validations
                            * Optimizations - Ruleset shaking, based on imports, what's not used isn't bundled

                            * Declaration interface // Whats this?
                        `}
                    </SpeakerNotes>
                </section>
            </section>
        );
    }
}