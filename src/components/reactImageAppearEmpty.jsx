import React            from 'react'


class ReactImageAppearEmpty extends React.Component {
    render(){
        return (
            <img onClick={ this.props.onClick } className={'in-animation'} src={this.props.src} alt={ this.props.alt } />
        )
    }
}


export default ReactImageAppearEmpty
