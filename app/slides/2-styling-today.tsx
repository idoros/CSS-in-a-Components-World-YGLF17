import * as React from 'react';
import { Markdown, SpeakerNotes, MarkCode, Fragment } from '../reveal-react';
import { FullScreenTitle } from '../layout/';
import { GooglyEye } from '../assets/googly-eye';
import hardRock = require('../assets/images/hard-rock.jpg');
import playa = require('../assets/images/playa.jpg');
import frustration = require('../assets/images/frustration.jpg');
import apple = require('../assets/images/apple.png');

export class StylingToday extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <FullScreenTitle title="how we style">
                    Taking a look at Stylin’
                    <SpeakerNotes markdown>{`
                    - Let's take a look at how we style.
                    `}</SpeakerNotes>
                </FullScreenTitle>

                <section>
                    <h3>In the Beginning...</h3>
                    <img src={apple} alt="apple-site"/>
                    <SpeakerNotes markdown>{`
                    - In the beginning, sites were looking GOOD!                    
                    `}</SpeakerNotes>
                </section>

                <section>
                    <h3>In the Beginning...</h3>
                    <MarkCode lang="javascript">
                        {`document.tags.H1.fontSize = "20pt"`}
                    </MarkCode>
                    <Fragment>
                        <MarkCode lang="html">{`
                        <font face="Comic Sans MS" color="lime">
                            ...
                        </font>`}
                        </MarkCode>
                    </Fragment>
                    <Fragment>
                        <h3>... and Later on</h3>
                        <MarkCode lang="html">{`
                        <div style="font-family: 'Comic Sans MS'; color: lime">
                            ...
                        </div>`}
                        </MarkCode>
                    </Fragment>
                    <Fragment>
                        <pre>Scriptable from JavaScript</pre>
                    </Fragment>
                    <SpeakerNotes markdown>{`
                    Inline style:
                    - Netscape Navigator - styling using a javascript API
                    - Presentational markup - font tag, bgColor
                    - only later on, Inline styling as we know today
                    - Styling was always accessible through JS
                    `}</SpeakerNotes>                  
                </section>
                <section className="center">
                    <h1>Stylesheets</h1>
                    <span>Separation of presentation and content</span>
                    <SpeakerNotes markdown>{`
                    - "Style sheets were added in HTML 4.0"
                    - Separation of presentation and content
                    - being outside of markup, provides flexibility compared to inline, allowing reuse
                    `}</SpeakerNotes>
                </section>
                <section>
                    <h3>CSS Stylesheets</h3>
                    <ul>
                        <li>Selectors (.class / #id / [attribute])</li>
                        <li>Pseudo Classes (:hover)</li>
                        <li>Pseudo Elements (::before)</li>
                        <li>Media Queries</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                    CSS Stylesheets:
                    - allows the targeting of specific elements, class/id/attr, more
                    - pseudo-classes / pseudo-elements to style native elements
                    - media queries - modify the document style according to the conditions
                    `}</SpeakerNotes>       
                </section>
                <section className="center">
                    <h1>CSS</h1>
                    <h4>More Than Syntax</h4>
                    <SpeakerNotes markdown>{`
                    - CSS is not only a syntax. It is a mature format
                    - [with...] *click*                 
                    `}</SpeakerNotes> 
                </section>
                <section>
                    <h3>Tooling & Ecosystem</h3>
                    <h4>
                        IDE support, syntax highlighting, code completions, validations, CSS generators, online materials, examples, etc...
                    </h4>
                    <SpeakerNotes markdown>{`
                    - Tooling and a rich ecosystem.
                    - IDE support, syntax highlighting, code completions
                    - Despite all of these features *click*
                    `}</SpeakerNotes> 
                </section>
                <FullScreenTitle title="easy write & hard manage" data-background-image={hardRock} titleStyle={{'text-shadow': '4px 2px 40px rgba(0, 0, 0, 0.7)'}}>
                    CSS is Easy to Write & Hard to Manage
                    <SpeakerNotes markdown>{`
                    - make CSS easy to write, it is still hard to manage
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <section>
                    <h3>CSS Stylesheets</h3>
                    <ul>
                        <li>Everything is global</li>
                        <li>Order affects cascade</li>
                        <li>Dependency system - @import</li>
                        <li>Relies on markup structure</li>
                        <li>Breaks silently</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                    - everything is global
                    - one stylesheet can affect and conflict with other
                    - multiple stylesheets, order of loading, impacts the cascade
                    - no reasonable dependency system, personally I don't know anyone using it
                    - separation is misleading
                    - No errors, no validations - hard to predict when something would break
                    `}</SpeakerNotes>
                </section>
                <FullScreenTitle title="community" data-background-image={playa} titleStyle={{'text-shadow': '4px 2px 8px rgba(0, 0, 0, 0.3)'}}>
                    Enter the Community
                    <SpeakerNotes markdown>{`
                    - community wanted more
                    - so they built
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <FullScreenTitle title="preprocessprs">
                    Preprocessors
                    <SpeakerNotes markdown>{`
                    - use preprocessors, like LESS and SASS
                    - Added build pipeline for CSS *click*
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <section>
                    <h3>Preprocessors</h3>
                    <ul>
                        <li>Vars / Mixins / Loops...</li>
                        <li>CSS nesting</li>
                        <li>Stylesheet dependencies</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                    - CSS superset, add scripting, logic and sugar
                    - break down our stylesheets
                    - assure the correct file order
                    - but, don’t solve the original issue of CSS being global
                    `}</SpeakerNotes>  
                </section>
                <section>
                    <h3>CSS Modules</h3>
                    <ul>
                        <li>Style as a module</li>
                        <li>Scope stylesheet</li>
                        <li>Stylesheet exports locals to JS</li>
                    </ul>     
                    <SpeakerNotes markdown>{`
                    - treat every stylesheet as module
                    - the stylesheet is localized and namespaced
                    - original class names are changed
                    - map and export them to our JS
                    - bind them to template
                    `}</SpeakerNotes>     
                </section>
                <section className="center">
                    <h1>CSS-in-JS</h1>
                    <Fragment>
                        <h4>new?</h4>
                    </Fragment>
                    <SpeakerNotes markdown>{`
                    - surge of solutions, based on CSS-in-JS
                    - frontend developer, 1 in 5 chance you’ve written a CSS-in-JS
                    - *click*
                    - CSS-in-JS has always been around 
                    - at Wix we’ve been generating CSS from JS since 2010
                    - adoption of React and JSX, reignited the interest in this concept
                    - CSS-in-JS is not a spec, not a single solution *click*
                    `}</SpeakerNotes> 
                </section>
                <section>
                    <h3>CSS-in-JS</h3>
                    <ul>
                        <li>Stylesheet namespacing & ordering</li>
                        <li>Coupling of view and style</li>
                        <li>... but the big thing is ...</li>
                    </ul>
                    <SpeakerNotes markdown>{`
                    most solutions solve:
                    - ordering and namespacing of CSS
                    - big thing is... *click*
                    `}</SpeakerNotes> 
                </section>
                <section className="center">
                    <h1>Being Dynamic is Awesome</h1>
                    <div>
                        <GooglyEye pupilPercent={50}/>
                        <GooglyEye pupilPercent={50} style={{marginLeft:'10px'}}/>
                    </div>
                    <SpeakerNotes markdown>{`
                    - dynamic is AWESOME!!!
                    - look at those googly eyes, fun!
                    - dynamically reacting to mouse
                    - CSS is static, cannot be modified during run-time
                    - CIJ makes being dynamic easy
                    - generates and manipulates CSS during run-time   
                    `}</SpeakerNotes> 
                </section>
                <FullScreenTitle title="cost!" data-background-image={frustration} titleStyle={{'text-shadow': '4px 2px 30px rgba(0, 0, 0, 0.7)'}}>
                    ...But There's a Cost!
                    <SpeakerNotes markdown>{`
                    - But as always, there’s a cost 
                    `}</SpeakerNotes>
                </FullScreenTitle>
                <section>
                    <h3>The cost of being dynamic</h3>
                    <ul>
                        <li>Load JS library to handle CSS creation at runtime</li>
                        <li>Creating / modifying stylsheets at runtime</li>
                        <li>Server-Side Rendering = CSS X 2</li>
                    </ul>   
                    <SpeakerNotes markdown>{`
                        Performance costs:
                        - JS library dependency
                        - creating and modifying CSS at runtime, browser reflow and repaint
                        - SSR serving the same CSS twice, first as CSS and then as JS
                    `}</SpeakerNotes>      
                </section>
                <section>
                    <h3>CSS-from-JS</h3>
                    <ul>
                        <li>Output CSS-in-JS to CSS</li>
                        <li>Extract static CSS from JS</li>
                    </ul>   
                    <SpeakerNotes markdown>{`
                        Where solutions are going:
                        - community is aware of these issues
                        - working to solve them
                        - most libraries can output vanilla CSS from JS, losing dynamic capabilities
                        - some extract only the static CSS, leaving minimal run-time adapter
                    `}</SpeakerNotes>      
                </section>
            </section>
        );
    }
}
