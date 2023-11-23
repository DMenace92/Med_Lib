import React,{useState} from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material';
import './EditDS.css'

const EditDS =()=>{
    const [labelWarn, setLableWarn] = useState('');
    const [drugInteraction, setDrugInteraction] = useState('');
    const [drugIndication, setDrugIndication] = useState('');
    const [drugTreatmant, setDrugTreatment] = useState('');
    const [drugSideEffects, setDrugSideEffects] = useState('');
    const [patientInfo, setPatientInfo] = useState('');

   
    

        return (
            <div className="EditDSMainWrapper">
            <Grid className="EditDSMainContainer">
                <Paper className="EditDSMainPaper" elevation={6}>
                    <form 
                    // onSubmit={handleSubmit}
                    >
                        <h2>Edit Drug Spacifics</h2>
                        <TextField
                            label="Label Warning"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={labelWarn}
                            // onChange={(e) => setNDCNumber(e.target.value)}
                        />
                        <TextField
                            label="Drug Interaction"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugInteraction}
                            // onChange={(e) => setManufactureName(e.target.value)}
                        />
                        <TextField
                            label="Drug Indication"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugIndication}
                            // onChange={(e) => setDrugShape(e.target.value)}
                        />
                        <TextField
                            label="Drug Treatmant"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugTreatmant}
                            // onChange={(e) => setDrugColor(e.target.value)}
                        />
                        <TextField
                            label="Drug Side Effects"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={drugSideEffects}
                            // onChange={(e) => setDrugMark(e.target.value)}
                        />
                        <TextField
                            label="Patient Informantion"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={patientInfo}
                            // onChange={(e) => setDrugImage(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>

        )
    
}
export default EditDS