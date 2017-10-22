import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {stylable} from 'wix-react-tools/dist/src/react-component-features/stylable-feature';
import {properties} from 'wix-react-tools/dist/src/react-component-features/properties-feature';

import googlyEyeCSS from './googly-eye.st.css';

interface GooglyEyeProps extends properties.Props {
    size?:string;
    pupilPercent?:number
}

@stylable(googlyEyeCSS)
@properties
export class GooglyEye extends React.Component<GooglyEyeProps> {
    static defaultProps = {
        size:'150px',
        pupilPercent: 40,
        style:{}
    };
    render(){
        const {size, pupilPercent} = this.props;
        const pupilSize = pupilPercent + '%';
        const pupilLeft = (50 - pupilPercent!/2) + '%';
        return (
            <div style={{width:size, height:size}}>
                <div className="pupil" style={{left:pupilLeft, width:pupilSize, height:pupilSize}}></div>
            </div>
        );
    }
    componentDidMount(){
        document.body.addEventListener('mousemove', this.updateEyePos);
    }
    updateEyePos = ({pageX:mouseX, pageY:mouseY}:MouseEvent) => {
        const eye = ReactDOM.findDOMNode(this);
        const eyeBounds = eye.getBoundingClientRect();

        const rad = Math.atan2(mouseX - (eyeBounds.left + eyeBounds.width/2), mouseY - (eyeBounds.top + eyeBounds.height/2));
        const deg = rad * (180 / Math.PI) * -1; 

        (eye as any).style.transform = 'rotate('+ (deg) + 'deg)';
    }
}