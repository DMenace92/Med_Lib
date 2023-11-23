import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@mui/material'
import './MedNavBar.css';

// const MedNavBar = () => {
class MedNavBar extends Component {
    render() {
        return (
            <Grid >
                <Paper className='mainNavbar' elevation={24}>
                    <nav className="navbar">
                        <Link to="/" className="navbar-logo">
                            PillPkt
                        </Link>
                        <Grid>

                            <ul className="navbar-menu">
                                <Paper className="paperDesign" elevation="6">
                                    <li className="navbar-item">
                                        <Link to="/" className="navbar-link">
                                            Home
                                        </Link>
                                    </li>
                                </Paper>
                                <Paper className="paperDesign" elevation="6">
                                    <li className="navbar-item">
                                        <Link to="/addDrug" className="navbar-link">
                                            Add Drug
                                        </Link>
                                    </li>
                                </Paper>
                                <Paper className="paperDesign" elevation="6">
                                    <li className="navbar-item">
                                        <Link to="/services" className="navbar-link">
                                            Services
                                        </Link>
                                    </li>
                                </Paper>
                                <Paper className="paperDesign" elevation="6">
                                    <li className="navbar-item">
                                        <Link to="/contact" className="navbar-link">
                                            Contact
                                        </Link>
                                    </li>
                                </Paper>
                            </ul>
                        </Grid>
                    </nav >
                </Paper>
            </Grid>
        )
    };
};

export default MedNavBar;



// import React from "react";
// import CircleButton from "./CircleButton";
// import './MedNavBar.css'

// const MedNavBar = () => {
//     return (
//         <div className="MedNavBarContainer">
//             <CircleButton />

//             <div className="MedNavBarWrapper">

//             </div>
//         </div>
//     )
// }
// export default MedNavBar;