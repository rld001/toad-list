import ReactDOM from 'react-dom';
import React from 'react';

import MainModel from './MainModel';
import MainView from './MainView.jsx';
import './assets/Main.css';

export default class MainController extends MainModel {
    constructor() {
        super();
        
    }

    renderView() {
        const props = {
            
        };

        ReactDOM.render(<MainView {...props}/>, document.getElementById('root'));
    }
}