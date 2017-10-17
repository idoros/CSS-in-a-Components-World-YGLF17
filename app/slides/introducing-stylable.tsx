import * as React from 'react';
import { SpeakerNotes, Fragment } from '../reveal-react';

export class IntroducingStylable extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <img src="../assets/stylable-logo-horizontal.svg" alt="Stylable logo"/>
                    <pre>
                        Stylable is a CSS preprocessor for styling components with typed CSS
                    </pre>
                    <Fragment>
                        <h4>
                            A Typed CSS Implementation
                        </h4>
                    </Fragment>
                    
                    <SpeakerNotes markdown> 
                        {`
                            * Typed CSS Implementation 
                                * A result of multiple PoCs
                                * Tries to stick to the spirit of CSS for new features syntax
                            
                        `}
                    </SpeakerNotes>
                </section>
                
                <section>
                    <h3>State of Stylable</h3>
                        <h4>Currently Available Features:</h4>
                        <ul>
                            <li>Pseudo-Elements & Pseudo-Classes</li>
                            <li>Theming</li>
                            <li>Mixins</li>
                            <li>
                                VSCode Extension - completions & validations
                            </li>
                            <li>
                                Integration - React, Webpack
                            </li>
                        </ul>
                    
                    <SpeakerNotes markdown> 
                        {`
                            * Alpha
                            * Features
                            * Tooling 
                                * Hinting - know when you’re trying to access something that’s not there
                                * Validations - keeps you using valid CSS & Stylable syntax
                                * Completions - Interrogate your components, and target specific parts and states easily
                            * Integrations
                                * React
                                * Webpack
                            * Conflicts with native: // Add this???
                                * Override native syntax
                                * chained pseudo-elements (show 1 spec restriction of depth - ignore it because we are abstracting and removing in build-time)
                                * Future spec diff                            
                        `}
                    </SpeakerNotes>
                </section>
                
                <section>
                    <pre>Roadmap</pre>
                    <ul>
                        <li>Dynamicness! (Soon. ™)</li>
                        <li>Custom Pseudo-Classes with parameters</li>
                        <li>Formatters - Custom modifiers for CSS declarations</li>
                        <li>Restrictions - CSS declarations whitelist / blacklist</li>
                        <li>Generics</li>
                    </ul>
                    
                    <SpeakerNotes markdown> 
                        {`
                        `}
                    </SpeakerNotes>
                </section>

            </section>
        );
    }
}