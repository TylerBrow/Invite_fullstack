import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getGoing} from '../actions/actions'


class Going extends Component {

    componentDidMount() {
        getGoing()
    }

    

    render() {
        return (
            <div className='container'>
            {   
                this.props.Going.map((going, i) => (
              
                <div key={"going" + i} className='user'>
                
                    <div id='picbox'>
                        <span><img src={`${going.User.picture}`} /></span> 
                    </div>
                    <div id='info'>
                        <ul>
                            <li>Name: {going.User.fname} {going.User.lname}</li>
                            <li>Phone: {going.User.phone}</li>
                            <li>Email: {going.User.email}</li>
                        </ul>
                    </div>
                </div>
            ))}
    </div>
        )
    }
}

function MapStateToProps(appState) {
    return {
        
        Going: appState.Going

    }
}
export default connect(MapStateToProps)(Going)