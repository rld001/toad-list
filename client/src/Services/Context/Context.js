class Context {
    constructor() {
        if (!Context.instance) {
            this._items = [];
            Context.instance = this;
        }

        return Context.instance;
    }

    set(key, obj) {
        this._items.push({
            key: key,
            item: obj
        });
    }

    get(key) {
        return this._items.find(i => i.key === key).item;
    }
}

const instance = new Context();

export default instance;