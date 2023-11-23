//create action

export const CREATE_DS_SUCCESS = "CREATE_DS_SUCCESS"
const createDSSuccess = (ds) => ({ type: CREATE_DS_SUCCESS, payload: ds })

export const CREATE_DS_LOADING = "CREATE_DS_LOADING"
const createDSLoading = () => ({ type: CREATE_DS_LOADING })

export const CREATE_DS_ERROR = "CREATE_DS_ERROR"
const createDSError = () => ({ type: CREATE_DS_ERROR })

//fetch actions

export const FETCH_DS_SUCCESS = "FETCH_DS_SUCCESS"
const fetchDSSuccess = (ds) => ({ type: FETCH_DS_SUCCESS, payload: ds })

export const FETCH_DS_LOADING = "FETCH_DS_LOADING"
const fetchDSLoading = () => ({ type: FETCH_DS_LOADING })

export const FETCH_DS_ERROR = "FETCH_DS_ERROR"
const fetchDSError = () => ({ type: FETCH_DS_ERROR })

//update actions

// export const UPDATE_DS_SUCCESS = "UPDATE_DS_SUCCESS"
// const updateDSSuccess = (ds) => ({ type: UPDATE_DS_SUCCESS, payload: drug })

// export const UPDATE_DS_LOADING = "UPDATE_DS_LOADING"
// const updateDSLoading = (ds) => ({ type: UPDATE_DS_LOADING })

// export const UPDATE_DS_ERROR = "UPDATE_DS_ERROR"
// const updateDSError = (ds) => ({ type: UPDATE_DS_ERROR })

//delete actions

// export const DELETE_DS_SUCCESS = "DELETE_DS_SUCCESS"
// const deleteDSSuccess = (ds) => ({ type: DELETE_DS_SUCCESS, payload: drug })

// export const DELETE_DS_LOADING = "DELETE_DS_LOADING"
// const deleteDSLoading = (ds) => ({ type: DELETE_DS_LOADING })

// export const DELETE_DS_ERROR = "DELETE_DS_ERROR"
// const deleteDSError = (ds) => ({ type: DELETE_DS_ERROR })



//thunk

//create ds thunk

export const createDS = (ds) => dispatch => {
    dispatch(
        createDSLoading()
    )
    fetch('http://localhost:9000/create/drugSpecs/:id', {
        method: "POST",
        body: JSON.stringify(ds),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(ds => {
            dispatch(
                createDSSuccess(ds)
            )
        })
        .catch(err => {
            dispatch(
                createDSError(err)
            )
        })
}
export const fetchDS = (ds) => dispatch => {
    dispatch(
        fetchDSLoading()
    )
    fetch('http://localhost:9000/fetch/drug_specs', {
        method: "GET",
        body: JSON.stringify(ds),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(ds => {
            dispatch(
                fetchDSSuccess(ds)
            )
        })
        .catch(err => {
            dispatch(
                fetchDSError(err)
            )
        })
}