import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Reveal } from './reveal-react';

import { Intro } from './slides/intro';
import { StylingToday } from './slides/styling-today';
import { ComponentsInCSS } from './slides/components-in-css';

import {stylable} from 'wix-react-tools/dist/src/react-component-features/stylable-feature';

import presentationCSS from './index.st.css';

@stylable(presentationCSS)
export default class Presentation extends React.Component {
    render() {
        return (
            <Reveal>
                <Intro />
                <StylingToday />
                <ComponentsInCSS />
            </Reveal>
        );
    }
}


ReactDOM.render(<Presentation/>, document.getElementById('presentation'));
