import React from 'react';

export default class MainView extends React.Component {
    constructor() {
        super();
    }

    editTodo(todo) {
        console.log('Edit todo: ', todo);
    }

    showAddItemModal() {
        this.props.actions.addTodo({
            title: 'Test Title',
            description: 'Test Description',
            createdDate: new Date()
        });
    }

    render() {
        const todos = this.props.todos;
        return (
            <div id="main-view">
                <div className="toolbar">
                    <button onClick={() => this.showAddItemModal()}>Add Item</button>
                </div>
                <div className="todo-container">
                    {todos.map(todo => {
                        return (
                            <div className="todo-item" key={todo.id}>
                                <p>{todo.title}</p>
                                <p>{todo.description}</p>
                                <button onClick={() => this.editTodo(todo)}>Edit</button>
                                <button onClick={() => this.props.actions.deleteTodo(todo.id)}>Delete</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}