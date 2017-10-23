import * as React from 'react';
import { SpeakerNotes, Fragment, MarkCode } from '../reveal-react';
import { markMap } from '../assets/gallery-syntax-data';

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
                    <SpeakerNotes markdown>{`
                        * Typed CSS Implementation 
                            * A result of multiple PoCs
                            * Tries to stick to the spirit of CSS for new features syntax
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Back to The Gallery</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%:loading%%::navBtn% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery% %gallery--loading%">
                        <div class="%gallery__navBtn%">...</div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                        * How does Stylable make our ".gallery" CSS class into a Gallery component?
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define the Gallery Class</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%:loading%%::navBtn% {}`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap}>{`
                    %/* page.st.css */%
                    %.gallery% {}
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                        * CSS compatible syntax (goal)
                        * define a normal gallery CSS class in our page CSS
                        * Stylable use the .st.css extension
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>import & extend</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%:loading%%::navBtn% {}`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap}>{`
                    %/* page.st.css */%
                    :import {
                        -st-from: "./gallery.st.css";
                        -st-default: Gallery;
                    }
                    %.gallery% {
                        -st-extends: Gallery;
                    }
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                        * Import the gallery.st.css containing the gallery component CSS definition
                        * Use Stylable -st-extends to declare that the ".gallery" class is a Gallery component
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Use gallery</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%:loading%%::navBtn% {}`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`
                    %/* page.st.css */%
                    :import {
                        -st-from: "./gallery.st.css";
                        -st-default: Gallery;
                    }
                    %.gallery% {
                        -st-extends: Gallery;
                    }
                    %.gallery%%:loading%%::navBtn% {
                        visibility: hidden;
                    }
                    %.gallery%%::navBtn%%::icon% {
                        color: green;
                    }
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                        * Now it is possible to access the gallery component style API
                        * But, how does gallery.st.css use stylable to define this style API?
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define Gallery</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%:loading%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`
                    %/* gallery.st.css */%
                    .root {}
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                        * ".root" class is reserved for the root element of our component
                        * Lets see how we define the loading state...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define Gallery Loading State</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%:loading%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`
                    %/* gallery.st.css */%
                    .root {
                        -st-states: loading;
                    }
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                        * Stylable accepts the "-st-states" declaration to define custom pseudo-classes
                        * "-st-states" is not limited to the root class
                        * "-st-states" can accept multiple values 
                        * Lets see how we define the navBtn...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define Gallery Loading State</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%::navBtn%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`
                    %/* gallery.st.css */%
                    .root {
                        -st-states: loading;
                    }
                    %.navBtn% {}
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                        * Currently, any CSS class defined withing a a stylable stylesheet is accessible as a pseudo-element 
                        * Lets make the navBtn and IconButton component...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define Gallery Loading State</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%::navBtn%%::icon%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`
                    %/* gallery.st.css */%
                    :import {
                        -st-from: "./icon-button.st.css";
                        -st-default: IconButton;
                    }
                    .root {
                        -st-states: loading;
                    }
                    %.navBtn% {
                        -st-extends: IconButton;
                    }
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                        * Just like we did before with the gallery class
                        * import The IconButton component & extend it on the ".navBtn" CSS class
                    `}</SpeakerNotes>
                </section>
                <section>
                    <ul>
                        <li>.st.css extension</li>
                        <li>CSS compatible syntax</li>
                        <li>.root</li>
                        <li>Build directives & vendor prefixes</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                        * Being compatible with CSS 
                        * .root class is reserved for the root element of the component
                        * CSS superset
                            * importe other CSS or JS
                            * define custom pseudo-states and pseudo-elements
                    `}</SpeakerNotes>
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
                    
                    <SpeakerNotes markdown>{`
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
                    `}</SpeakerNotes>
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
                    <SpeakerNotes markdown>{`
                    `}</SpeakerNotes>
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