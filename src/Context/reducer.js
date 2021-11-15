const Reducer = (state, action)=>{
    switch (action.type) {
        case 'NEW-USER':
            return{
                ...state,
                user:{
                    username: action.payload
                }
            }    
        case 'ADD-POKEMON-BAG-AND-POKEDEX':
            return{
                ...state,
                user:{
                    bag:{
                        pokemons: [...state.user.bag.pokemons,  action.payload]
                    }
                },
                pokedex: [...state.pokedex,  action.payload]
            }    
        default:
            break;
    }
}

export default Reducer