import * as React from 'react';
import { SpeakerNotes, Fragment, MarkCode } from '../reveal-react';

export class IntroducingStylable extends React.Component {
    render() {
        let index = 0;
        return (
            <section xdata-background-color="white" x-style={{background:'white', color:'black'}}>
                <section className="center" >
                    <img src="../assets/stylable-logo-horizontal.svg" alt="Stylable logo"/>
                    <pre>
                        Stylable is a CSS preprocessor for styling components with typed CSS
                    </pre>
                    {/* <Fragment>
                        <h4>
                            A Typed CSS Implementation
                        </h4>
                    </Fragment> */}
                    
                    <SpeakerNotes markdown> 
                        {`
                            * Typed CSS Implementation 
                                * A result of multiple PoCs
                                * Tries to stick to the spirit of CSS for new features syntax
                            
                        `}
                    </SpeakerNotes>
                </section>
                <section>
                    <MarkCode lang="css">{`.gallery:loading::navBtn {}`}</MarkCode>
                    <MarkCode lang="css">{`
                        /* page.st.css */
                        :import {
                            -st-from: "./gallery.st.css";
                            -st-default: Gallery;
                        }
                        .gallery {
                            -st-extends: Gallery;
                        }
                    `}</MarkCode>
                    <MarkCode lang="css">{`
                        /* gallery.st.css */
                        :import {
                            -st-from: "./icon-button.st.css";
                            -st-default: IconButton;
                        }
                        .root {
                            -st-states: loading;
                        }
                        .navBtn {
                            -st-extends: IconButton;
                        }
                    `}</MarkCode>
                </section>
                <section>
                    <ul>
                        <li>.st.css extension</li>
                        <li>CSS compatible syntax</li>
                        <li>.root</li>
                        <li>Build directives & vendor prefixes</li>
                    </ul>
                </section>
                <section>
                    <h3>State of Stylable</h3>
                        <h4>Currently Available Features:</h4>
                        <ul>
                            <li>Pseudo-Elements & Pseudo-Classes</li>
                            <li>Imports</li>
                            <li>Mixins</li>
                            <li>Theming</li>
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
                        <li>Custom Pseudo-Classes with parameters</li>
                        <li>Formatters - Custom modifiers for CSS declarations</li>
                        <li>Restrictions - CSS declarations whitelist / blacklist</li>
                        <li>Dynamicness! (Soon. ™)</li>
                        <li>Generics</li>
                    </ul>
                    <pre>Some of those are more for ... then end users</pre>
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