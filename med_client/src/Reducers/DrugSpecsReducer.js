import { CREATE_DS_SUCCESS, CREATE_DS_LOADING, CREATE_DS_ERROR, FETCH_DS_SUCCESS, FETCH_DS_LOADING, FETCH_DS_ERROR } from "../Actions/DrugSpecsActions"

const initState = {
    ds: [],
    drugSpecsLoading: false,
    drugSpecsError: false,
}
const drugSpecsReduceres = (state = initState, action) => {
    switch (action.type) {
        case CREATE_DS_LOADING:
            return {
                ...state,
                drugSpecsLoading: true
            }
        case CREATE_DS_SUCCESS:
            return {
                ds: [...state.ds, action.payload]
            }
        case CREATE_DS_ERROR:
            return {
                ...state,
                drugSpecsError: true
            }
        case FETCH_DS_LOADING:
            return {
                ...state,
                drugSpecsLoading: true
            }
        case FETCH_DS_SUCCESS:
            return {
                ...state,
                ds: action.payload
            }
        case FETCH_DS_ERROR:
            return {
                ...state,
                drugSpecsError: true
            }
        default:
            return state
    }
}
export default drugSpecsReduceres