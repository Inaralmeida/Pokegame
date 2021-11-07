const Reducer = (state, action)=>{
    switch (action.type) {
        case 'NEW-USER':
            return{
                ...state,
                user:{
                    username: action.payload
                }
            }    
        default:
            break;
    }
}

export default Reducer