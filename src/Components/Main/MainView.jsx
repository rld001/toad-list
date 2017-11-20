import React from 'react';

import ModalView from './nested/ModalView.jsx';

export default class MainView extends React.Component {
    constructor() {
        super();

        this.state = { 
            modalOpen: false, 
            newItem: {title: '', description: ''}
        };
    }

    editTodo(todo) {
        console.log('Edit todo: ', todo);
    }

    toggleAddItemModal (response) {
        if(response === 'submit') {
            if(this.validateNewItem()) {
                const item = { 
                    title: this.state.newItem.title, 
                    description: this.state.newItem.description, 
                    createdDate: new Date()
                };
                this.props.actions.addTodo(item);
            }
        }
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    validateNewItem() {
        const newItem = this.state.newItem;
        return true;
    }

    handleChangeInput(e, key) {
        let newItem = this.state.newItem;
        newItem[key] = e.target.value;
        this.setState({
            newItem: newItem
        });
    }

    render() {
        const todos = this.props.todos;
        return (
            <div id="main-view">
                <div className="toolbar">
                    <button onClick={() => this.toggleAddItemModal('open')}>Add Item</button>
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
                {this.state.modalOpen && (
                    <ModalView 
                        onClose={() => this.toggleAddItemModal('cancel')}
                        closeBtnText="Cancel"
                        onSubmit={() => this.toggleAddItemModal('submit')}
                        submitBtn={true}
                        submitBtnText="Save Item"
                    >
                        <input type="text" placeholder="Title" value={this.state.newItem.title} onChange={(evt) => this.handleChangeInput(evt, 'title')}/>
                        <input type="text" placeholder="Description" value={this.state.newItem.description} onChange={(evt) => this.handleChangeInput(evt, 'description')}/>
                    </ModalView>           
                )}
            </div>
        );
    }
}