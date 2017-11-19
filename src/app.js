import MainController from './Components/Main/MainController';

import './assets/css/style.css';

export default class App {
        constructor() {
            this.configureServices();
        }
        
        configureServices() {
            
        }
        
        run() {
            const main = new MainController();
            main.renderView();
        }
}