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
                    <Fragment>
                        <pre>
                            Stylable is a CSS preprocessor for styling components with typed CSS
                        </pre>
                    </Fragment>
                    <SpeakerNotes markdown>{`
                    - Stylable is a CSS preprocessor for styling components with typed CSS
                    - Typed CSS Implementation 
                    - A result of multiple PoCs, revolving around styling components
                    - Sticks to the spirit, and what we've extended, we've been in dicussion members of the CSS working group
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Back to the Gallery</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%:loading%%::navBtn% {}`}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - How does Stylable make our ".gallery" CSS class into a Gallery component?
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define the Gallery Class</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%:loading::navBtn {}`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap}>{`
                    %/* page.st.css */%
                    %.gallery% {}
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - Stylable uses the .st.css filename suffix                                        
                    - CSS compatible syntax (goal)
                    - define a normal gallery CSS class in our page CSS
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Import & Extend</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%:loading::navBtn {}`}</MarkCode>
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
                    - Import the gallery.st.css, containing gallery component CSS type definition
                    - -st-extends to declare that the ".gallery" class is a Gallery component
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Styling the Gallery</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%:loading%%::navBtn% {}`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`
                    %/* page.st.css */%
                    :import {
                        -st-from: "./gallery.st.css";
                        -st-default: Gallery;
                    }
                    %.gallery% {
                        -st-extends: Gallery;
                        background-color: gold;
                    }
                    %.gallery%%:loading%%::navBtn% {
                        visibility: hidden;
                    }
                    %.gallery%%::navBtn%%::icon% {
                        color: green;
                    }
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - possible to access, gallery component style API
                    - how does gallery.st.css and stylable, define this style API?
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define the Gallery Internals</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%:loading%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`
                    %/* gallery.st.css */%
                    .root {}
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - ".root" class is reserved, root element
                    - lets see how we define the loading state...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define Gallery Loading State</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%:loading%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`
                    %/* gallery.st.css */%
                    .root {
                        -st-states: loading, empty;
                    }
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - "-st-states" declaration, define custom pseudo-classes
                    - can accept multiple values - e.g. "loading, empty"
                    - not limited to the root class
                    - how we define the navBtn...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define the Gallery Inner navBtn</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%::navBtn%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`
                    %/* gallery.st.css */%
                    .root {
                        -st-states: loading;
                    }
                    %.navBtn% {}
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - any CSS class defined within a stylesheet is accessible as a pseudo-element 
                    - lets turn the navBtn to an IconButton component...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define the Gallery Inner navBtn</h3>
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
                    - like with the gallery class before
                    - import the "IconButton" component, extend it on ".navBtn"
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Recap</h3>
                    <ul>
                        <li>.st.css extension</li>
                        <li>CSS compatible syntax</li>
                        <li>.root</li>
                        <li>Build directives & vendor prefixes</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                    So, a quick recap...
                    - compatible with CSS 
                    - ".root" class is reserved
                    - CSS superset
                        - import other CSS or JS
                        - define custom pseudo-states and pseudo-elements
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
                    - evaluating replacing the style-system of ALL Wix websites
                    - not yet a full or final implementation, features all of the concepts today
                    - number of features we didn't have time, already implemented
                        - dependency system
                        - theming mechanism
                        - mixins
                        - ...
                    - VSCode extenstion, code intelligence, completions & validations
                    - integration for Webpack & React                         
                    `}</SpeakerNotes>
                </section>
                
                <section>
                    <h3>Roadmap</h3>
                    <ul>
                        <li>Custom Pseudo-Classes with parameters</li>
                        <li>Formatters - Custom modifiers for CSS declarations</li>
                        <li>Restrictions - CSS declarations whitelist / blacklist</li>
                        <li>Dynamicness! (Soon. ™)</li>
                        <li>Generics</li>
                    </ul>
                    <pre>Some of those are more for ... then end users</pre>
                    <SpeakerNotes markdown>{`
                    - what's ahead?
                    - Dynamicness - want it, know how, currently working on it. To be available soon
                    - Custom pseudo-classes with parameters
                    - custom modifiers for CSS declaration values
                    - specific rule whitelist / blacklist
                    - generics
                    - more integrations
                    - one last thing... *click*
                    `}</SpeakerNotes>
                </section>

                <section className="center">
                    <h1>Definitely Styled</h1>
                    <SpeakerNotes markdown>{`
                    - those not familiar with TypeScript, Typescript is a typed superset of Javascript
                    - compiles to plain Javascript
                    - provides static analysis
                    - Typescript community maintains  “DefinitelyTyped”
                    - type interfaces for many of the plain Javascript projects
                    - Definitely Styled, similar opportunity, better styling tools and capabilities, existing component libraries
                    `}</SpeakerNotes>
                </section>

                <section className="center">
                    <pre>[ ReavelJS DEMO ]</pre>
                </section>

            </section>
        );
    }
}