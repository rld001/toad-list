import React from 'react';

export default class HomeLayoutView extends React.Component {

    constructor(props) {
        super(props);
    }

    editTodo(todo) {
        console.log('editing now', todo);
    }

    deleteTodo(todo) {
        console.log('deleting now', todo);
    }

    render() {
        return (
            <div>
                { this.props.model.options.todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button onClick={() => this.editTodo(todo)}>Edit</button>
                            <button onClick={() => this.deleteTodo(todo)}>Delete</button>
                        </div>
                    );
                })
                }
            </div>
        )
    }
}