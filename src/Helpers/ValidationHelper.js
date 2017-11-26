export default class ValidationHelper {
    static validateTodoItem(item) {
        if(!item || !item.title || !item.description) {
            return false;
        }

        return true;
    }
}