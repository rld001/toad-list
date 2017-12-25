import React from 'react';
import ReactDOM from 'react-dom';

import AboutLayout from './AboutLayout';
import AboutLayoutView from './view/AboutLayoutView.jsx';

export default class AboutLayoutController extends AboutLayout {
    constructor() {
        super();
    }

    renderView() {
        const props = {
            model: this
        }

        ReactDOM.render(<AboutLayoutView {...props}/>, document.getElementById('root'));
    }
}