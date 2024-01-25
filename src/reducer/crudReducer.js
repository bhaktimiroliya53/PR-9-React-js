let value = {
    users: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
}

const curdReducer = (state = value, action) => {
    switch (action.type) {
        case 'adduser':
            let all = [...state.users, action.payload];
            localStorage.setItem('user', JSON.stringify(all))
            return {
                ...state,
                users: all
            }
        case 'deleteuser' : 
            let id = action.payload;
            let deleteReocrd = state.users.filter((val) => {
                return val.id !== id;
            })
            localStorage.setItem('user' , JSON.stringify(deleteReocrd));
            return{
                ...state,
                users : deleteReocrd
            }
        default : 
            return state
    }
}

export default curdReducer;