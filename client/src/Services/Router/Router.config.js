import HomeLayoutController from '../../Components/HomeLayout/HomeLayout.controller';
import AboutLayoutController from '../../Components/AboutLayout/AboutLayout.controller';

export default {
    layouts: {
        home: {
            controller: HomeLayoutController,
            transitions: {
                about: 'about'
            }
        },
        about: {
            controller: AboutLayoutController,
            transitions: {
                home: 'home'
            }
        }
    }
}