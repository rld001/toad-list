export default class DataService {
    static async getAllTodos() {
        return [
            {
                id: 0,
                title: 'Eat all the spaghetti',
                description: '...',
                createdAt: new Date()
            },
            {
                id: 1,
                title: 'Burn down the house',
                description: '...',
                createdAt: new Date()
            },
            {
                id: 2,
                title: 'Throw some frogs at an old person',
                description: '...',
                createdAt: new Date()
            }
        ];
    }
}