import * as React from 'react';

import { Markdown, SpeakerNotes } from '../reveal-react';

import { FullScreenTitle } from '../layout/';

import sprayCans = require('../assets/images/spray-cans.jpg');
import me = require('../assets/images/ido.jpg');

export class Intro extends React.Component {
    render() {
        let index = 0;
        return (
            <section>

                <FullScreenTitle title="Intro" data-background-image={sprayCans} titleStyle={{'text-shadow': '4px 2px 40px rgb(0, 0, 0)'}}>
                    CSS in a Components’ World
                    <SpeakerNotes markdown>{`
                    - Hello...
                    - bruce lawson
                    - Welcome to...
                    `}</SpeakerNotes>
                </FullScreenTitle>

                <section data-background-image={me}>
                    <ul style={{backgroundColor: 'rgba(0,0,0,0.5)', padding: '25px'}}>
                        <li>Frontend since 2002</li>
                        <li>HTML5 WG, Deputy CTO Opera, consultant Wix engineering</li>
                        <li>passionate about developing standards, tools to keep web relevant, open and free</li>
                        <li>likes vodka</li>
                    </ul>
                    <SpeakerNotes>
                        <Markdown>{`
                        - Frontend since 2002
                        - HTML5 WG, Feputy CTO Opera, consultant Wix engineering
                        - passionate about developing standards, tools to keep web relevant, open and free
                        `}</Markdown>
                    </SpeakerNotes>
                </section>
                <section>
                    <h3>CSS in a Components’ World</h3> 
                    <ul>
                        <li>Styling solutions</li>
                        <li>What’s missing</li>
                        <li>What have we have been up to</li>
                    </ul>
                    <SpeakerNotes>
                        <Markdown>{`
                        What are we going to talk about
                        - how we style today
                        - what's missing for styling components
                        - what we've been up to, solve these problems
                        `}</Markdown>
                    </SpeakerNotes>
                </section>
            </section>
        );
    }
}