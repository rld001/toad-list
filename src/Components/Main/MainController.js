import ReactDOM from 'react-dom';
import React from 'react';

import MainModel from './MainModel';
import MainView from './MainView.jsx';
import './assets/Main.css';

export default class MainController extends MainModel {
    constructor() {
        super();
    }

    init() {
        this.populateModel().then(() => {
            this.renderView();
        });
    }

    renderView() {
        const props = {
            todos: this.options.todos
        };

        ReactDOM.render(<MainView {...props}/>, document.getElementById('root'));
    }
}