import {FETCH_MONSTERS_START, FETCH_MONSTERS_FAILURE, FETCH_MONSTERS_SUCCESS} from '../actions/monsterActions'

const initialState = {
    monsters: [''],
    error: '',
    isFetching: false
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MONSTERS_START:
            return {
                ...state, 
                error: '',
                isFetching: true
            };
        case FETCH_MONSTERS_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                monsters: action.payload
            }
        default:
            return initialState
    }
}

export default reducer