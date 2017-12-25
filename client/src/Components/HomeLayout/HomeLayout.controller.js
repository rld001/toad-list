import ReactDOM from 'react-dom';
import React from 'react';

import HomeLayout from './HomeLayout';
import HomeLayoutView from './view/HomeLayoutView.jsx';
import config from './HomeLayout.config';

export default class HomeLayoutController extends HomeLayout {
    constructor() {
        super();
        
    }

    renderView() {
        const props = {
            model: this
        }

        ReactDOM.render(<HomeLayoutView {...props}/>, document.getElementById('root'));
    }
}