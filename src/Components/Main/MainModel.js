import DataService from '../../Services/DataService';

export default class MainModel {
    constructor() {
        this.init();
    }
    
    async populateModel() {
        const todos = await DataService.getAllTodos();
        this.options = {
            todos: todos
        }
    }
}