import Context from '../../Services/Context/Context';

export default class HomeLayout {
    constructor() {
        this.ctx = Context;
        this.options = {
            todos: []
        };

    }

    async init() {
        //this.ctx.set('modalCloseCallback', null);
        await this.populateModel();
    }

    async populateModel() {
        this.options.todos = await this.ctx.dataService.getAllTodos();
    }

    async update() {
        return await this.populateModel();
    }

    async resolveState() {
        return true;
    }
}