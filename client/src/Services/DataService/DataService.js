import axios from 'axios';
import config from './DataService.config';

export default class DataService {
    constructor() {
        this.config = config;
    }

    async getAllTodos() {
        try {
            const response = await axios({
                method: 'get',
                url: this.config.baseUrl + 'api/Todo'
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async addTodoItem(item) {
        try {
            const response = await axios.post(this.config.baseUrl + 'api/Todo', {
                title: item.title,
                description: item.description,
                createdDate: item.createdDate
            });
        } catch (error) {
            console.error(error);
        }
    }

    async updateTodoItem(item) {
        try {
            const response = await axios.put(
                this.config.baseUrl + 'api/Todo/' + item.id, 
                {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    createdDate: item.createdDate
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    async deleteTodoItem(itemId) {
        try {
            const response = await axios.delete(this.config.baseUrl + 'api/Todo/' + itemId);
            return response;
        } catch (error) {
            console.error(error);
        }
        
    }
}