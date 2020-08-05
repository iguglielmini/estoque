const INITIAL_STATE = {
    usersEmail: '',
    usersLogado: 0,
};

function usuarioReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'LOG_IN':
            return{
                ...state, usersLogado: 1, usersEmail: action.usersEmail 
            }
            case 'LOG_OUT':
                return{
                    ...state, usersLogado: 0, usersEmail: ''
                }
                default:
                    return state;
    }
}

export default usuarioReducer;