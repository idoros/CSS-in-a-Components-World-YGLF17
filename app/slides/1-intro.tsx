import * as React from 'react';
import { Markdown, SpeakerNotes } from '../reveal-react';

export class Intro extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>CSS in a Components’ World</h1>                    
                    <SpeakerNotes>
                        <Markdown>{`
                            # Intro
                        `}</Markdown>
                    </SpeakerNotes>
                </section>
                <section>
                <h4>About Me</h4>
                    <ul>
                        <li>Frontend Developer since 2001</li>
                        <li>Joined Wix in 2010</li>
                        <li>Lead the move from Flash to HTML at Wix</li>
                        <li>Developer tools, layout and styling</li>
                        <li>Father to a 1.5 Year Old</li>
                    </ul>
                </section>
                <section>
                    <h4>CSS in a Components’ World</h4> 
                    <ul>
                        <li>Styling solutions</li>
                        <li>What's missing</li>
                        <li>What have we have been up to</li>
                    </ul>
                </section>
            </section>
        );
    }
}