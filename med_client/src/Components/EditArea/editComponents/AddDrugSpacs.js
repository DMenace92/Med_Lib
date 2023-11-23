import React, { useState } from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import './AddDrugSpecs.css'

const AddDrugSpacs = (props) => {
    const params = useParams();
    const [formData, setFormData] = useState({
        drugId:params.drugId,
        labelWarning: '',
        drugInteraction: '',
        drugIndication: '',
        drugTreatment: '',
        drugSideEffects: '',
        patientInformation: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await props.createDS(formData);
            setFormData({
                drugId:params.drugId,
                labelWarning: '',
                drugInteraction: '',
                drugIndication: '',
                drugTreatment: '',
                drugSideEffects: '',
                patientInformation: '',
            });
        } catch (error) {
            console.error('Error submitting data:', error);
            // Handle errors if needed
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     createDS(formData);
    //     setFormData({
    //         drugId: params.drugId,
    //         labelWarning: '',
    //         drugInteraction: '',
    //         drugIndication: '',
    //         drugTreatment: '',
    //         drugSideEffects: '',
    //         patientInformation: '',
    //     });
    // };

        return (
            
            <div className="AddDSMainWrapper">
                
            <Grid className="AddDSMainContainer">
                <Paper className="AddDSMainPaper" elevation={6}>
                    <form onSubmit={handleSubmit}>
                        <h2>Add Drug Specifics</h2>
                        <TextField
                            label="Label Warning"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="labelWarning"
                            value={formData.labelWarning}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Drug Interaction"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="drugInteraction"
                            value={formData.drugInteraction}
                            onChange={handleChange}
                        />
                        
                        <TextField
                            label="Drug Indication"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="drugIndication"
                            value={formData.drugIndication}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Drug Treatment"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="drugTreatment"
                            value={formData.drugTreatment}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Drug Side Effects"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="drugSideEffects"
                            value={formData.drugSideEffects}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Patient Information"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="patientInformation"
                            value={formData.patientInformation}
                            onChange={handleChange}
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
export default AddDrugSpacs;