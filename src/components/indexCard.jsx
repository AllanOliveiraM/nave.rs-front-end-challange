import React            from 'react'
import styled, { keyframes } from 'styled-components'

import DeleteIcon       from '../components/deleteIcon'
import EditIcon         from '../components/editIcon'


import '../styles/indexCards.css'
import '../tools/grid.css'


class IndexCard extends React.Component {
    constructor(props) {
    super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){}

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

        let SlidedRight = styled.div`
            opacity: 0;
            transform: translateX(-30px);
            animation: ${slideRightKeyFrame} 0.3s ease-in-out ${ this.props.animationDuration }s both;
        `

        let CardContentResolved = (

            <section className='col col-4 col-3 col-2'>

                <SlidedRight>
                    <div className='card-index-container'>
                        <div className='image-card-container'>
                            <ReactImageAppear 
                                src={ cardContentUrl }
                                onClick={ () => {this.props.callBackCardClicked(cardContentId)} }
                                animationDuration={ `${this.props.animationDuration}s` }
                                className='zoom-in card-image-style'
                            />
                        </div>

                        <div className='card-index-footer'>
                            <p>{ cardContentName }</p>
                            <p>{ cardContentJobRole }</p>
                            <DeleteIcon 
                                onClick={ () => {this.props.callBackCardDelete(cardContentId)} }
                            />
                            <EditIcon
                                onClick={ () => {this.props.callBackCardEdit(cardContentId)} }
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
