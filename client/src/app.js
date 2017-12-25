import config from './app.config';
import Context from './Services/Context/Context';
import DataService from './Services/DataService/DataService';
import Router from './Services/Router/Router';

import './assets/css/style.css';
import Logger from './Services/Logger/Logger';

const logger = new Logger('Application');

export default class App {
        constructor() {
            this.config = config;
            
            this.ctx = Context;
            this.ctx['dataService'] = new DataService();
            this.ctx['router'] = new Router();
        }
        
        run() {
            const router = this.ctx.router;
            router.start();
        }
}