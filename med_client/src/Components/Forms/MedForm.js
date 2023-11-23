import React, { Component } from "react"
import MedNavBar from "../NavBarComponent/MedNavBar"
import CSVMU from './CSVUpload/CSVMedUpload'

import "./MedForm.css"
// const MedForm = () => {
class MedForm extends Component {
    // const { drugName, medDose, medUnit, form, generic, NDCNumber, mfrName, drugShape, drugColor, drugMark, drugImg, dClass, therapy, treatment, FDAAproved } = useState
    state = {
        drugName: '', medDose: "", medUnit: '', medForm: '', generic: false,
        //  NDCNumber: '', mfcName: '', drugShape: '', drugColor: '', drugMark: '', drugImg: '',
        dClass: '', therapy: '', treatment: '', FDAAproved: false
    }
    _onSubmit = (e) => {
        // e.preventDefault();
        this.props.createDrug(this.state)
        this.setState({
            drugName: '', medDose: "", medUnit: '', medForm: '', generic: false,

            dClass: '', therapy: '', treatment: '', FDAAproved: false
        })

    }


    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    render() {
        console.log(this.props.drug)
        console.log(this.state.drugName)



        return (
            <div>
                <MedNavBar/>
            <div className="mainDrugFormWrapper">
            <CSVMU/>

                <div className="medicationViewPanel">
                    <h1 className="medicationViewPanelTitle">Medication view</h1>
                    {/* in this will contain the med name dose unit and from  */}
                    <h4>Medication: {this.state.drugName} {this.state.medDose} {this.state.medUnit}  {this.state.medForm} {this.state.generic}</h4>
                    {/* will have the terapy and treatment information */}
                    <h6>Drug use: {this.state.therapy} {this.state.treatment}</h6>
                    {/* <h6>Manufacture spacifics: {this.state.mfcName} {this.state.NDCNumber} {this.state.drugShape} {this.state.drugMark} {this.state.drugColor} {this.state.pillImage}</h6> */}
                    {/* regulation signifiers */}
                    <h6>Drug restriction: {this.state.FDAAproved} {this.state.dClass}</h6>
                </div>
                <div className="mainFormContainer">
                    <form onSubmit={this._onSubmit}>
                        <div className="DrugDataForm">
                            <label for="string1" name="drugName" >Drug Name:</label>
                            <input className="inputFormDesign" type="text" id="string1" name="drugName" onChange={this.handleChange}></input><br />

                            <label for="number">Medication Dose:</label>
                            <input className="inputFormDesign" type="number" id="number" name="medDose" onChange={this.handleChange}></input><br />

                            <label for="string2">Medication Unit :</label>
                            {/* <input type="text" id="string2" name="string2" onChange={this.handleChange}></input> */}

                            <select className="inputFormDesign" name="medUnit" onChange={this.handleChange} >
                                <option value=""></option>
                                <option value="G">G</option>
                                <option value="Mg">Mg</option>
                                <option value="Mcg">Mcg</option>
                                <option value="g">g</option>
                                <option value="Ml">ml</option>
                            </select>
                            <label>custom Med Unit</label>
                            <input onChange={this.handleChange} name="medUnit"></input>



                            <br />

                            <label for="string3">Medication Form:</label>
                            <select className="inputFormDesign" name="medForm" onChange={this.handleChange} >
                                <option value=""></option>
                                <option value="Tablet">Tablet</option>
                                <option value="Capsule">Capsule</option>
                                <option value="Liquid">Liquid</option>
                                <option value="Injectable">Injectable</option>
                            </select>
                            {/* <input className="inputFormDesign" type="text" id="string3" name="string3" onChange={this.handleChange}></input> */}
                            <br />
                        </div>

                        <div className="DrugDataForm">


                            <label for="boolean1">Medication Generic:</label>
                            <input className="inputFormDesign" type="checkbox" id="boolean1" name="generic" value={true} onChange={this.handleChange}></input><br />

                            {/* <label for="string1">Manufacture NDC Number:</label>
                            <input className="inputFormDesign" type="text" id="string1" name="NDCNumber" onChange={this.handleChange}></input><br />

                            <label for="string2">Manufacture Name:</label>
                            <input className="inputFormDesign" type="text" id="string2" name="mfcName" onChange={this.handleChange}></input><br />

                            <label for="string2">Pill Shape:</label>
                            <input className="inputFormDesign" type="text" id="string2" name="pillShape" onChange={this.handleChange}></input><br />

                            <label for="string3">Pill Color:</label>
                            <input className="inputFormDesign" type="text" id="string3" name="drugColor" onChange={this.handleChange}></input><br />
                            <label for="string3">Pill Mark:</label>
                            <input className="inputFormDesign" type="text" id="string3" name="drugMark" onChange={this.handleChange}></input><br />

                            <label for="buffer">Pill Image:</label>
                            <textarea className="inputFormDesign" id="buffer" name="drugImage" onChange={this.handleChange}></textarea><br />
        */}
                        </div>
                        <div className="DrugDataForm">

                            <label for="string3">Drug Class:</label>
                            <select className="inputFormDesign" name="dClass" onChange={this.handleChange} >
                                <option value=""></option>
                                <option value="CI">CI</option>
                                <option value="CII">CII</option>
                                <option value="CIII">CIII</option>
                                <option value="CIV">CIV</option>
                                <option value="CV">CV</option>
                                <option value="Legend">Legend</option>
                                <option value="OTC">OTC</option>
                            </select>
                            {/* <input className="inputFormDesign" type="text" id="string3" name="dClass" onChange={this.handleChange}></input><br /> */}

                            {/* <label for="boolean2">State Regulated:</label>
                            <input className="inputFormDesign" type="checkbox" id="boolean2" name="boolean2"></input><br /> */}

                            <label for="string1">Therapy</label>
                            <textarea className="inputFormDesign" type="text" id="string1" name="therapy" rows="4" cols="50" onChange={this.handleChange}></textarea>
                            <label for="string1">Treatment</label>
                            <textarea className="inputFormDesign" type="" id="string1" name="treatment" rows="4" cols="50" onChange={this.handleChange}></textarea>
                            <br />

                            <label for="boolean3">FDA Approved:</label>
                            <input className="inputFormDesign" type="checkbox" id="boolean3" name="FDAAproved" value={true} onChange={this.handleChange}></input><br />

                        </div>
                        <div >

                            <button className="buttonDesign" type="submit" value="Submit">Submit</button>
                        </div>
                    </form >
                </div>
                {/* <CSVMU/> */}

            </div >
            </div>
        )
    }
}
export default MedForm;