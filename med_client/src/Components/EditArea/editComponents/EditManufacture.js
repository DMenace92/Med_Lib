import React, { useState } from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material';
import './AddManufacture.css';

const EditManufacture = () => {
    const [NDCNumber, setNDCNumber] = useState('');
    const [manufactureName, setManufactureName] = useState('');
    const [drugShape, setDrugShape] = useState('');
    const [drugColor, setDrugColor] = useState('');
    const [drugMark, setDrugMark] = useState('');
    // const [drugImage, setDrugImage] = useState('');

    const handleSubmit = () => {
        // Add your logic to handle form submission
    };

    return (
        <div className="AddMfrMainWrapper">
            <Grid className="AddMfrMainContainer">
                <Paper className="AddMfrMainPaper" elevation={6}>
                    <form onSubmit={handleSubmit}>
                        <h2>Edit Drug Manufacture</h2>
                        <TextField
                            label="NDC Number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={NDCNumber}
                            onChange={(e) => setNDCNumber(e.target.value)}
                        />
                        <TextField
                            label="Manufacture Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={manufactureName}
                            onChange={(e) => setManufactureName(e.target.value)}
                        />
                        <TextField
                            label="Drug Shape"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugShape}
                            onChange={(e) => setDrugShape(e.target.value)}
                        />
                        <TextField
                            label="Drug Color"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugColor}
                            onChange={(e) => setDrugColor(e.target.value)}
                        />
                        <TextField
                            label="Drug Mark"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugMark}
                            onChange={(e) => setDrugMark(e.target.value)}
                        />
                        {/* <TextField
                            label="Drug Image"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugImage}
                            onChange={(e) => setDrugImage(e.target.value)}
                        /> */}
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default EditManufacture;











// import React, { useState, useEffect } from 'react';
// import {useParams} from 'react-router-dom'
// import { Grid, Paper } from '@mui/material';
// import './AddManufacture.css';

// const AddManufacture = (props) => {
//     const [NDCNumber, setNDCNumber] = useState('');
//     const params = useParams()

//     // useEffect(()=>{
//     //     props.createDrugMF();
//     //     console.log(props)
//     // },[props])

//     return (
        
//         <div className="AddMfrMainWrapper">
            
//             <Grid className="AddMfrMainContainer">
//                 <Paper className="AddMfrMainPaper" elevation={6}>
//                     <label>Add Drug Manufacture</label>
//                     <label>NDC Number</label>
//                     <input
//                         className="AddMfrInputs"
//                         value={NDCNumber}
//                         onChange={(e) => setNDCNumber(e.target.value)}
//                     ></input>
//                     <label>Manufacture Name</label>
//                     <input className="AddMfrInputs"></input>
//                     <label>drug Shape</label>
//                     <input className="AddMfrInputs"></input>
//                     <label>Drug Color</label>
//                     <input className="AddMfrInputs"></input>
//                     <label>Drug Mark</label>
//                     <input className="AddMfrInputs"></input>
//                     <label>Drug Image</label>
//                     <input className="AddMfrInputs"></input>
//                 </Paper>
//             </Grid>
//         </div>
//     );
// };

// export default AddManufacture;















// // import React, { Component } from 'react';
// // import { Grid, Paper } from '@mui/material'
// // import './AddManufacture.css'
// // // import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
// // //idea have data "state" stored in a local storage for return work delete local storage once submit button selected.
// // class AddManufacture extends Component {
// //     state = {
// //         NDCNumber: '',

// //     }
// //     render() {
// //         // const drugItem = useSelector(state => state.drugItem)
// //         // console.log(drugItem)
// //         console.log(this)
// //         return (
// //             <div className="AddMfrMainWrapper">

// //                 <Grid className="AddMfrMainContainer" >

// //                     <Paper className="AddMfrMainPaper" elevation={6}>
// //                         <label>Add Drug Manufacture</label>
// //                         <label>NDC Number</label>
// //                         <input className="AddMfrInputs"></input>
// //                         <label>Manufacture Name</label>
// //                         <input className="AddMfrInputs"></input>
// //                         <label>drug Shape</label>
// //                         <input className="AddMfrInputs"></input>
// //                         <label>Drug Color</label>
// //                         <input className="AddMfrInputs"></input>
// //                         <label>Drug Mark</label>
// //                         <input className="AddMfrInputs"></input>
// //                         <label>Drug Image</label>
// //                         <input className="AddMfrInputs"></input>
// //                     </Paper>
// //                 </Grid>

// //             </div>
// //         )
// //     }
// // }
// // export default AddManufacture;



// /*
//     NDCNumber: {
//         type: String,
//         // required: true,
//     },
//     mfrName: {
//         type: String,
//         // required: true,
//     },
//     drugShape: {
//         type: String,
//     },
//     drugColor: {
//         type: String,
//     },
//     drugMark: {
//         type: String
//     },
//     drugImg: {
//         type: Buffer,
//         type: String,
//     }

// */

// import React, { Component } from 'react';

// class EditManufacture extends Component {
//     render() {
//         return (
//             <div>
//                 edit the manufacture
//             </div>
//         )
//     }
// }
// export default EditManufacture;