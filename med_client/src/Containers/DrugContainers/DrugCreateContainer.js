import { connect } from 'react-redux';
import MedForm from '../../Components/Forms/MedForm';
import { createDrug } from '../../Actions/DrugActions'

const mapStateToProps = ({ drug }) => {
    return {
        drug: drug
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDrug: (drug) => {
            dispatch(createDrug(drug))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MedForm)
