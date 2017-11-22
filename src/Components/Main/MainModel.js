import DataService from '../../Services/DataService';

export default class MainModel {
    
    async populate() {
        const todos = await DataService.getAllTodos();
        this.options = {
            todos: todos
        }
    }

    async addTodo(todo) {
        await DataService.addTodoItem(todo);
        await this.populate();
    }

    async deleteTodo(id) {
        await DataService.deleteTodoItem(id);
        await this.populate();
    }

    async updateTodo(todo) {
        await DataService.updateTodoItem(todo);
        await this.populate();
    }
}