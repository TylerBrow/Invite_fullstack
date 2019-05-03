import axios from 'axios'
import store from '../store';



export function getUser() {
    axios.get('https://randomuser.me/api').then(resp => {
        var info = resp.data.results[0]
        
  store.dispatch({
        type: 'GET_USER',
        payload: {
            fname: info.name.first,
            lname: info.name.last,
            picture: info.picture.large,
            email: info.email,
            phone: info.phone
        }
})})
}
export function userGoing(User) {
    axios.post('/api/Going', {
        User: User
    }).then(() => {
        getGoing()
    })
}

export function userNotGoing(User) {
    axios.post('/api/NotGoing', {
        User: User
    }).then(() => {
        getNotGoing()
    })
}

export function getGoing() {
    axios.get('/api/Going').then(resp => {
        store.dispatch({
            type:'GET_GOING',
            payload: resp.data
        })
    }) 
}

export function getNotGoing() {
    axios.get('/api/NotGoing').then(resp => {
       
        store.dispatch({
            type:'GET_NOTGOING',
            payload: resp.data
        })
    }) 
}