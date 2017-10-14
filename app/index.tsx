import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Reveal } from './reveal-react';

import { ComponentsInCSS } from './slides/components-in-css';

import {stylable} from 'wix-react-tools/dist/src/react-component-features/stylable-feature';

import presentationCSS from './index.st.css';

@stylable(presentationCSS)
export default class Presentation extends React.Component {
    render() {
        return (
            <Reveal>
                <ComponentsInCSS />
            </Reveal>
        );
    }
}


ReactDOM.render(<Presentation/>, document.getElementById('presentation'));
