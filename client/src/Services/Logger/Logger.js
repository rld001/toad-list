export default class Logger {
    constructor(name) {
        return {
            name: name,
            log: (message) => {
                console.log(`[${name}] ${message}`);
            },
            error: (message) => {
                console.error(`[${name}] ${message}`);
            }
        }
    }
}