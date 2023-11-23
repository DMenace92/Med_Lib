import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MedNavBar from '../NavBarComponent/MedNavBar';
import EditDrug from './editComponents/EditDrug';
import EditDS from './editComponents/EditDS';
import EM from './editComponents/EditManufacture';
import AM from './editComponents/ManufactureMainPage';
import ADS from '../../Containers/DrugContainers/CreateDrugSpecs'
import { Grid, Paper } from '@mui/material';

import axios from 'axios';

import './EditMed.css';
import test from './EditMed.css'

const EditMed = (props) => {
    const { drugId } = useParams();
    const [buttonHolder, setButtonHolder] = useState('EditDrug');
    const [currentDrug, setCurrentDrug] = useState([]);
const [isActive, setIsActive]=useState(false)


      useEffect(() => {
    const fetchSingleDrug = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/fetch/drug/${drugId}`);
        setCurrentDrug(response.data);
      } catch (error) {
        console.error('Error fetching drug:', error);
      }
    };

    fetchSingleDrug();
  }, [drugId]);
console.log(currentDrug)

    const _onClick = ({ target }) => {
        setButtonHolder(target.value);
    };

    const ViewA = (newProp) => {
        switch (newProp) {
            case 'EditDrug':
                return <EditDrug {...currentDrug}/>;
            case 'EditDS':
                return <EditDS {...currentDrug} />;
            case 'AddManufacture':
                return <AM {...currentDrug}/>;
            case 'AddDrugSpecs':
                return <ADS {...currentDrug}/>;
            // case 'EditManufacture':
            //     return <EM />;
            default:
                
                return null;
        }
    };
    // console.log(props.drug)
    return (
        <div>
            <MedNavBar />
            {/* <h1>{drugId}</h1>
            <div>
                    <h1>  {currentDrug.drugName}</h1>

                </div> */}
            <div className="EditSidePannel">
                
                {/* {drugs.map((item)=>(
                    <li>{item.drugName}</li>
                ))} */}
              
                <br />
                {/* <Paper elevation={6} className="SidePannelElements"> */}
                    <button 
                    id="EDButtonStyle"  type="button" name="buttonHandler" value="EditDrug" onClick={_onClick}>
                        EditDrug
                    </button>
                {/* </Paper> */}

                {/* <Paper elevation={6} className="SidePannelElements"> */}
                    <button id="EDButtonStyle"  type="button" name="buttonHandler" value="EditDS" onClick={_onClick} >Edit DS</button>
                {/* </Paper> */}
                {/* <Paper elevation={6} className="SidePannelElements"> */}
                    {/* <button id="EDButtonStyle"  type="button" name="buttonHandler" value="EditManufacture" onClick={_onClick}>
                        Edit Manufacture
                    </button> */}
                {/* </Paper> */}
                {/* <Paper elevation={6} className="SidePannelElements"></Paper> */}
                <br />
                <hr></hr>
                <br />
                {/* <Paper elevation={6} className="SidePannelElements"> */}
                    <button id="EDButtonStyle" type="button" name="buttonHandler" value="AddManufacture" onClick={_onClick}>
                        AddManufacture
                    </button>
                    <button id="EDButtonStyle" type="button" name="buttonHandler" value="AddDrugSpecs" onClick={_onClick}>
                        AddDrugSpecs
                    </button>
                {/* </Paper> */}
                {/* <Paper elevation={6} className="SidePannelElements"></Paper> */}
                {/* <Paper elevation={6} className="SidePannelElements"></Paper> */}
                <br />
                <br />
                <br />
                <br />
            </div>
            <div>{ViewA(buttonHolder)}</div>
        </div>
    );
};

export default EditMed;






