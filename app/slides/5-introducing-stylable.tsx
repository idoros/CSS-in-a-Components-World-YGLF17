import * as React from 'react';
import { SpeakerNotes, Fragment, MarkCode } from '../reveal-react';
import { markMap } from '../assets/gallery-syntax-data';

const markMapWithGalleryRoot = {...markMap, '.root':'gallery'};

export class IntroducingStylable extends React.Component {
    render() {
        let index = 0;
        return (
            <section xdata-background-color="white" x-style={{background:'white', color:'black'}}>
                <section className="center" >
                    <img style={{background:'#FFFFFF'}} src="../assets/stylable-logo-horizontal.svg" alt="Stylable logo"/>
                    <Fragment>
                            Stylable is a CSS preprocessor for styling components with typed CSS
                    </Fragment>
                    <SpeakerNotes markdown>{`
                    - Stylable is a CSS preprocessor for styling components with typed CSS
                    - Typed CSS Implementation 
                    - A result of multiple PoCs, revolving around styling components
                    - Sticks to the spirit of CSS
                    - and we've discussed features we've added/extended, with *members* of the CSS working group
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
                    - in our case: page.st.css               
                    - aims at CSS compatible syntax - working with any css tool
                    - define a normal CSS class for our gallery
                    - make the ".gallery" CSS class a gallery component
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
                    - Stylable Import rule 
                    - import gallery stylesheet: gallery.st.css
                    - -st-extends directive - make gallery CSS class a gallery component
                    - access to gallery component style API
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Styling the Gallery</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%:loading%%::navBtn% {}`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap}>{`
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
                    - we can express the selector we talk about
                        - hide navBtn while gallery is loading
                        - color the inner icon of the navigation button of our gallery 
                    - gallery.st.css ?
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define the Gallery Internals</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%:loading%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMapWithGalleryRoot}>{`
                    %/* gallery.st.css */%
                    %.root% {}
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - ".root" class is reserved, root element
                    - lets see how we define the loading state...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define Gallery Loading State</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%:loading%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMapWithGalleryRoot}>{`
                    %/* gallery.st.css */%
                    %.root% {
                        -st-states: %loading%, empty;
                    }
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - "-st-states" declaration, define custom pseudo-classes
                    - can accept multiple values - e.g. "loading, empty"
                    - this does not set the state value, only exposes possible states to design
                    - not limited to the root class
                    - how we define the navBtn...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define the Gallery Inner navBtn</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%::navBtn%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMapWithGalleryRoot}>{`
                    %/* gallery.st.css */%
                    %.root% {
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
                    <MarkCode lang="css" markMapping={markMapWithGalleryRoot}>{`
                    %/* gallery.st.css */%
                    :import {
                        -st-from: "./icon-button.st.css";
                        -st-default: IconButton;
                    }
                    %.root% {
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
                    - st-css suffix
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
                    - uses static analysis => code completion, highlighting, validation => developer experience
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