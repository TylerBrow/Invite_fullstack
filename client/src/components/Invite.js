import React, {Component} from 'react'
import {getUser, userGoing, userNotGoing, getGoing, getNotGoing} from '../actions/actions'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'


class Invite extends Component {

    componentDidMount() {
        getUser()
        getGoing()
        getNotGoing()
    }

    handlerGoing = (e) => {
        // e.preventDefault()

        userGoing(this.props.User)
            
        getUser()
    }

    handlerNotGoing = (e) => {
        // e.preventDefault()

        userNotGoing(this.props.User)
        
        getUser()
    }

    render() {
        return (
            <div id='container'>
                <div className='status'>
                  <p><Link to='/Going'>Going: {this.props.going.length}</Link></p><p><Link to='/NotGoing'>Not Going: {this.props.notGoing.length}</Link></p>
                    
                        {   
                                <div className='user'>
                                
                                    <div id='picbox'>
                                        <span><img src={`${this.props.User.picture}`} /></span> 
                                    </div>
                                    <div id='info'>
                                        <ul>
                                            <li>Name: {this.props.User.fname} {this.props.User.lname}</li>
                                            <li>Phone: {this.props.User.phone}</li>
                                            <li>Email: {this.props.User.email}</li>
                                        </ul>
                                    </div>
                                </div>
                        }

                </div>
                <div id='rsvp'>
                    <button onClick={this.handlerGoing}>Yes</button>
                    <button onClick={this.handlerNotGoing}>No</button>                            
                </div>
            </div>
        )
    }
}

function MapStateToProps(appState) {
    console.log(appState)
    return {
        
        User: appState.User,
        going: appState.Going,
        notGoing: appState.NotGoing

    }
}
export default connect(MapStateToProps)(Invite)