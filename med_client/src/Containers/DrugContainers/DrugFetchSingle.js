import { connect } from 'react-redux'
import EditMed from '../../Components/EditArea/EditMed'

// import AddManufacture from '../../Components/EditArea/editComponents/AddManufacture'
import { fetchSingleDrug } from '../../Actions/DrugActions'


const mapStateToProps = ({ drug }) => {
    return {
        drug: drug.drug

    }
}

const mapDispatchToProps = dispatch => {
    return {
      
        fetchSingleDrug: (drugs) => {
            dispatch(fetchSingleDrug(drugs))
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditMed)