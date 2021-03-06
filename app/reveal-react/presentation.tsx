import * as React from 'react';
import * as RevealJS from 'reveal.js';
(window as any).Reveal = RevealJS;
import 'reveal.js/lib/js/head.min';


export type RevealCompProps = {
    children:React.ReactNode;
    className?:string;
    onSlideChange:(event:SlideEvent)=>void;
};

export default class RevealComp extends React.Component<RevealCompProps> {
    shouldComponentUpdate(){
        // react presentation renders once - then reveal takes over DOM
        return false; 
    }
    render() {
        let { className } = this.props;
        className = 'reveal' + (className ? ' ' + className : '');
        return (
            <div className={className} style={{height:'100%'}}>
                <div className="slides">
                    {this.props.children}
                </div>
            </div>
        );
    }
    componentDidMount() {
        // ToDo: move config to props
        RevealJS.initialize({
            history: true,

            // vertical
            center: false,

            // Flags if speaker notes should be visible to all viewers
            showNotes: false,
            
            // Transition style
            transition: 'fade', // none/fade/slide/convex/concave/zoom            
            
            // Transition speed
            transitionSpeed: 'fast', // default/fast/slow

            // Transition style for full page slide backgrounds
            backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

            // width: "100%",
            // height: "100%",
            // margin: 0,
            // minScale: 1,
            // maxScale: 1,

            dependencies: [
              { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
              { src: 'reveal.js/plugin/markdown/marked.js' },
              { src: 'reveal.js/plugin/markdown/markdown.js' },
              { src: 'reveal.js/plugin/notes/notes.js', async: true }
            
            ]
          }); 
          if(this.props.onSlideChange) {
              RevealJS.addEventListener('slidechanged', this.props.onSlideChange);
          }   
    }
    componentWillUnMount() {
        if(this.props.onSlideChange) {
            RevealJS.removeEventListener('slidechanged', this.props.onSlideChange);
        }
    }
}