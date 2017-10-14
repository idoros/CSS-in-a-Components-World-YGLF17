import * as React from 'react';

export class Intro extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>CSS in a Components’ World</h1>
                </section>
                <section>
                    <ul>
                        <li>Frontend Developer since 2001</li>
                        <li>Joined Wix in 2010</li>
                        <li>Lead the move from Flash to HTML at Wix</li>
                        <li>Developer tools, Layout and styling</li>
                        <li>Father of a 1.5 Year Old</li>
                    </ul>
                </section>
            </section>
        );
    }
}