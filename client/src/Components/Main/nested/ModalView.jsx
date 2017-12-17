import React from 'react';
import './Modal.css';

export default class ModalView extends React.Component {
    constructor() {
        super();

    }

    render() {
        const { closeBtnText, submitBtn, submitBtnText } = this.props;

        return (
            <div className="backdrop">
                <div className="modal">
                    {this.props.children}

                    <div className="footer">
                        <button onClick={() => this.props.onClose()}>
                            {closeBtnText ? closeBtnText : 'Close'}
                        </button>
                        { this.props.submitBtn && (
                            <button onClick={() => this.props.onSubmit()}>
                                {submitBtnText ? submitBtnText : 'Submit'}
                            </button>                                
                        )}
                    </div>
                </div>
            </div>                                                   
        )
    }
}