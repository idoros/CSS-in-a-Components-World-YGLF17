import * as React from 'react';
import { Markdown, SpeakerNotes } from '../reveal-react';

export class StylingToday extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>Taking a Look Back on Stylin’</h1>
                    <SpeakerNotes markdown>{`
                        # State of CSS
                    `}</SpeakerNotes>   
                </section>
                <section>
                    <h3>In the Beginning...</h3>
                    Presentational Markup for HTML and Later Inline Style
                    {`<font>`}, bgcolor, align, style attribute, etc...
                    Dynamic - Controllable from JavaScript  
                    <SpeakerNotes markdown>{`
                        # Presentational Markup and then inline style                        

                        - Style as part of markup  


                        - Caching issues?
                        - Maintainability does not scale?

                        Styling on the web started with ___________, but HTML### introduced a new way to do styling. 
                    `}</SpeakerNotes>                  
                </section>
                <section>
                    <h3>CSS Stylesheets</h3>
                    <ul>
                        <li>Separation of presentation and content</li>
                        <li>Complex Selectors (.class / #id / [attribute])</li>
                        <li>Pseudo Classes (:hover)</li>
                        <li>Pseudo Elements (::before)</li>
                        <li>Caching</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                        # CSS Stylesheets

                        > Style sheets were added in HTML 4.0 by the class and id attributes  

                        - Separation of presentation and content

                        - No Namespacing
                        - No stylesheet dependency mechanism

                        CSS offered us a way to separate the structure from the style, and introduced new features to our styling arsenal. We could create complex selectors (class, id, etc) that target specific part or parts of our applications and pages. We could target pseudo-classes like :hover and :active, and pseudo-elements like ::before. This gave us a lot more freedom, and could scale much better than inline styling.
                        
                        In addition, by separating the styling to a different, fault-tolerant file and syntax, we get much better caching.
                        
                        Style sheets were added in HTML 4.0 by the class and id attributes. Spec has a note "Before the advent of style sheets, authors had limited control over rendering. HTML 3.2 included a number of attributes and elements offering control over alignment, font size, and text color. Authors also exploited tables and images as a means for laying out pages."
                    `}</SpeakerNotes>       
                </section>
                <section className="center">
                    <h1>CSS is Easy to Write but Hard to Manage</h1>
                </section>
                <section>
                    <h3>Preprocessors</h3>
                    <ul>
                        <li>Vars / mixins / Loops...</li>
                        <li>CSS nesting</li>
                        <li>Stylesheet dependencies</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                        - Breakdown CSS to manageable files
                        - added to CSS
                            - scripting
                            - templating
                            - sugar
                    `}</SpeakerNotes>  
                </section>
                <section>
                    <h3>CSS Modules</h3>
                    <ul>
                        <li>Treat your style as a module</li>
                        <li>Scope stylesheet</li>
                        <li>Stylesheet mapping to JS</li>
                    </ul>     
                    <SpeakerNotes markdown>{`
                        - treat every stylesheet as module
                        - Everything in a stylesheet is local - prevents stylesheets from effecting each other
                        - Exposed an API from stylesheets to JS
                    `}</SpeakerNotes>     
                </section>
                <section className="center">
                    <h1>CSS-in-JS</h1>
                    <SpeakerNotes markdown>{`
                        - Exists since CSS was released
                        - Wix sites CSS was generated from JS since 2010
                        - Renewed interest because of React and JSX
                        - Not a spec - lots of solutions out there                 
                    `}</SpeakerNotes> 
                </section>
                <section>
                    <h3>CSS-in-JS</h3>
                    <h4>Common Solution Features:</h4>
                    <ul>
                        <li>Stylesheet Namespacing & Ordering</li>
                        <li>Coupling of view and style</li>
                        <li>... But the big thing is ...</li>
                    </ul>
                </section>
                <section className="center">
                    <h1>Being Dynamic is Awesome</h1>
                    <span>ToDo: make live example for dynamic css in slide</span>
                    <SpeakerNotes markdown>{`
                        - CSS alone is static
                        - Generating and manipulating CSS in runtime                                
                    `}</SpeakerNotes> 
                </section>
                <section>
                    <h3>Static vs. Runtime</h3>
                    There’s a Cost...
                    <ul>
                        <li>Code and style coupling impacts bandwidth</li>
                        <li>Runtime performance hit for creating / modifying styling</li>
                    </ul>   
                    <SpeakerNotes markdown>{`
                        # Performance costs

                        - Load a JS lib to handle CSS
                        - SSR means loading CSS twice (JS and generated CSS)
                        - Generate CSS at runtime!    

                        ## Where solutions are going

                        - A lot of CSS-in-JS libs offer export to CSS
                        - Some even allow extraction of static CSS and just keep minimal runtime for dynamic
                    `}</SpeakerNotes>      
                </section>
                <section>
                    <h3>CSS - More Than Syntax</h3>
                    <h4>Tooling & Ecosystem</h4>
                    IDE support, syntax highlighting, code completions, validations, CSS generators, online materials / examples, etc...
                    <SpeakerNotes markdown>{`
                        # So What’s Still Missing?

                        - CSS is a mature format with lots of support we don’t want to give up

                        ...So keeping all that in mind...
                    `}</SpeakerNotes> 
                </section>
                <section>
                    <h3>CSS as Components Infrastructure</h3>
                    <ul>
                        <li>Dynamically modify parts of our CSS</li>
                        <li>Modular CSS - treat CSS as a module</li>
                        <li>CSS capabilities - Complex selectors / media queries / pseudo…</li>
                        <li>CSS tooling - code completions, highlighting, linting, prefixer...</li>
                        <li>
                            Performance
                            <ul>
                                <li>Caching</li>
                                <li>Minimal runtime</li>
                            </ul>
                        </li>
                    </ul>     
                    <SpeakerNotes markdown>{`
                        # What do we believe we need to write CSS for components
                    `}</SpeakerNotes> 
                </section>
            </section>
        );
    }
}
