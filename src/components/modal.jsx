import React from 'react'
import Modal from 'react-modal';


const customStyles = {
    content : {
        // top                   : '50%',
        // left                  : '50%',
        // right                 : 'auto',
        // bottom                : 'auto',
        // marginRight           : '-50%',
        // transform             : 'translate(-50%, -50%)'
    }
}


Modal.setAppElement('#modals')


class IndexModal extends React.Component {

    render(){
        return (
            <Modal
                isOpen={ this.props.modalIsOpen }
                style={ customStyles }
            >
                { this.props.children }
            </Modal>
        )
    }
}


export default IndexModal
