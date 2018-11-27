const predictReducer = (state = {}, action) => {
    switch(action.type) {
        case 'PREDICT':
            console.log('Data: ', action.data)
            state.price = 543000
            return {...state};
        default:
            return state;
    }
}

  export default predictReducer;