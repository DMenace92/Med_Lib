import React, {useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import MedNavBar from '../../NavBarComponent/MedNavBar'
import { Grid, Paper, TextField, Button } from '@mui/material';
import './EditDrug.css'

function EditDrug(props) {
    // const params = useParams()
    const [drugName, setDrugName] = useState('')
    const [medDose, setMedDose] = useState('')
    const [medUnit, setMedunit] = useState('')
    const [medForm, setMedForm] = useState('')
    const [drugGeneric, setDrugGeneric] = useState('')
    const [drugClass, setDrugClass] = useState('')
    const [FDAAproved, setFDAAproved] = useState('')

    console.log(props.drugName, "edit drug")
        return (
            <div className="EditDrugMainWrapper">
            <Grid className="EditDrugMainContainer">
                <Paper className="EditDrugMainPaper" elevation={6}>
                    <form 
                    // onSubmit={handleSubmit}
                    >
                        <h2>Edit Drug</h2>
                        <TextField
                        placeholder={props.drugName}
                            label="Drug Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugName}
                            onChange={(e) => setDrugName(e.target.value)}
                        />
                        <TextField
                        placeholder={props.medDose}
                            label="Drug Dose"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={medDose}
                            onChange={(e) => setMedDose(e.target.value)}

                        />
                        <TextField
                        placeholder={props.medUnit}
                            label="Drug Unit"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={medUnit}
                            onChange={(e) => setMedunit(e.target.value)}

                            // onChange={(e) => setDrugShape(e.target.value)}
                        />
                        <TextField
                        placeholder={props.form}
                            label="Drug Form"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={medForm}
                            onChange={(e) => setMedForm(e.target.value)}

                            // onChange={(e) => setDrugColor(e.target.value)}
                        />
                        <TextField
                            placeholder={props.generic}
                            label="generic"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugGeneric}
                            onChange={(e) => setDrugGeneric(e.target.value)}

                            // onChange={(e) => setDrugMark(e.target.value)}
                        />
                        <TextField
                        placeholder={props.dClass}
                            label="Drug Class"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugClass}
                            onChange={(e) => setDrugClass(e.target.value)}

                            // onChange={(e) => setDrugImage(e.target.value)}
                        />
                        <TextField
                          placeholder={props.FDAAproved}
                            label="FDA Approved"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={FDAAproved}
                            onChange={(e) => setFDAAproved(e.target.value)}

                            // onChange={(e) => setDrugImage(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
            
            // <div className="mainDrugEditWrapper">
               
            //     <Paper elevation={6} className="drugEditContainer">
                   
            //         <div className="editDrugInputHolder">
            //         <label>Drug Name:  </label>
            //         <input placeholder={props.drugName} className="drugEditInput">
            //         </input>
            //         <label>Drug Dose:</label>
            //         <input placeholder={props.medDose} className="drugEditInput">
            //         </input>
            //         <label>Drug Unit:</label>
            //         <input placeholder={props.medUnit} className="drugEditInput">
            //         </input>
            //         <label>Drug Form:</label>
            //         <input placeholder={props.form} className="drugEditInput">
            //         </input>
            //         <label>Drug Generic:</label>
            //         <input placeholder={props.generic} className="drugEditInput">
            //         </input>
            //         <label>Drug Class:</label>
            //         <input placeholder={props.dClass} className="drugEditInput"> 
            //         </input>
            //         <label>Drug FDA Approved:</label>
            //         <input className="drugEditInput">
            //         </input>
            //         <Link to="..">Go Back</Link>
            //         </div>
            //     </Paper>
            // </div>
            
        )
    
}
export default EditDrug