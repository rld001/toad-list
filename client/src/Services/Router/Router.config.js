import HomeLayoutController from '../../Components/HomeLayout/HomeLayout.controller';
import ModalLayoutController from '../../Components/ModalLayout/ModalLayout.controller';

export default {
    layouts: {
        home: {
            controller: HomeLayoutController,
            transitions: {}
        },
        modal: {
            controller : ModalLayoutController,
            transitions: {}
        }
    }
}