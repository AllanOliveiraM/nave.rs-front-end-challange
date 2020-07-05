import React            from 'react'


class Modal extends React.Component {
    constructor(props) {
    super(props)

        this.state = {
            isModalOpen: false
        }

        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
    }

    handleModalOpen(){
        this.setState({
            isModalOpen: true
        })
    }

    handleModalClose(){
        this.setState({
            isModalOpen: false
        })
    }

    render(){
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}


export default Modal
