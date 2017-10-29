import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Reveal } from './reveal-react';

import { Intro } from './slides/1-intro';
import { StylingToday } from './slides/2-styling-today';
import { ComponentsInCSS } from './slides/3-components-in-css';
import { TypedCSS } from './slides/4-typed-css';
import { IntroducingStylable } from './slides/5-introducing-stylable';
import { DefinitlyStyledDemo } from './slides/6-definitly-styled-demo';
import { Outro } from './slides/7-outro';

import {stylable} from 'wix-react-tools';

import presentationCSS from './index.st.css';


interface PresentationState {
    customClass:string;
}

@stylable(presentationCSS)
export default class Presentation extends React.Component {
    state = { customClass:'' };
    render() {
        return (
            <div className={this.state.customClass}>
                <Reveal onSlideChange={this.onSlideChange}>
                    <Intro />
                    <StylingToday />
                    <ComponentsInCSS />
                    <TypedCSS />
                    <IntroducingStylable />
                    <DefinitlyStyledDemo />
                    <Outro />
                </Reveal>
            </div>
        );
    }

    onSlideChange = ({currentSlide}:SlideEvent) => {
        this.setState({customClass:currentSlide.getAttribute('data-custom-class')});
    }
}


ReactDOM.render(<Presentation/>, document.getElementById('presentation'));
