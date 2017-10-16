import * as React from 'react';
import { SpeakerNotes } from '../reveal-react';

export class IntroducingStylable extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <img src="../assets/stylable-logo-horizontal.svg" alt="Stylable logo"/>
                    <pre>
                        Stylable is a CSS preprocessor for styling components with a typesafe CSS
                    </pre>
                </section>

                <section>
                    <h2>Introducing Stylable</h2>
                    <ul>
                        <li>
                            A Typed CSS Implementation
                        </li>
                        <li>
                            VSCode Extension - Completions & Validations
                        </li>
                        <li>
                            Integration - React, Webpack
                        </li>
                    </ul>

                    <SpeakerNotes markdown> 
                        {`
                            * Typed CSS Implementation 
                                * A result of multiple PoCs
                                * Tries to stick to the spirit of CSS for new features syntax
                            * Tooling 
                                * Hinting - know when you’re trying to access something that’s not there
                                * Validations - keeps you using valid CSS & Stylable syntax
                                * Completions - Interrogate your components, and target specific parts and states easily
                            * Integrations
                                * React
                                * Webpack
                        `}
                    </SpeakerNotes>
                </section>
                
                <section>
                    <pre>State of Stylable</pre>
                    <ul>
                        <li>Alpha</li>
                        <li> Currently Available Features:
                            <ul>
                                <li>Pseudo-Elements & Pseudo-Classes</li>
                                <li>Theming</li>
                                <li>Mixins</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <SpeakerNotes markdown> 
                        {`
                            * Alpha
                            * Features
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

                <section className="center">
                    <h1>Definitely Styled</h1>
                </section>

                <section className="center">
                    <pre>[ ReavelJS DEMO ]</pre>
                </section>
            </section>
        );
    }
}