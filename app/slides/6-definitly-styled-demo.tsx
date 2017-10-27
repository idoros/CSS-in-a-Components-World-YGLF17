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
                    <h1>[ Reveal JS DEMO ]</h1>
                </section>

                <section data-transition="none">
                    <h3>Import Reveal</h3>
                    <MarkCode lang="css" markMapping={markMap}>
{`
${filename}
${revealImport}
`}
                    </MarkCode>
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
                </section>

                <section data-transition="none">
                    <h3>Reveal Style API</h3>
                    <MarkCode lang="css" markMapping={markMap} completions={revealStyleAPI} completionIndex={revealStyleAPI.indexOf('::navigateBtn')}>
{`
${filename}
${revealImport}
${lineSpace}
Reveal${MarkCode.completions}
`}
                    </MarkCode>
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
                </section>

                <section data-custom-class="demo-modify-controls" data-transition="none">
                    <h3>Style Reveal Progress</h3>
                    <MarkCode lang="css" markMapping={markMap} completions={revealStyleAPI} completionIndex={revealStyleAPI.indexOf('::progress')}>
{`
${filename}
${revealImport}
${lineSpace}
${controlsStyleRule}
Reveal${MarkCode.completions}
`}
                    </MarkCode>
                </section>

                <section data-custom-class="demo-modify-controls" data-transition="none">
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
                </section>

                <section data-custom-class="demo-modify-controls" data-transition="none">
                    <h3>Style Reveal progress inner bar</h3>
                    <MarkCode lang="css" markMapping={markMap} completions={revealStyleAPI} completionIndex={revealStyleAPI.indexOf('::progress')}>
{`
${filename}
${revealImport}
${lineSpace}
${controlsStyleRule}
${progressStyleRule}
Reveal${MarkCode.completions}
`}
                    </MarkCode>
                </section>

                <section data-custom-class="demo-modify-controls demo-modify-progress" data-transition="none">
                    <h3>Style Reveal progress inner bar</h3>
                    <MarkCode lang="css" markMapping={markMap} completions={revealProgressStyleAPI} completionIndex={revealProgressStyleAPI.indexOf('::bar')}>
{`
${filename}
${revealImport}
${lineSpace}
${controlsStyleRule}
${progressStyleRule}
Reveal::progress${MarkCode.completions}
`}
                    </MarkCode>
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
                </section>

            </section>
        );
    }
}