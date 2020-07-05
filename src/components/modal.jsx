import React from 'react'
import Modal from 'react-modal';


Modal.setAppElement('#modals')


class IndexModal extends React.Component {

    render(){
        return (
            <Modal
                closeTimeoutMS={400}
                isOpen={ this.props.modalIsOpen }
                style={ this.props.customStyles }
            >
                { this.props.children }
            </Modal>
        )
    }
}


export default IndexModal
