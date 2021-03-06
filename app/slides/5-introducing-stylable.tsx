import * as React from 'react';
import { SpeakerNotes, Fragment, MarkCode } from '../reveal-react';
import { FullScreenTitle } from '../layout/';
import { markMap } from '../assets/gallery-syntax-data';
import stylableLogo = require('../assets/stylable-logo-horizontal.svg');
import frames = require('../assets/images/frames.jpg');

const markMapWithGalleryRoot = {...markMap, '.root':'gallery'};

export class IntroducingStylable extends React.Component {
    render() {
        let index = 0;
        return (
            <section>

                <section className="center" >
                    <img style={{background:'#FFFFFF', width: '70%', padding: '30px'}} src={stylableLogo} alt="Stylable logo"/>
                    <SpeakerNotes markdown>{`
                    - Typed CSS Implementation 
                    `}</SpeakerNotes>
                </section>
                <section className="center" >
                    <h2>CSS Preprocessor <span style={{color: 'rgb(163, 150, 253)'}}>for</span> Styling Components <span style={{color: 'rgb(163, 150, 253)'}}>with</span> Typed CSS</h2>
                    <SpeakerNotes markdown>{`
                    - Stylable is a CSS preprocessor for styling components with typed CSS
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
                    %page.st.css%
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
                    %page.st.css%
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
                    %page.st.css%
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
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - we can express the selector we talk about
                        - hide navBtn while gallery is loading
                        - and...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Styling the Gallery</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%:loading%%::navBtn% {}`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMap}>{`
                    %page.st.css%
                    :import {
                        -st-from: "./gallery.st.css";
                        -st-default: Gallery;
                    }
                    %.gallery% {
                        -st-extends: Gallery;
                        background-color: gold;
                    }
                    %.gallery%%::navBtn%%::icon% {
                        color: green;
                    }
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - color the inner icon of the navigation button of our gallery 
                    - gallery.st.css ?
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define the Gallery Internals</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%:loading%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMapWithGalleryRoot}>{`
                    %gallery.st.css%
                    %.root% {}
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - ".root" class is reserved, root element
                    - lets see how we define the gallery's custom states...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define Gallery Loading State</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%:loading%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMapWithGalleryRoot}>{`
                    %gallery.st.css%
                    %.root% {
                        -st-states: %loading%, empty;
                    }
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - "-st-states" declaration, define custom pseudo-classes
                    - can accept multiple values - e.g. "loading, empty"
                    - this does not set the state value, only exposes possible states to design
                    - how we define the navBtn...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Define the Gallery Inner navBtn</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%Gallery%%::navBtn%`}</MarkCode>
                    <MarkCode lang="css" markMapping={markMapWithGalleryRoot}>{`
                    %gallery.st.css%
                    %.root% {
                        -st-states: %loading%, empty;
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
                    %gallery.st.css%
                    :import {
                        -st-from: "./icon-button.st.css";
                        -st-default: IconButton;
                    }
                    %.root% {
                        -st-states: %loading%, empty;
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
                    <h3>Quick Recap</h3>
                    <ul>
                        <li>.st.css filename suffix</li>
                        <li>CSS compatible syntax</li>
                        <li>:import - import CSS & JS</li>
                        <li>-st-extend - extend another stylesheet </li>
                        <li>Pseudo-Selectors - Internal parts & states as style API </li>
                    </ul>
                    <SpeakerNotes markdown>{`
                    So, a quick recap...
                    - st-css filename suffix
                    - compatible with CSS 
                    - :import - allowing bringing in definitions from other CSS or JS files 
                    - :extend - indicates a CSS class extends another style definition, with all of its capabilities
                    - pseudo-elements/classes - allows exposing inner parts and states of our component
                    - basic understanding of how to use Stylable
                    - what is the state of Stylable *click*
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>State of Stylable</h3>
                    <ul>
                        <li>Pseudo Elements & Classes</li>
                        <li>Imports</li>
                        <li>Mixins</li>
                        <li>Theming</li>
                        <li>
                            VSCode Extension
                        </li>
                        <li>
                            Integration - React, Webpack
                        </li>
                    </ul>
                    
                    <SpeakerNotes markdown>{`
                    - open source, live on github
                    - battle testing on back office apps, evaluating integrating to wix sites
                    - not yet a full or final implementation, features all of the concepts today
                    - number of features we didn't have time, already implemented
                        - dependency system
                        - theming mechanism
                        - variables
                        - mixins
                        - ...
                    - VSCode extenstion, code intelligence, completions & validations
                    - integration for Webpack & React                         
                    `}</SpeakerNotes>
                </section>
                
                <section>
                    <h3>Up Ahead...</h3>
                    <ul>
                        <Fragment>
                            <li>
                                Pseudo-Classes with parameters
                                <MarkCode lang="css" markMapping={markMapWithGalleryRoot}>{`
                                .grid::column:name("email") { 
                                    font-size: 0.8em; 
                                }
                                `}</MarkCode>
                            </li>
                        </Fragment>
                    </ul>
                    <SpeakerNotes markdown>{`
                    - what's ahead?
                    - Some features for developers consuming UI libraries
                    - Others for the developers who make them
                    - Custom pseudo-classes with parameters
                        - previously saw gallery with loading
                        - sometimes, you want to target an element according to state that is not boolean
                        - example
                            - in native CSS we can utilize :nth-child(number), 
                            - allowing us to target a specific element, based on its containment order
                            - we can offer a similar custom capability, allowing us to target our DOM more specifically, not just boolean
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Up Ahead...</h3>
                    <ul>
                        <li>Pseudo-Classes with parameters</li>
                        <li>
                            Formatters
                            <MarkCode lang="css" markMapping={markMapWithGalleryRoot}>{`
                            .item { 
                                color: darker(red); 
                            }
                            `}</MarkCode>
                        </li>
                    </ul>
                    <SpeakerNotes markdown>{`
                    - Formatters
                        - give you the ability to have custom functions for your CSS declarations
                        - example
                            - if we want to change a specific shade of color to a darker one
                        - these feature exist in other solutions as well, and we'd like to be compatible to them
                        - allow you to add your own
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Up Ahead...</h3>
                    <ul>
                        <li>Pseudo-Classes with parameters</li>
                        <li>Formatters</li>
                        <li>
                            Declaration Interfaces
                            <MarkCode lang="css" markMapping={{'position: fixed':'error'}}>{`
                            .gallery::navBtn { 
                                background: salmon;
                                %position: fixed%; 
                            }
                            `}</MarkCode>
                        </li>
                    </ul>
                    <SpeakerNotes markdown>{`
                    - declaration interface - black/white list
                        - going back to the gallery, access to navBtn custom pseudo-element
                        - allow us to style how it looks, restricts changing its positioning
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Up Ahead...</h3>
                    <ul>
                        <li>Pseudo-Classes with parameters</li>
                        <li>Formatters</li>
                        <li>Declaration Interfaces</li>
                        <li>Web Components Compatibility</li>
                        <Fragment tagName="li">Integrations</Fragment>
                        <Fragment tagName="li">Type System</Fragment>
                    </ul>
                    <SpeakerNotes markdown>{`
                    - currently, web components have no way of styling through CSS
                        - several depracated specs 
                        - the latest draft is for ::part, and should it be implemented, we could support it
                    - more integrations, IDEs, build tools & libs
                    - Type System
                        - starting to see our styling system as a type system
                        - and there are many things we can borrow from that domain
                        - ties into this one last thing... *click*
                    `}</SpeakerNotes>
                </section>
                
                <FullScreenTitle title="definitly typed">
                    Definitely Typed
                    <SpeakerNotes markdown>{`
                    - those not familiar with TypeScript, Typescript is a typed superset of Javascript
                    - compiles to plain Javascript
                    - static analysis => completion, validation, highlighting => developer experience
                    - Typescript community maintains  “DefinitelyTyped”
                    - type interfaces for any non-typed project
                    - similar developer experience when using non-typed projects
                    - *click*
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <FullScreenTitle title="definitly styled" data-background-image={frames} titleStyle={{'text-shadow': '8px 2px 9px rgba(0, 0, 0, 0.8)'}}>
                    Definitely Styled
                    <SpeakerNotes markdown>{`
                    - Definitely Styled, similar opportunity, better styling tools and capabilities, existing component libraries
                    `}</SpeakerNotes>
                </FullScreenTitle>

            </section>
        );
    }
}