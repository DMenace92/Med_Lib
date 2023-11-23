import React, { useState, useEffect } from 'react';
import AddManufacture from '../../../Containers/DrugContainers/AddDrugManufacture';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';
import EditManufacture from './EditManufacture';
import "./ManufactureMainPage.css"
import axios from 'axios';

const ManufactureMainPage = (props) => {
    const {drugId} = useParams()
    const [buttonHolder, setButtonHolder] = useState('AddMFR');
    const [mfrCurrentDrug, setMfrCurrentDrug] = useState([]);

    const params = useParams();

    const _onClick = ({ target }) => {
        setButtonHolder(target.value);
    };


    useEffect(() => {
        const fetchDrugMF = async () => {
          try {
            const Mfresponse = await axios.get(`http://localhost:9000/fetch/drugMfr/${drugId}`);
            setMfrCurrentDrug(Mfresponse.data);
          } catch (error) {
            console.error('Error fetching drug:', error);
          }
        };
    
        fetchDrugMF();
      }, [drugId]);
      console.log(mfrCurrentDrug)

    const MFRView = (newProps) => {
        switch (newProps) {
            case 'AddMFR':
                return <AddManufacture {...mfrCurrentDrug}/>;
            case 'EditMFR':
                return <EditManufacture  />;
            default:
                return null;
        }
    };

    return (
        
        <div className='MMPMainContainer'>
            <button
                id="EDButtonStyle"
                type="button"
                name="buttonHandler"
                value="AddMFR"
                onClick={_onClick}
            >
                Add Manufacture
            </button>
            <button
                id="EDButtonStyle"
                type="button"
                name="buttonHandler"
                value="EditMFR"
                onClick={_onClick}
            >
                Edit Manufacture
            </button>
            <div className="forcedDesign">{MFRView(buttonHolder)}</div>

            <div className="drugMFScrollableView">
                <div className="drugMFMainContainer">
                    {mfrCurrentDrug &&
                        mfrCurrentDrug.map((drugsMF) => (
                            <Grid className="GridDesignDrugMF" key={drugsMF._id}>
                                <Paper className="PaperMedDesignDrugMF" elevation={24}>
                                    <Card className="drugMFMainWrapper">
                                        <CardMedia
                                            sx={{ height: 25 }}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="green iguana"
                                        />
                                        <CardContent className="drugMFCardContent">
                                            <Typography
                                                className="dNameStyle"
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Manufacture Name: {drugsMF.mfrName}
                                            </Typography>
                                            <Typography
                                                className="dNameStyle"
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                NDC Number: {drugsMF.NDCNumber}
                                            </Typography>
                                            <Typography
                                                className="dNameStyle"
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                S=Drug Shape: {drugsMF.drugShape}
                                            </Typography>
                                            <Typography
                                                className="dNameStyle"
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Drug Color: {drugsMF.drugColor}
                                            </Typography>
                                            <Typography
                                                className="dNameStyle"
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Drug Marking: {drugsMF.drugMark}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Paper>
                            </Grid>
                        ))}
                </div>
            </div>

            
        </div>
    );
};

export default ManufactureMainPage;



// import React, {useState, useEffect} from 'react';
// import AddManufacture from '../../../Containers/DrugContainers/AddDrugManufacture';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Link, useParams } from 'react-router-dom'
// import { Grid, Paper } from '@mui/material'
// import EditManufacture from './EditManufacture';

// const ManufactureMainPage =(props)=>{
//     const [buttonHolder, setButtonHolder] = useState('');
//     const params = useParams()
//     const _onClick =({target})=>{
//         setButtonHolder(target.value);
//     }

//     useEffect(()=>{
//         props.fetchDrugMF()
//         console.log(props.fetchDrugMF, "test props")
//         console.log(props, "props only")
//     },[])

//     const MFRView = (newProps)=>{
//         switch(newProps){
//             case 'AddMFR':
//                 return <AddManufacture/>;
//             case 'EditMFR':
//                 return <EditManufacture/>;
//             default:
//                 return null;
//         }

//     }
//     return(
//         <div>
//             {console.log()}
//             {/* <AddManufacture/> */}
//             <button
//             id="EDButtonStyle"  type="button" name="buttonHandler" value="AddMFR" onClick={_onClick}>
//             Add Manufacture
            
//             </button>
//             <button
//             id="EDButtonStyle"  type="button" name="buttonHandler" value="EditMFR" onClick={_onClick}>
//             Add Manufacture
            
//             </button>

//            <div className="drugLinraryScrollableView">
//                 <div className="drugLibraryMainContainer">
//                     {props.drugMF && props.drugMF.map(drugsMF =>
//                         <Grid className="GridDesignIdea">
//                             <Paper className="PaperMedDesign" elevation={24}>
//                                 <Card className="drugLibraryMainWrapper" key={drugsMF}>
//                                     <CardMedia
//                                         sx={{ height: 100 }}
//                                         image="/static/images/cards/contemplative-reptile.jpg"
//                                         title="green iguana"
//                                     />
//                                     <CardContent className="drugLibraryCardContent">
//                                         <Typography className="dNameStyle" gutterBottom variant="h5" component="div">
//                                             Drug Name: {drugsMF.NDCNumber} 
//                                         </Typography>
                                     
//                                     </CardContent>
                                 
//                                 </Card>
//                             </Paper>
//                         </Grid>
//                     )}
//                                   </div>
//             </div> 
            
            
// <div>{MFRView(buttonHolder)}</div>
//         </div>
//     )
// }
// export default ManufactureMainPage