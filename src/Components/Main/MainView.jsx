import React from 'react';

import ModalView from './nested/ModalView.jsx';

export default class MainView extends React.Component {
    constructor() {
        super();

        this.state = { 
            modalOpen: false, 
            isEditing: false,
            newItem: { id: null, title: '', description: '', createdDate: null }
        };
    }

    

    toggleItemModal (request) {
        if(!request) {
            this.setState({ modalOpen: !this.state.modalOpen, isEditing: false });
        }

        if (request === 'cancel') {
            return this.setState({
                newItem: { id: null, title: '', description: '', createdDate: null },
                isEditing: false,
                modalOpen: false
            });
        }

        if(!this.validateNewItem) {
            // TODO: show problems with validation here in UI
            return;
        }

        if (request === 'submit-add') {
            this.props.actions.addTodo({ 
                title: this.state.newItem.title, 
                description: this.state.newItem.description, 
                createdDate: new Date()
            });
        } else if (request === 'submit-edit') {
            this.props.actions.updateTodo({
                id: this.state.newItem.id,
                title: this.state.newItem.title,
                description: this.state.newItem.description,
                createdDate: this.state.newItem.createdDate
            })
        }
        this.setState({ modalOpen: !this.state.modalOpen, isEditing: false });
    }

    validateNewItem() {
        const newItem = this.state.newItem;
        // TODO: validate
        return true;
    }

    handleChangeInput(e, key) {
        let newItem = this.state.newItem;
        newItem[key] = e.target.value;
        this.setState({
            newItem: newItem
        });
    }

    editTodoModal(todo) {
        this.setState({ 
            newItem: { id: todo.id, title: todo.title, description: todo.description, createdDate: todo.createdDate },
            isEditing: true,
            modalOpen: true
        });
    }

    openItemModal() {
        this.setState({ modalOpen: true });
    }

    closeItemModal() {
        this.setState({
            modalOpen: false, 
            isEditing: false, 
            newItem: { id: null, title: '', description: '', createdDate: null },
        });
    }

    submitItemModal(submissionType) {
        if(!this.validateNewItem) {
            // TODO: show problems with validation here in UI
            return;
        }

        if (submissionType === 'submit-add') {
            this.props.actions.addTodo({ 
                title: this.state.newItem.title, 
                description: this.state.newItem.description, 
                createdDate: new Date()
            });
        } else if (submissionType === 'submit-edit') {
            this.props.actions.updateTodo(this.state.newItem);
        }
        this.closeItemModal();
    }

    render() {
        const todos = this.props.todos;
        return (
            <div id="main-view">
                <div className="toolbar">
                    <button onClick={() => this.openItemModal()}>Add Item</button>
                </div>
                <div className="todo-container">
                    {todos.map(todo => {
                        return (
                            <div className="todo-item" key={todo.id}>
                                <p>{todo.title}</p>
                                <p>{todo.description}</p>
                                <button onClick={() => this.editTodoModal(todo)}>Edit</button>
                                <button onClick={() => this.props.actions.deleteTodo(todo.id)}>Delete</button>
                            </div>
                        );
                    })}
                </div>
                {this.state.modalOpen && (
                    <ModalView 
                        onClose={() => this.closeItemModal()}
                        closeBtnText="Cancel"
                        onSubmit={() => this.submitItemModal(this.state.isEditing ? 'submit-edit' : 'submit-add')}
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