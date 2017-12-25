import Context from '../../Services/Context/Context';

export default class AboutLayout {
    constructor() {
        this.ctx = Context;
    }

    async init() {
        await this.populateModel();
    }

    async populateModel() {
        
    }

    async update() {
        await this.populateModel();
    }

    async resolveState() {
        return true;
    }
}