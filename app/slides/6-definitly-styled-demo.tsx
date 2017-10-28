import * as React from 'react';
import { SpeakerNotes, Fragment, MarkCode } from '../reveal-react';

const markMap = {
    'index.st.css': 'filename'
};

const lineSpace = ` `;
const filename = `%index.st.css%`;
const revealImport = `
:import {
    -st-from: "./revealjs/reveal.st.css";
    -st-default: Reveal;
}`;
const controlsStyleRule = (
`Reveal::navigateBtn {
    color: gold;
}`);
const progressStyleRule = (
`Reveal::progress {
    height: 20px;
    background: red;
}`);
const progressBarStyleRule = (
`Reveal::progress::bar {
    background: green;
}`);

const revealStyleAPI = ['::headings', '::navigateBtn', '::progress', '::code',  '::slides'];
const revealProgressStyleAPI = ['::bar'];


export class DefinitlyStyledDemo extends React.Component {
    render() {
        let index = 0;
        return (
            <section>

                <section className="center">
                    <h1>[ Built-In Demo ]</h1>
                    <SpeakerNotes markdown>{`
                    - I don't believe in any demo gods, but I trust Murphy... 
                    - so, I've embbed the demo into the presentation
                    - this presentation uses RevealJS
                    - open source presentation framework based
                    - created stylable interface for RevealJS
                    - and the modifications you see are the real deal in stylable CSS 
                    - not a mocked design
                    `}</SpeakerNotes>
                </section>

                <section data-transition="none">
                    <h3>Import Reveal</h3>
                    <MarkCode lang="css" markMapping={markMap}>
{`
${filename}
${revealImport}
`}
                    </MarkCode>
                    <SpeakerNotes markdown>{`
                    - Similar to what we've seen before
                    - import reveal stylable interface to main stylesheet
                    `}</SpeakerNotes>
                </section>
                <section data-transition="none">
                    <h3>Target Reveal as Element</h3>
                    <MarkCode lang="css" markMapping={markMap}>
{`
${filename}
${revealImport}
${lineSpace}
Reveal${MarkCode.caret}
`}
                    </MarkCode>
                    <SpeakerNotes markdown>{`
                    - This time, instead of extending 
                    - target our import as a Tag, similar to native tag selector
                    `}</SpeakerNotes>
                </section>

                <section data-transition="none">
                    <h3>Reveal Style API</h3>
                    <MarkCode lang="css" markMapping={markMap} completions={revealStyleAPI} completionIndex={revealStyleAPI.indexOf('::navigateBtn')}>
{`
${filename}
${revealImport}
${lineSpace}
Reveal${MarkCode.caret}${MarkCode.completions}
`}
                    </MarkCode>
                    <SpeakerNotes markdown>{`
                    - Now we get code completions
                    - In the top right corner, you can see our blue navigateBtn arrows
                    - let's color them gold
                    `}</SpeakerNotes>
                </section>

                <section data-custom-class="demo-modify-controls" data-transition="none">
                    <h3>Style Reveal Controls</h3>
                    <MarkCode lang="css" markMapping={markMap}>
{`
${filename}
${revealImport}
${lineSpace}
${controlsStyleRule}
`}
                    </MarkCode>
                    <SpeakerNotes markdown>{`
                    - *DRINK*
                    `}</SpeakerNotes>
                </section>

                <section data-custom-class="demo-modify-controls" data-transition="none">
                    <h3>Style Reveal Progress</h3>
                    <MarkCode lang="css" markMapping={markMap} completions={revealStyleAPI} completionIndex={revealStyleAPI.indexOf('::progress')}>
{`
${filename}
${revealImport}
${lineSpace}
${controlsStyleRule}
Reveal${MarkCode.caret}${MarkCode.completions}
`}
                    </MarkCode>
                    <SpeakerNotes markdown>{`
                    - If you look at the bottom of the screen, you can see reveal's progress bar 
                    - Let's style that
                    `}</SpeakerNotes>
                </section>

                <section data-custom-class="demo-modify-controls demo-modify-progress" data-transition="none">
                    <h3>Style Reveal Progress</h3>
                    <MarkCode lang="css" markMapping={markMap}>
{`
${filename}
${revealImport}
${lineSpace}
${controlsStyleRule}
${progressStyleRule}
`}
                    </MarkCode>
                    <SpeakerNotes markdown>{`
                    - Increased it's height to make it more noticable,
                    - colored it red
                    - we're towards the end of the presentation, so our remaining progress bar is small
                    `}</SpeakerNotes>
                </section>

                <section data-custom-class="demo-modify-controls demo-modify-progress" data-transition="none">
                    <h3>Style Reveal Progress Inner Bar</h3>
                    <MarkCode lang="css" markMapping={markMap} completions={revealStyleAPI} completionIndex={revealStyleAPI.indexOf('::progress')}>
{`
${filename}
${revealImport}
${lineSpace}
${controlsStyleRule}
${progressStyleRule}
Reveal${MarkCode.caret}${MarkCode.completions}
`}
                    </MarkCode>
                    <SpeakerNotes markdown>{`
                    - Now let's style the internal part that indicate how much has already passed
                    `}</SpeakerNotes>
                </section>

                <section data-custom-class="demo-modify-controls demo-modify-progress" data-transition="none">
                    <h3>Style Reveal Progress Inner Bar</h3>
                    <MarkCode lang="css" markMapping={markMap} completions={revealProgressStyleAPI} completionIndex={revealProgressStyleAPI.indexOf('::bar')}>
{`
${filename}
${revealImport}
${lineSpace}
${controlsStyleRule}
${progressStyleRule}
Reveal::progress${MarkCode.caret}${MarkCode.completions}
`}
                    </MarkCode>
                    <SpeakerNotes markdown>{`
                    - again we target the progress part
                    - but this time, going deeper
                    - chaining custom pseudo-elements together
                    `}</SpeakerNotes>
                </section>

                <section data-custom-class="demo-modify-controls demo-modify-progress  demo-modify-progress-bar" data-transition="none">
                    <h3>Style Reveal</h3>
                    <MarkCode lang="css" markMapping={markMap}>
{`
${filename}
${revealImport}
${lineSpace}
${controlsStyleRule}
${progressStyleRule}
${progressBarStyleRule}
`}
                    </MarkCode>
                    <SpeakerNotes markdown>{`
                    - and now, we can color that part specifically
                    - my interface - could be broken down differently
                    `}</SpeakerNotes>
                </section>
            </section>
        );
    }
}