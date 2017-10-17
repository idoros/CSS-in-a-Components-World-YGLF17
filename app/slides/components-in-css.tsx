import * as React from 'react';
import { Fragment, MarkCode, SpeakerNotes } from '../reveal-react';

const markMap = {
    '.icon':'icon',
    'icon':'icon',
    '.gallery__icon':'icon',
    'gallery__icon':'icon',
    '.button__icon':'icon',
    'button__icon':'icon',
    '::icon':'icon',
    '::navIcon':'icon',
    
    '.navBtn':'navBtn',
    'navBtn':'navBtn',
    '.gallery__navBtn':'navBtn',
    'gallery__navBtn':'navBtn',
    '::navBtn':'navBtn',
    'a':'btn',
    'nav':'nav',

    '.gallery':'gallery',
    'gallery':'gallery',

    '.loading':'loading',
    'loading':'loading',
    'loading="true"':'loading',
    '[loading="true"]':'loading',
    ':loading':'loading',
};

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
                <section>
                    <h3>Many Ways to Style HTML</h3>
                </section>
                <section>
                    <h3>Targeting DOM</h3>
                    <MarkCode lang="html">{`
                    <div class="gallery">
                        <div class="navBtn">
                            <div class="icon"></div>
                        </div>
                    </div>
                    `}</MarkCode>
                    <pre>Style the icon in the navigation button of a gallery</pre>
                    <SpeakerNotes markdown>{`
                        - Potential HTML markup for a Gallery with a navigation button that has or contains an icon
                        - Lets style that icon!
                    `}</SpeakerNotes>
                </section>
                <section>
                    <MarkCode lang="css" markMapping={markMap}>{`%.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
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
                    <MarkCode lang="css" markMapping={markMap}>{`%.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
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
                    <MarkCode lang="css" markMapping={markMap}>{`%.navBtn% %.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
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
                    <MarkCode lang="css" markMapping={markMap}>{`%.navBtn% %.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
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
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery% %.navBtn% %.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
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
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery% %nav% %a% %.icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
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
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery% %.gallery__navBtn% %.gallery__icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
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
                    <h3>BEM - namespacing convention</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery% %.gallery__navBtn% %.button__icon% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
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
                    <h3>Abstraction</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%::navBtn%%::icon% {}`}</MarkCode>
                    Or even
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%::navIcon% {}`}</MarkCode>

                    <SpeakerNotes markdown>{`
                        - Why do we need to know the internal implementation
                        - What if it changes?
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Syntax</h3>
                    Native pseudo elements
                    <MarkCode lang="css" markMapping={markMap}>{`::before {}`}</MarkCode>
                    Current future spac
                    <MarkCode lang="css" markMapping={markMap}>{`::part() {}`}</MarkCode>

                    <SpeakerNotes markdown>{`
                    `}</SpeakerNotes>
                </section>

                {/*******/}

                <section>
                    <h3>Target State</h3>
                    <MarkCode lang="html" markMapping={markMap}>{`
                    <div class="gallery"></div>
                    `}</MarkCode>
                    <pre>Style gallery when loading</pre>
                    <SpeakerNotes markdown>{`
                        - Sometimes we need to style according to a state of our code
                    `}</SpeakerNotes>
                </section>
                <section>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%.loading% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
                    <div class="%gallery% %loading%"></div>
                    `}</MarkCode>
                </section>
                <section>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%[loading="true"]% {}`}</MarkCode>
                    <MarkCode lang="html" markMapping={markMap}>{`
                    <div class="%gallery%" %loading="true"%></div>
                    `}</MarkCode>
                </section>

                <section>
                    <h3>Abstraction</h3>
                    <MarkCode lang="css" markMapping={markMap}>{`%.gallery%%:loading% {}`}</MarkCode>

                    <SpeakerNotes markdown>{`
                        - Why do we need to know the internal implementation
                        - What if it changes?
                    `}</SpeakerNotes>
                </section>                

            </section>
        );
    }
}
