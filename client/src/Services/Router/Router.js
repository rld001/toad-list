import config from './Router.config';
import Logger from '../Logger/Logger';

const logger = new Logger('Router');

export default class Router {
    constructor() {
        this.config = config;
        
        this.activeLayout = null;
    }

   async start() {
       try {
            this.activeLayout = this.config.layouts.home;
            this.activeLayout.display = new this.activeLayout.controller();
            await this.activeLayout.display.resolveState();
            await this.activeLayout.display.init();
            this.activeLayout.display.renderView();
       } catch (error) {
            logger.error('Failed startup');
       }
   }

    async switchLayout(key) {
        try {
            const layout = this.config.layouts[key];
            if(!this.activeLayout.transitions || !this.activeLayout.transitions[key]) {
                throw 'No transition available';
            }
            if(!layout) {
                throw 'No layout found';
            }   
            layout.display = new layout.controller();
            if(!await layout.display.resolveState()) {
                throw 'Could not resolve state';
            }
            await layout.display.init();
            layout.display.renderView();
            this.activeLayout = layout;
        } catch (error) {
            logger.error(`Failed to switch layout ${error}`);
            return await this.update();
        }
    }

    async update() {
        logger.log('Running Update');
        await this.activeLayout.display.update();
        return this.activeLayout.display.renderView();
    }
}