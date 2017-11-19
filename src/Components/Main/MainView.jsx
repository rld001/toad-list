import React from 'react';

export default class MainView extends React.Component {
    constructor() {
        super();
    }

    render() {
        const todos = this.props.todos;
        return (
            <div id="main-view">
                {todos.map(todo => {
                    return (
                        <div>
                            <p>{todo.title}</p>
                            <p>{todo.description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}