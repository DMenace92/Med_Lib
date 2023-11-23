//create drug
export const CREATE_DRUG_SUCCESS = "CREATE_DRUG_SUCCESS"
const createDrugSuccess = (drug) => ({ type: CREATE_DRUG_SUCCESS, payload: drug })

export const CREATE_DRUG_LOADING = "CREATE_DRUG_LOADING"
const createDrugLoading = () => ({ type: CREATE_DRUG_LOADING })

export const CREATE_DRUG_ERROR = "CREATE_DRUG_ERROR"
const createDrugError = () => ({ type: CREATE_DRUG_ERROR })

//fetch single drug
export const FETCH_DRUG_SUCCESS = "FETCH_DRUG_SUCCESS"
const fetchDrugSuccess = (drug) => ({ type: FETCH_DRUG_SUCCESS, payload: drug })

export const FETCH_DRUG_LOADING = "FETCH_DRUG_LOADING"
const fetchDrugLoading = () => ({ type: FETCH_DRUG_LOADING })

export const FETCH_DRUG_ERROR = "FETCH_DRUG_ERROR"
const fetchDrugError = () => ({ type: FETCH_DRUG_ERROR })

//update 
export const UPDATE_DRUG_SUCCESS = "UPDATE_DRUG_SUCCESS"
const updateDrugSuccess = (drug) => ({ type: UPDATE_DRUG_SUCCESS })

export const UPDATE_DRUG_LOADING = "UPDATE_DRUG_LOADING"
const updateDrugLoading = () => ({ type: UPDATE_DRUG_LOADING })

export const UPDATE_DRUG_ERROR = "UPDATE_DRUG_ERROR"
const updateDrugError = () => ({ type: UPDATE_DRUG_ERROR })


//delete
export const DELETE_DRUG_SUCCESS = "DELETE_DRUG_SUCCESS"
const deleteDrugSuccess = (drug) => ({ type: DELETE_DRUG_SUCCESS })

export const DELETE_DRUG_LOADING = "DELETE_DRUG_LOADING"
const deleteDrugLoading = () => ({ type: DELETE_DRUG_LOADING })

export const DELETE_DRUG_ERROR = "DELETE_DRUG_ERROR"
const deleteDrugError = () => ({ type: DELETE_DRUG_ERROR })

//thunk functions 

// create Drug Thunk

export const createDrug = (drug) => dispatch => {
    dispatch(
        createDrugLoading()

    )
    fetch('http://localhost:9000/create/drug', {
        method: "POST",
        body: JSON.stringify(drug),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(drug => {
            dispatch(
                createDrugSuccess(drug)

            )
        })
        .catch(err => {
            dispatch(
                createDrugError(err)

            )
        })

}

//fetch Drug thunk
export const fetchDrugs = (drug) => dispatch => {
    dispatch(
        fetchDrugLoading()
    )
    fetch('http://localhost:9000/fetch/drugs', {
        method: "GET",
        body: JSON.stringify(drug),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(drug => {
            dispatch(
                fetchDrugSuccess(drug)
            )
        })
        .catch(err => {
            dispatch(
                fetchDrugError(err)
            )
        })
}
export const fetchSingleDrug = (drug) => dispatch => {
    dispatch(
        fetchDrugLoading()
    )
    fetch('http://localhost:9000/fetch/drug/:id', {
        method: "GET",
        body: JSON.stringify(drug),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(drug => {
            dispatch(
                fetchDrugSuccess(drug)
            )
        })
        .catch(err => {
            dispatch(
                fetchDrugError(err)
            )
        })
}
//update Drug Thunk
export const updateDrug = (drug) => dispatch => {
    dispatch(
        updateDrugLoading()

    )
    fetch('http://localhost:9000/update/drug/:_id', {
        method: "PATCH",
        body: JSON.stringify(drug),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(drug => {
            dispatch(
                updateDrugSuccess(drug)

            )
        })
        .catch(err => {
            dispatch(
                updateDrugError(err)

            )
        })

}

//Delete Drug Thunk
export const deleteDrug = (drug) => dispatch => {
    dispatch(
        deleteDrugLoading()

    )
    fetch('http://localhost:9000/delete/drug/:_id', {
        method: "DELETE",
        body: JSON.stringify(drug),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(drug => {
            dispatch(
                deleteDrugSuccess(drug)

            )
        })
        .catch(err => {
            dispatch(
                deleteDrugError()

            )
        })

}