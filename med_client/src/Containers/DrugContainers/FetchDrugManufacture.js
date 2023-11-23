import {connect} from 'react-redux'
import ManufactureMainPage from '../../Components/EditArea/editComponents/ManufactureMainPage'
import { fetchDrugMF } from '../../Actions/DrugMfrActions'


const mapStateToProps =({drugMF})=>{
    return{
        drugMF:drugMF
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchDrugMF:(drugMF)=>{
            dispatch(fetchDrugMF(drugMF))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManufactureMainPage)