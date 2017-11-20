import React from 'react';

export default class ModalView extends React.Component {
    constructor() {
        super();

    }

    render() {
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };

        const modalStyle = {
            backgroundColor: '#fff',
            borderRadious: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
        };

        const { closeBtnText, submitBtn, submitBtnText } = this.props;

        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
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