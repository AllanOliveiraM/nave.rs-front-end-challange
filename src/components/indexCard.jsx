import React                 from 'react'
import styled, { keyframes } from 'styled-components'

import DeleteIcon            from '../components/deleteIcon'
import EditIcon              from '../components/editIcon'
import Modal                 from '../components/modal'


import '../styles/indexCards.css'
import '../tools/grid.css'


class IndexCard extends React.Component {
    constructor(props) {
    super(props)

        this.state = {
            loaded: false,
            modalShowMoreIsOpen: false
        }    

        this.showMore = this.showMore.bind(this)
        this.showMoreClose = this.showMoreClose.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    showMore(id){
        this.setState({
            modalShowMoreIsOpen: true
        })
    }

    showMoreClose(){
        this.setState({
            modalShowMoreIsOpen: false
        })
    }


    componentDidMount(){
        this.setState({
            loaded: true
        })
    }

    render(){
        let cardContentName = this.props.cardContent.name

        let cardContentJobRole = this.props.cardContent.job_role

        let cardContentUrl = this.props.cardContent.url

        let cardContentId = this.props.cardContent.id

        let ReactImageAppear = this.props.ReactImageAppear

        let slideRightKeyFrame = keyframes`
            0% {
                opacity: 0;
                transform: translateX(-30px);
            }
            85% {
                opacity: 1;
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        `
        let SlidedRight
        let animationDurationResolved = this.props.animationDuration

        if(!this.state.loaded){
            
            SlidedRight = styled.div`
                opacity: 0;
                transform: translateX(-30px);
                animation: ${slideRightKeyFrame} 0.3s ease-in-out ${ this.props.animationDuration }s both;
            `
        } else {
            animationDurationResolved = 0
            SlidedRight = styled.div`
                opacity: 1;
            `
        }

        let CardContentResolved = (
            <section className='col col-4 col-3 col-2'>
                <Modal
                    modalIsOpen={ this.state.modalShowMoreIsOpen }
                >
                    <p>OKOK</p>
                    <button onClick={ this.showMoreClose } type='button'>Close</button>
                </Modal>
                <SlidedRight>
                    <div className='card-index-container'>
                        <div className='image-card-container'>
                            <ReactImageAppear 
                                src={ cardContentUrl }
                                onClick={ () => {this.showMore(cardContentId)} }
                                animationDuration={ `${animationDurationResolved}s` }
                                className='zoom-in card-image-style'
                            />
                        </div>

                        <div className='card-index-footer'>
                            <p>{ cardContentName }</p>
                            <p>{ cardContentJobRole }</p>
                            <DeleteIcon 
                                onClick={ () => {alert(cardContentId)} }
                            />
                            <EditIcon
                                onClick={ () => {alert(cardContentId)} }
                            />
                        </div>
                    </div>
                </SlidedRight>
            </section>
        )

        return CardContentResolved
    }
}


export default IndexCard
