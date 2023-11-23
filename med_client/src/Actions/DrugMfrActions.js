//create drug Manufacture
export const CREATE_DRUGMF_SUCCESS = "CREATE_DRUGMF_SUCCESS"
const createDrugMFSuccess = (drugMF) => ({ type: CREATE_DRUGMF_SUCCESS, payload: drugMF })

export const CREATE_DRUGMF_LOADING = "CREATE_DRUGMF_LOADING"
const createDrugMFLoading = () => ({ type: CREATE_DRUGMF_LOADING })

export const CREATE_DRUGMF_ERROR = "CREATE_DRUGMF_ERROR"
const createDrugMFError = () => ({ type: CREATE_DRUGMF_ERROR })


//fetch drug Manufacture

export const FETCH_DRUGMF_SUCCESS = "FETCH_DRUGMF_SUCCESS"
const fetchDrugMFSuccess = (drugMF) => ({ type: FETCH_DRUGMF_SUCCESS, payload: drugMF })

export const FETCH_DRUGMF_LOADING = "FETCH_DRUGMF_LOADING"
const fetchDrugMFLoading = () => ({ type: FETCH_DRUGMF_LOADING })

export const FETCH_DRUGMF_ERROR = "FETCH_DRUGMF_ERROR"
const fetchDrugMFError = () => ({ type: FETCH_DRUGMF_ERROR })

//update drug Manufature

export const UPDATE_DRUGMF_SUCCESS = "UPDATE_DRUGMF_SUCCESS"
const updateDrugMFSuccess = (drugMF) => ({ type: UPDATE_DRUGMF_SUCCESS, payload: drugMF })

export const UPDATE_DRUGMF_LOADING = "UPDATE_DRUGMF_LOADING"
const updateDrugMFLoading = () => ({ type: UPDATE_DRUGMF_LOADING })

export const UPDATE_DRUGMF_ERROR = "UPDATE_DRUGMF_ERROR"
const updateDrugMFError = () => ({ type: UPDATE_DRUGMF_ERROR })

//delete drug Manufacture



//Thunk
//create thunk
export const createDrugMF = (drugMF) => dispatch => {
    dispatch(
        createDrugMFLoading()
    )
    fetch('http://localhost:9000/create/drugMfr/:id', {
        method: "POST",
        body: JSON.stringify(drugMF),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(drugMF => {
            dispatch(
                createDrugMFSuccess(drugMF)
            )
        })
        .catch(err => {
            dispatch(
                createDrugMFError(err)
            )
        })
}

//fetch thunk
export const fetchDrugMF = (drugMF) => dispatch => {
    dispatch(
        fetchDrugMFLoading()
    )

    fetch('http://localhost:9000/fetch/drugMfr/:drugId', {
        method: "GET",
        body: JSON.stringify(drugMF),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(drugMF => {
            dispatch(
                fetchDrugMFSuccess(drugMF)
            )
        })
        .catch(err => {
            dispatch(
                fetchDrugMFError(err)
            )
        })

}

//update thunk


//delete thunk


