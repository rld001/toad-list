import ReactDOM from 'react-dom';
import React from 'react';

import ModalLayout from './ModalLayout';
import ModalLayoutView from './view/ModalLayoutView.jsx';
import config from './ModalLayout.config';

export default class ModalLayoutController extends ModalLayout {
    constructor() {
        super();
    }

    renderView(isOpen, closeCallBack) {
        const props = {
            isOpen: isOpen,
            closeCallBack: () => closeCallBack()
        }

        ReactDOM.render(<ModalLayoutView {...props}/>, document.getElementById('root-modal'));
    }
}