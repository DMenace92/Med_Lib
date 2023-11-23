import {connect} from 'react-redux'
import AddManufacture from '../../Components/EditArea/editComponents/AddManufacture'
// import EditMed from '../../Components/EditArea/EditMed'
// import {fetchSingleDrug} from '../../Actions/DrugActions'
import { createDrugMF } from '../../Actions/DrugMfrActions'

const mapStateToProps = ({ drugMF }) => {
    return {
        drugMF: drugMF
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDrugMF: (drugMF) => {
            dispatch(createDrugMF(drugMF))
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddManufacture)