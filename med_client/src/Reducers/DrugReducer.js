import {
    CREATE_DRUG_SUCCESS, CREATE_DRUG_LOADING, CREATE_DRUG_ERROR, FETCH_DRUG_SUCCESS, FETCH_DRUG_LOADING, FETCH_DRUG_ERROR, UPDATE_DRUG_LOADING, UPDATE_DRUG_SUCCESS, UPDATE_DRUG_ERROR,

} from "../Actions/DrugActions"

const initState = {
    drug: [],
    drugLoading: false,
    drugError: false
}
const drugReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_DRUG_LOADING:
            return {
                ...state,
                drugLoading: true
            }
        case CREATE_DRUG_SUCCESS:
            return {
                drug: [...state.drug, action.payload]
            }
        case CREATE_DRUG_ERROR:
            return {
                ...state,
                drugError: true
            }
        case FETCH_DRUG_LOADING:
            return {
                ...state,
                drugLoading: true
            }
        case FETCH_DRUG_SUCCESS:
            return {
                ...state,
                drug: action.payload
            }
        case FETCH_DRUG_ERROR:
            return {
                ...state,
                drugError: true

            }
        case UPDATE_DRUG_LOADING:
            return {
                ...state,
                drugLoading: true
            }

        case UPDATE_DRUG_SUCCESS:
            return {
                drug: state.drug.filter(drug => drug._id !== action.payload._id)
            }

        case UPDATE_DRUG_ERROR:
            return {
                ...state,
                drugError: true
            }


        // case DELETE_DRUG_LOADING:
        //     return {
        //         ...state,
        //         drugLoading: true
        //     }
        // case DELETE_DRUG_SUCCESS:
        //     return {

        //     }
        // case DELETE_DRUG_ERROR:
        //     return {
        //         ...state,
        //         drugError: true

        //     }

        default:
            return state

    }
}
export default drugReducer