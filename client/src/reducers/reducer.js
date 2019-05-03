const initialState = {
  User : [],
  Going: [],
  NotGoing: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_USER':
      return {...state, User: action.payload}
    case 'GET_GOING':
      return {...state, Going: action.payload}
     case 'GET_NOTGOING':
      return {...state, NotGoing: action.payload}
    default:
      return state
  }
}