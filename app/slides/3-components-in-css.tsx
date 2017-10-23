import * as React from 'react';
import { Fragment, MarkCode, SpeakerNotes } from '../reveal-react';
// import GalleryExample from '../assets/gallery';
import { markMap } from '../assets/gallery-syntax-data';

export class ComponentsInCSS extends React.Component {
    render() {
        return (
            <section>
                <section className="center">
                    <h1>CSS<br/>💘<br/>Components</h1>
                    <SpeakerNotes markdown>{`
                        - styling components using CSS
                        - what would it take
                    `}</SpeakerNotes> 
                </section>
                <section>
                    <h3>Styling Components</h3>
                    <ul>
                        <li>Modular</li>
                        <li>Dynamic</li>
                        <li>Performant</li>
                        <li>CSS capabilities</li>
                        <li>Tooling</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                        # What do we believe we need to write CSS for components

                        - break down styles into manageable modules, reflecting our project structure
                        - modify style dynamically 
                        - fast and performant, with minimal runtime, and caching
                        - capabilities CSS selectors, media queries and more 
                        - we want tooling
                    `}</SpeakerNotes> 
                </section>
                <section className="center">
                    <h1>Many Ways to Style HTML</h1>
                    <SpeakerNotes markdown>{`
                        # many ways to style an HTML structure using CSS
                    `}</SpeakerNotes> 
                </section>
                <section className="center">
                    <h1>Target Element</h1>
                    <SpeakerNotes markdown>{`
                    - targeting a specific element
                    `}</SpeakerNotes> 
                </section>
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
                    <h3>Conflict</h3>
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
                    - making our selector more specific
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
                    - Maybe our structure is built with semantic elements
                    - *pause*
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>BEM - namespacing convention</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %.gallery__navBtn% %.gallery__icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%">
                        <div class="%gallery__navBtn%">
                            <div class="%gallery__icon%"></div>
                        </div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                        BEM - Block, Element, Modifiers (component, inner part, state)

                        - with a BEM conventions
                        - Block, Element, Modifier
                        - convention 
                        - create reusable components, known as blocks
                        - gallery block with 2 inner elements, navBtn and icon
                        - Icon is contained inside the navBtn
                        - we talked about this as flat HTML structure
                        - now let’s talk about components
                        - decide that the icon is part of the button block
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>BEM - for components</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %.gallery__navBtn% %.button__icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%">
                        <div class="button %gallery__navBtn%">
                            <div class="%button__icon%"></div>
                        </div>
                    </div>
                    `}</MarkCode>
                    <SpeakerNotes markdown>{`
                    - our navBtn is a block itself
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

                <section className="center">
                    <h1>Target State</h1>
                    <SpeakerNotes markdown>{`
                    - put the elements aside
                    - talk about targeting state
                    `}</SpeakerNotes> 
                </section>
                <section>
                    <h3>Target State</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %.gallery__navBtn% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap} unHighlight>{`
                    <div class="%gallery%">
                        <div class="%gallery__navBtn%">...</div>
                    </div>
                    `}</MarkCode>
                    <pre>Hide navBtn while the gallery is loading</pre>
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
                        - only care: gallery is in its loading state, the navBtn inner element is targeted
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Hide internals</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery% %loading% %navBtn% {}`}</MarkCode>
                    <Fragment>
                        <h4 style={{marginTop:'3em'}}>Native Syntax</h4>
                        <div style={{display:'flex'}}>
                            <Fragment style={{flex:1}}>
                                Pseudo-elements
                                <MarkCode lang="css" markMapping={markMap}>{`%::before%   %::selection%`}</MarkCode>
                            </Fragment>
                            <Fragment style={{flex:1}}>
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
                        # Abstraction
                        
                        - adding pseudo-selectors syntax
                        - reconcile the missing information about relationships
                        - big question -  what gives the gallery class the traits of a gallery component
                        - This doesn't work. This is not CSS.
                        - How can we make this work?
                    `}</SpeakerNotes>
                </section>

            </section>
        );
    }
}
