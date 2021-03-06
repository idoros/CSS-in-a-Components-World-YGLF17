import * as React from 'react';
import { Fragment, MarkCode, SpeakerNotes } from '../reveal-react';
import { FullScreenTitle } from '../layout/';

import { markMap } from '../assets/gallery-syntax-data';
import stars = require('../assets/images/stars.jpg');

export class ComponentsInCSS extends React.Component {
    render() {
        return (
            <section>
                <section>
                    <h3>Shopping List</h3>
                    <ul>
                        <li>Modular</li>
                        <li>Dynamic</li>
                        <li>Performant</li>
                        <li>CSS capabilities</li>
                        <li>Tooling</li>
                        <li>Customization</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                    *DRINK*  

                    What do we believe we need to write CSS for components:
                    - break down styles into manageable modules, reflecting project structure
                    - modify style dynamically 
                    - fast and performant, with minimal runtime, and caching
                    - capabilities CSS - selectors, media queries, more 
                    - the same tooling that the rich ecosystem offers
                    - style components externally, separate functionality and style, support multiple 'looks',
                    - increasing re-usability
                    `}</SpeakerNotes> 
                </section>
                <FullScreenTitle title="CSS💘Components">
                    CSS<br/>💘<br/>Components
                    <SpeakerNotes markdown>{`
                    - styling components using CSS
                    - what would it take
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <FullScreenTitle data-background-image={stars}>
                    Many Ways to Style HTML
                    <SpeakerNotes markdown>{`
                    - many ways to style an HTML structure using CSS
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <FullScreenTitle title="target element">
                    Target Element
                    <SpeakerNotes markdown>{`
                    - targeting a specific element
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <section>
                    <h3>Target Element</h3>
                    <MarkCode lang="html">{`
                    <div class="gallery">
                        <div class="navBtn">
                            <div class="icon"></div> /* style the icon */
                        </div>
                    </div>
                    `}</MarkCode>
                    {/* <pre>Style the icon in the navigation button of a gallery</pre> */}
                    {/* <GalleryExample style={{width:'300px', height:'300px', margin:'0 auto'}} /> */}
                    <SpeakerNotes markdown>{`
                    - three nested divs
                    - marked by a different CSS class, gallery, navBtn and icon
                    - Potential HTML markup for a Gallery
                    - try styling that inner icon
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Target icon</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="gallery">
                        <div class="navBtn">
                            <div class="%icon%"></div>
                        </div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - icon CSS class
                    - *pause*
                    - just not that simple
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Conflict!</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="gallery">
                        <div class="navBtn">
                            <div class="%icon%"></div>
                        </div>
                        <div class="%icon%"></div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - not unique to our navBtn
                    - *pause*
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Be Specific!</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.navBtn% %.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="gallery">
                        <div class="%navBtn%">
                            <div class="%icon%"></div>
                        </div>
                        <div class="icon"></div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - making our selector more specific, adding navBtn to parent
                    - *pause*
                    - just not that simple
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Conflict!</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.navBtn% %.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="gallery">
                        <div class="%navBtn%">
                            <div class="%icon%"></div>
                        </div>
                    </div>
                    <div class="pagination">
                        <div class="%navBtn%">
                            <div class="%icon%"></div>
                        </div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - not specific enough
                    - *pause*
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>More Specific</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %.navBtn% %.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%">
                        <div class="%navBtn%">
                            <div class="%icon%"></div>
                        </div>
                    </div>
                    <div class="pagination">
                        <div class="navBtn">
                            <div class="icon"></div>
                        </div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - make our selector more specific
                    - *pause*
                    - just not that simple
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Semantic elements</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %nav% %a% %.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%">
                        <%nav%>
                            <%a%>
                                <span class="%icon%"></span>
                            </%a%>
                        </%nav%>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - Maybe our structure is built with semantic elements, such as
                    - *pause*
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>BEM - Namespacing Convention</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %.gallery__navBtn% %.gallery__icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%">
                        <div class="%gallery__navBtn%">
                            <div class="%gallery__icon%"></div>
                        </div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - with a BEM conventions
                    - Block, Element, Modifier
                    - convention - create reusable components, known as blocks
                    - gallery block with 2 inner elements, navBtn and icon
                    - Icon is contained inside the navBtn
                    - we talked about this as flat HTML structure
                    - now let’s talk about this structure with components
                    - decide that the icon is part of the button block
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>BEM - For Components</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %.gallery__navBtn% %.button__icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%">
                        <div class="button %gallery__navBtn%">
                            <div class="%button__icon%"></div>
                        </div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - our navBtn is a block and a component itself
                    - icon is part of it
                    - not just contained by it
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>What is Relevant?</h3>
                    <MarkCode lang="css" markMapping={markMap} dimUnmarked unHighlight>{`%.gallery% .gallery__%navBtn% .button__%icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%">
                        <div class="button %gallery__navBtn%">
                            <div class="%button__icon%"></div>
                        </div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - parts of the selector contains implementation details
                    - only, care about the: gallery - navBtn - icon
                    `}</SpeakerNotes>
                </section>

                <FullScreenTitle title="target state">
                    Target State
                    <SpeakerNotes markdown>{`
                    - put the elements aside
                    - talk about targeting state
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <section>
                    <h3>Target State</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %.gallery__navBtn% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%">
                        <div class="%gallery__navBtn%">...</div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - focus only on the gallery and the navBtn
                    - hide our navBtn while our gallery is loading
                    - How can such a state be expressed
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>CSS Class?</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery%%.loading% %.gallery__navBtn% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery% %loading%">
                        <div class="%gallery__navBtn%">...</div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - a CSS class like loading
                    - *pause*
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Data Attribute?</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery%%[data-loading]% %.gallery__navBtn% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%" %data-loading%>
                        <div class="%gallery__navBtn%">...</div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - perhaps using a data-attribute
                    - *pause*
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>BEM Modifier?</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery%%.gallery--loading% %.gallery__navBtn% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery% %gallery--loading%">
                        <div class="%gallery__navBtn%">...</div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - maybe using a BEM convention
                    - *pause*
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>What is Relevant?</h3>
                    <MarkCode lang="css" markMapping={markMap} dimUnmarked unHighlight>{`%.gallery%.gallery--%loading% .gallery__%navBtn% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery% %gallery--loading%">
                        <div class="%gallery__navBtn%">...</div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - selector has implementation details
                    - only care: when gallery is loading, navBtn inner element is targeted
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Hide internals</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %loading% %navBtn% {}`}</MarkCode>
                    <Fragment>
                        <h4 style={{margin:'3em 0 2em'}}>Native Syntax</h4>
                        <div style={{display:'flex'}}>
                            <Fragment style={{flex:1, textAlign:'center'}}>
                                Pseudo-elements
                                <MarkCode lang="css" markMapping={markMap}>{`%::before%   %::selection%`}</MarkCode>
                            </Fragment>
                            <Fragment style={{flex:1, textAlign:'center'}}>
                                Pseudo-classes
                                <MarkCode lang="css" markMapping={markMap}>{`%:hover%     %:focus%`}</MarkCode>
                            </Fragment>
                        </div>
                    </Fragment>
                    <SpeakerNotes markdown>{`
                    - Removing the implementation
                    - leaves us with missing information
                    - what is the relationship between these parts
                        - class gallery is a CSS class representing a gallery component
                        - loading - a state of the gallery component
                        - navBtn should represent an internal part
                    - *CLICK*
                    - what syntax can we borrow from native css
                    - *click*
                    - pseudo-elements
                    - pseudo-classes
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Abstraction</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery%%:loading%%::navBtn% { visibility:hidden; }`}</MarkCode>
                    {/* <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery% %gallery--loading%">
                        <div class="%gallery__navBtn%">...</div>
                    </div>
                    `}</MarkCode> */}
                    <SpeakerNotes markdown>{`
                    - by adding pseudo-selectors
                    - reconcile the missing information about relationships
                    - left with the resulting selector
                    - big question - what gives the gallery class the traits of a gallery component
                    - this doesn't work. This is not CSS.
                    - How can we make this work?
                    `}</SpeakerNotes>
                </section>

            </section>
        );
    }
}
