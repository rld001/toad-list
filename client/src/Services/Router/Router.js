import Context from '../Context/Context';
import config from './Router.config';
import Logger from '../Logger/Logger';

const logger = new Logger('Router');

export default class Router {
    constructor() {
        this.ctx = Context;
        this.config = config;

        //this.ctx.set('isModalOpen', false);
        //this.ctx.set('onModalClose', null);


        this.activeLayout = null;
        this.modalLayout = null;
    }

    async start() {
        try {
            this.activeLayout = await this.initLayout(this.config.layouts.home);
            this.modalLayout = await this.initLayout(this.config.layouts.modal);
            this.activeLayout.display.renderView();
            this.modalLayout.display.renderView();
        } catch (error) {
            logger.error(`Failed Startup: ${error}`);
        }
    }

    async initLayout(config) {
        try {
            const layout = config;
            layout.display = new layout.controller();
            if(!await layout.display.resolveState()) {
                throw 'Could not resolve layout state';
            }
            await layout.display.init();
            return layout;
        } catch (e) {
            throw e;
        }
    }

    /*async switchLayout(key) {
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
    }*/

    async update() {
        logger.log('Running Update');
        await this.activeLayout.display.update();
        await this.modalLayout.display.update();
        this.activeLayout.display.renderView();
        this.modalLayout.display.renderView();
    }
}