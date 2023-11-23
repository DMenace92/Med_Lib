import { connect } from 'react-redux'
import DrugLibrary from '../../Components/DLibrary/DrugLibrary'

// import AddManufacture from '../../Components/EditArea/editComponents/AddManufacture'
import { fetchDrugs} from '../../Actions/DrugActions'


const mapStateToProps = ({ drug }) => {
    return {
        drug: drug.drug

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDrugs: (drugs) => {
            dispatch(fetchDrugs(drugs))
        },
   


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrugLibrary)