import * as React from 'react';

export class StylingToday extends React.Component {
    render() {
        let index = 0;
        return (
            <section>
                <section className="center">
                    <h1>Taking a Look Back on Stylin’</h1>
                </section>
                <section>
                    <h3>In the Beginning...</h3>
                    Presentational Markup for HTML and Later Inline Style
                    {`<font>`}, bgcolor, align, style attribute, etc...
                    Dynamic - Controllable from JavaScript                    
                </section>
            </section>
        );
    }
}
