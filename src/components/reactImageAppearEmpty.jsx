import React            from 'react'


class ReactImageAppearEmpty extends React.Component {
    render(){
        return (
            <img className={ this.props.className } onClick={ this.props.onClick } src={this.props.src} alt={ this.props.alt } />
        )
    }
}


export default ReactImageAppearEmpty
