import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getNotGoing} from '../actions/actions'


class NotGoing extends Component {

    componentDidMount() {
        getNotGoing()
    }

   
    render() {
        return (
            <div className='container'>
            {   
                this.props.NotGoing.map((going, i) => (
              
                <div key={"notGoing" + i} className='user'>
                
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
        
        NotGoing: appState.NotGoing

    }
}
export default connect(MapStateToProps)(NotGoing)