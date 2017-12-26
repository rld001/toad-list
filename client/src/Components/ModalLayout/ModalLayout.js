import Context from '../../Services/Context/Context';

export default class ModalLayout {
    constructor() {
        this.ctx = Context;

    }

    async init() {
        await this.populateModel();
    }

    async populateModel() {
        
    }

    async update() {
        return await this.populateModel();
    }

    async resolveState() {
        return true;
    }
}