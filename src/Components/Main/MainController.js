import ReactDOM from 'react-dom';
import React from 'react';

import MainModel from './MainModel';
import MainView from './MainView.jsx';
import './assets/Main.css';

export default class MainController {
    constructor() {
        this._model = new MainModel();
    }

    async init() {
        await this._model.populate();
        this.renderView();
    }

    async deleteTodo(id) {
        await this._model.deleteTodo(id);
        this.renderView();
    }

    async addTodo(todo) {
        await this._model.addTodo(todo);
        this.renderView();
    }

    async updateTodo(todo) {
        await this._model.updateTodo(todo);
        this.renderView();
    }

    renderView() {
        const props = {
            todos: this._model.options.todos,
            actions: {
                deleteTodo: (id) => this.deleteTodo(id),
                addTodo: (todo) => this.addTodo(todo),
                updateTodo: (todo) => this.updateTodo(todo)
            }
        };

        ReactDOM.render(<MainView {...props}/>, document.getElementById('root'));
    }
}