import {connect} from 'react-router';
import DrugMfr from '../../Components/EditArea/editComponents/AddManufacture'
import {createDrugMF} from '../../Actions/DrugMfrActions';


const mapStateToProps = ({drugMF})=>{
    return{
        drugMF:drugMF
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        createDrugMF:(drugMF)=>{
            dispatch(createDrugMF(drugMF))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrugMfr)