import * as types from './actionTypes'

const initialState = {
    data : [],
    error:  null,
    loading: false,
}

const Reducer = (state = initialState, action: any) => {
    switch(action.type) {
        // RECIPE REDUCER
        case types.FETCH_RECIPE_START: {
            return {
                ...state,
                loading: true,                
            }
        }
        case types.FETCH_RECIPE_SUCCESS: {
            return {
                ...state,
                data: action,
                loading: false,                
            }
        }
        case types.FETCH_RECIPE_FAIL: {
            return {
                ...state,
                loading: false,
                erorr: action?.payload
            }
        }
        default:
            return state;
    }
}

export default Reducer