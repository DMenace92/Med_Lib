import { CREATE_DRUGMF_SUCCESS, CREATE_DRUGMF_LOADING, CREATE_DRUGMF_ERROR, FETCH_DRUGMF_SUCCESS, FETCH_DRUGMF_LOADING, FETCH_DRUGMF_ERROR } from "../Actions/DrugMfrActions";

const initState = {
    drugMF: [],
    drugMFLoading: false,
    drugMFError: false,
}
const drugMFReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_DRUGMF_LOADING:
            return {
                ...state,
                drugMFLoading: true
            }
        case CREATE_DRUGMF_SUCCESS:
            return {
                drugMF: [...state.drugMF, action.payload]
            }
        case CREATE_DRUGMF_ERROR:
            return {
                ...state,
                drugMFError: true
            }
        case FETCH_DRUGMF_LOADING:
            return {
                ...state,
                drugMFLoading: true
            }
        case FETCH_DRUGMF_SUCCESS:
            return {
                ...state,
                drugMF: action.payload
            }
        case FETCH_DRUGMF_ERROR:
            return {
                ...state,
                drugMFError: true
            }
            default:
                return{
                    state
                }
    }
}
export default drugMFReducer;