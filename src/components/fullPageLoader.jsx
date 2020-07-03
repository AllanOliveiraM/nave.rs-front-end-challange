import React          from 'react'

import '../styles/index.css'

class FullPageLoader extends React.Component {

    render(){
        return (
            <div className='loader-container in-animation'>
                <div className='loader'></div>
            </div>
        )
    }
}


export default FullPageLoader
