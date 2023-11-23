import {connect} from 'react-redux'
import DrugDS from '../../Components/EditArea/editComponents/AddDrugSpacs'
import {createDS} from '../../Actions/DrugSpecsActions'

const mapStateToProps = ({ds})=>{
    return{
        ds:ds
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        createDS:(ds)=>{
            dispatch(createDS(ds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrugDS)