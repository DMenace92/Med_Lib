// import MedFrom from './Components/Forms/MedForm'
import DrugLibrary from "./Containers/DrugContainers/DrugFetchContainer"
import fetchSingleitem from "./Containers/DrugContainers/DrugFetchContainer"
import MedForm from './Containers/DrugContainers/DrugCreateContainer';
// import EditMed from './Components/EditArea/EditMed'
// import EditMed from "./Containers/DrugContainers/AddDrugManufacture";
// import EditMed from './Components/EditArea/EditMed'
import EditMed from './Containers/DrugContainers/DrugFetchSingle'
import DrugDoc from "./Components/DrugDocumentation/DrugDoc";
import { Route, Routes } from 'react-router-dom'

// import MedNavBar from './Components/NavBarComponent/MedNavBar'
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <MedNavBar /> */}
      <Routes>
        <Route path="/" element={<DrugLibrary />} />
        <Route path="/addDrug" element={<MedForm />} />
        {/* <Route path="/editmed" element={<fetchSingleitem />} /> */}

        <Route path={`/editmed/:drugId`} element={<EditMed />} />
        <Route path={'/drugdoc/:drugId'} element={<DrugDoc/>}/>
      </Routes>


    </div>
  );
}

export default App;
