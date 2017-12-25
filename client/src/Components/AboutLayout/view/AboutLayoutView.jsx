import React from 'react';

export default class AboutLayoutView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => this.props.model.ctx.router.switchLayout('home')}>OH OH OH ABOUT</button>
        );
    }
}