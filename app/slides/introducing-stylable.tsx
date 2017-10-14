import * as React from 'react';
import { SpeakerNotes } from '../reveal-react';

export class IntroducingStylable extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center" data-notes="testing">
                    <h1>Introducing Stylable</h1>
                    <pre>
                        Stylable is a CSS preprocessor for styling components with a typesafe CSS
                    </pre>
                </section>

                <section>
                    <h3>Introducing Stylable - bundle components’ CSS</h3>
                    <ul>
                        <li>
                        CSS Superset - import, extend, states...
                        </li>
                        <li>
                        Tooling - VSCode extension based on a Stylable Language Server
                        </li>
                        <li>
                        Integration - webpack, react…
                        </li>
                    </ul>

                    <SpeakerNotes markdown> 
                        {`
                            * CSS Superset 
                                * ".myGallery" is a type of Gallery - so structure! (import / extend)
                                * Define custom pseudo-elements / pseudo-classe
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
                    <h3>State of Stylable</h3>
                    <ul>
                        <li>Alpha</li>
                        <li>TODO: Add existing feature list</li>
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
                    <h3>Roadmap</h3>
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
                    <h3>[ ReavelJS DEMO ]</h3>
                </section>
            </section>
        );
    }
}