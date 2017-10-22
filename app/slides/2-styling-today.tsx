import * as React from 'react';
import { Markdown, SpeakerNotes, MarkCode } from '../reveal-react';
import { GooglyEye } from '../assets/googly-eye';

export class StylingToday extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>Taking a look at Stylin’</h1>
                    <SpeakerNotes markdown>{`
                        # State of CSS
                    `}</SpeakerNotes>       
                </section>
                <section>
                    <h3>In the Beginning ...</h3>
                    <MarkCode lang="javascript">
                        {`document.tags.H1.fontSize = "20pt"`}
                    </MarkCode>
                    <MarkCode lang="html">{`
                    <font face="Comic Sans MS" color="lime">
                        ...
                    </font>`}
                    </MarkCode>

                    <h3>... and Later on</h3>
                    <MarkCode lang="html">{`
                    <div style="font-family: 'Comic Sans MS'; color: lime">
                        ...
                    </div>`}
                    </MarkCode>
                    

                    <pre>Scriptable from JavaScript</pre>
                    <SpeakerNotes markdown>{`
                        # Presentational Markup and then inline style                        

                        - Back then sites where looking GOOD!
                        - At the beginning we styled only from JS
                        - presentational markup
                        - inline style that we know today

                        Styling on the web started with ___________, but HTML### introduced a new way to do styling. 
                    `}</SpeakerNotes>                  
                </section>
                <section className="center">
                    <h1>Stylesheets</h1>
                    <span>Separation of presentation and content</span>
                    <SpeakerNotes markdown>{`
                        Style sheets were added in HTML 4.0
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>CSS Stylesheets</h3>
                    <ul>
                        <li>Selectors (.class / #id / [attribute])</li>
                        <li>Pseudo Classes (:hover)</li>
                        <li>Pseudo Elements (::before)</li>
                        <li>Media Queries</li>
                        ...
                    </ul>
                    <SpeakerNotes markdown>{`
                        # CSS Stylesheets

                        CSS offered us a way to separate the structure from the style, and introduced new features to our styling arsenal. We could create complex selectors (class, id, etc) that target specific part or parts of our applications and pages. We could target pseudo-classes like :hover and :active, and pseudo-elements like ::before. This gave us a lot more freedom, and could scale much better than inline styling.
                        
                        In addition, by separating the styling to a different, fault-tolerant file and syntax, we get much better caching.
                        
                        Style sheets were added in HTML 4.0 by the class and id attributes. Spec has a note "Before the advent of style sheets, authors had limited control over rendering. HTML 3.2 included a number of attributes and elements offering control over alignment, font size, and text color. Authors also exploited tables and images as a means for laying out pages."
                    `}</SpeakerNotes>       
                </section>
                <section className="center">
                    <h1>CSS</h1>
                    <h4>More Than Syntax</h4>
                    <SpeakerNotes markdown>{`      
                        - CSS is a mature format with lots of support we don’t want to give up                         
                    `}</SpeakerNotes> 
                </section>
                <section>
                    <h3>Tooling & Ecosystem</h3>
                    <h4></h4>
                    IDE support, syntax highlighting, code completions, validations, CSS generators, online materials / examples, etc...
                    <SpeakerNotes markdown>{`
                        # So What’s Still Missing?

                        ...So keeping all that in mind...
                    `}</SpeakerNotes> 
                </section>
                <section className="center">
                    <h1>CSS is Easy to Write & Hard to Manage</h1>
                    <SpeakerNotes markdown>{`
                        ... BUT ...
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>CSS Stylesheets</h3>
                    <ul>
                        <li>Everything is global</li>
                        <li>CSS order Affects cascade</li>
                        <li>No reasonable dependency system - @import</li>
                    </ul>
                </section>
                <section className="center">
                    <h1>Preprocessors</h1>
                    <SpeakerNotes markdown>{`
                        - Added build pipeline for CSS 
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>Preprocessors</h3>
                    <ul>
                        <li>Vars / mixins / Loops...</li>
                        <li>CSS nesting</li>
                        <li>Stylesheet dependencies</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                        # CSS superset 

                        - added to CSS
                            - scripting
                            - templating
                            - sugar
                        - Breakdown CSS to manageable files
                    `}</SpeakerNotes>  
                </section>
                <section>
                    <h3>CSS Modules</h3>
                    <ul>
                        <li>Treat your style as a module</li>
                        <li>Scope stylesheet</li>
                        <li>Stylesheet exports locals to JS</li>
                    </ul>     
                    <SpeakerNotes markdown>{`
                        - treat every stylesheet as module
                        - Everything in a stylesheet is local - prevents stylesheets from effecting each other
                        - Exposed an API from stylesheets to JS
                    `}</SpeakerNotes>     
                </section>
                <section className="center">
                    <h1>CSS-in-JS</h1>
                    <h4>new?</h4>
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
                    <div>
                        <GooglyEye pupilPercent={50}/>
                        <GooglyEye pupilPercent={50}/>
                    </div>
                    <SpeakerNotes markdown>{`
                        - CSS alone is static
                        - Generating and manipulating CSS in runtime                                
                    `}</SpeakerNotes> 
                </section>
                <section className="center">
                    <h1>...But There's a Cost!</h1>
                </section>
                <section>
                    <h3>The cost of being dynamic</h3>
                    <ul>
                        <li>Creating / modifying stylsheets at runtime</li>
                        <li>Load JS Library to handle CSS creation at runtime</li>
                        <li>SSR = CSS X 2</li>
                    </ul>   
                    <SpeakerNotes markdown>{`
                        # Performance costs

                        - Add JS code to handle CSS creation
                        - Generate CSS at runtime. reflow, repaint...
                        - SSR means loading CSS twice (JS and generated CSS)
                    `}</SpeakerNotes>      
                </section>
                <section>
                    <h3>CSS-from-JS</h3>
                    <ul>
                        <li>Output CSS-in-JS to CSS</li>
                        <li>Extract static CSS from JS</li>
                    </ul>   
                    <SpeakerNotes markdown>{`
                        ## Where solutions are going

                        - A lot of CSS-in-JS libs offer export to CSS
                        - Some even allow extraction of static CSS and just keep minimal runtime for dynamic
                    `}</SpeakerNotes>      
                </section>
            </section>
        );
    }
}
