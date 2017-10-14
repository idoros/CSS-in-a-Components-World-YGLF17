import * as React from 'react';
import { SpeakerNotes } from '../reveal-react';

export class TypedCSS extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>Typed CSS</h1>
                    <pre>
                        Components as Types
                    </pre>
                </section>
                <section>
                    <h3>Typed CSS</h3>
                    <ul>
                        <li>Deep discovery - 
                            <ul>
                                <li>Inner parts - as pseudo-elements</li>
                                <li>States - as pseudo-classes</li>
                                <li>CSS variables</li>

                            </ul>
                        </li>
                        <li>Type checking - code hinting & validations</li>
                        <li>Optimization - ruleset shaking</li>
                    </ul>
                    
                    <SpeakerNotes markdown> 
                        {`
                            * Components as types
                            * Inner structure & states as pseudo-elements & pseudo-classes
                            * Autocomplete & validations
                            * Declaration interface
                        `}
                    </SpeakerNotes>
                </section>
            </section>
        );
    }
}