import axios from "axios";

export const FETCH_MONSTERS_START = 'FETCH_MONSTERS_START';
export const FETCH_MONSTERS_SUCCESS = 'FETCH_MONSTERS_SUCCESS';
export const FETCH_MONSTERS_FAILURE = 'FETCH_MONSTERS_FAILURE';

export const getMonsters = () => dispatch => {
    dispatch({type: FETCH_MONSTERS_START});
    axios.get('https://mhw-db.com/monsters')
        .then(resp => {
            console.log(resp)
            dispatch({
                type: FETCH_MONSTERS_SUCCESS,
                payload: resp.data
            })})
        .catch(err => console.log(err))
}