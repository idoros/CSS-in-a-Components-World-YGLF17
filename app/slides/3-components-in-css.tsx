import * as React from 'react';
import { Fragment, MarkCode, SpeakerNotes } from '../reveal-react';
import GalleryExample from '../assets/gallery';
import { markMap } from '../assets/gallery-syntax-data';

export class ComponentsInCSS extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>CSS<br/>💘<br/>Components</h1>
                    <SpeakerNotes markdown>{`
                        # What do we believe we need in order to write Component friendly CSS
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

                        - breakdown and manage styling as a modules
                        - modify style at runtime
                        - fast! minimal runtime & caching
                        - Complex selectors / media queries / pseudo…
                        - code completions, highlighting, linting, prefixer...
                    `}</SpeakerNotes> 
                </section>
                <section className="center">
                    <h1>Many Ways to Style HTML</h1>
                </section>
                <section className="center">
                    <h1>Target Element</h1>
                    <SpeakerNotes markdown>{`
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
                        - Potential HTML markup for a Gallery with a navigation button that has or contains an icon
                        - Lets style that icon!
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
                        - Target the icon CSS class works
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
                        - Icon class might not be unique to the navigation button
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
                        - Need to make our selector more specific
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
                        - Navigation button may also be reused outside of gallery
                        - need to make selector more specific
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
                        - Markup can indicate structure in many ways - not restricted to CSS classes
                        - For example:
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

                        - Namespacing convention for styling components
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
                        - Breakdown structure into components: Gallrey -> button -> icon
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
                    `}</SpeakerNotes>
                </section>

                <section className="center">
                    <h1>Target State</h1>
                    <SpeakerNotes markdown>{`
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
                        - 
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
                        - maybe as classes?
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
                        - maybe as attributes?
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
                        - maybe as classes?
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
                        - Minimum interface
                        - Why do we need to know the internal implementation
                        - What if it changes?
                        - lets remove!
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
                        - Need Abstraction
                        // add native pseudo elements & classes as source
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
                        - Abstraction
                        // add note abound draft spec ::part() and unknown future for custom pseudo-classes
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Abstraction</h3>
                    <MarkCode lang="css" markMapping={markMap} unHighlight>{`%.gallery%%:loading%%::spinner% { background:url("./bruce-head.png"); }`}</MarkCode>
                    <SpeakerNotes markdown>{`
                    `}</SpeakerNotes>
                </section>   

            </section>
        );
    }
}
