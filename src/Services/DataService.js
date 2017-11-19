import axios from 'axios';

const url = 'http://localhost:5050/';

export default class DataService {

    static async getAllTodos() {
        try {
            const response = await axios({
                method: 'get',
                url: url + 'api/Todo'
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async addTodoItem(item) {
        try {
            const response = await axios.post(url + 'api/Todo', {
                title: item.title,
                description: item.description,
                createdDate: item.createdDate
            });
        } catch (error) {
            console.log(error);
        }
    }

    // static updateTodoItem(item) {
    //     return axios.put(
    //         url + 'api/Todo/' + item.id, 
    //         {
    //             id: item.id,
    //             title: item.title,
    //             description: item.description,
    //             createdDate: item.createdDate
    //         }
    //     );
    // }

    static async deleteTodoItem(itemId) {
        try {
            const response = await axios.delete(url + 'api/Todo/' + itemId);
            return response;
        } catch (error) {
            console.log(error);
        }
        
    }
}