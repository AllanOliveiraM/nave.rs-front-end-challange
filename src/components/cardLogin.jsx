import React from 'react'

import '../styles/login_components.css'


class Card extends React.Component {

  render(){
    return(
      <section className='card-container'>
        { this.props.children }
      </section>
    )
  }
}
  
export default Card
