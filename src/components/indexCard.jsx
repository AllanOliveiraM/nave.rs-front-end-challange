import React          from 'react'

import DeleteIcon     from '../components/deleteIcon'
import EditIcon       from '../components/editIcon'
import ReactImageAppear from 'react-image-appear';

import '../styles/indexCards.css'
import '../tools/grid.css'


class IndexCard extends React.Component {
    constructor(props) {
    super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){}

    render(){

        function callBackCardClicked(){
            alert('clicked!')
        }

        // let cardContentId = this.props.cardContent.id
        let cardContentName = this.props.cardContent.name
        // let cardContentAdmissionDate = this.props.cardContent.admission_date
        let cardContentJobRole = this.props.cardContent.job_role
        // let cardContentUserId = this.props.cardContent.user_id
        // let cardContentProject = this.props.cardContent.project
        // let cardContentBirthdate = this.props.cardContent.birthdate

        // let cardContentUrl = this.props.cardContent.url
        let cardContentUrl = 'https://source.unsplash.com/280x280/?people,person,men'

        let CardContentResolved = (

            <section className='col col-4 col-3 col-2'>

                <div className='card-index-container'>
                    <ReactImageAppear 
                        src={ cardContentUrl }
                        onClick={ callBackCardClicked }
                    />
                    <div className='card-index-footer'>
                        <p>{ cardContentName }</p>
                        <p>{ cardContentJobRole }</p>
                        <DeleteIcon />
                        <EditIcon />
                    </div>
                </div>
            </section>
        )

        return CardContentResolved
    }
}


export default IndexCard
