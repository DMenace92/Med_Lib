import React, { useEffect } from 'react';
import MedNavBar from "../NavBarComponent/MedNavBar"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom'
import { Grid, Paper } from '@mui/material'
import './DrugLibrary.css'

const DrugLibrary = (props) => {
    useEffect(() => {
        props.fetchDrugs();
        // props.fetchSingleDrug();
    }, []);

    return (
        <div className="drugLibraryMainComponent">
            <MedNavBar />
            the search continues
            <div className="DrugSearchFilter">
                <input></input>
            </div>
            <div className="drugLinraryScrollableView">
                <div className="drugLibraryMainContainer">
                    {props.drug && props.drug.map(drugs =>
                        <Grid className="GridDesignIdea">
                            <Paper className="PaperMedDesign" elevation={24}>
                                <Card className="drugLibraryMainWrapper" key={drugs}>
                                    <CardMedia
                                        sx={{ height: 50 }}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="green iguana"
                                    />
                                    <CardContent className="drugLibraryCardContent">
                                        <Typography className="dNameStyle" gutterBottom variant="h6" component="div">
                                            Drug Name: {drugs.drugName}
                                        </Typography>
                                        <Typography className="dNameStyle" gutterBottom variant="h6" component="div">
                                            Drug Dose: {drugs.medDose} {drugs.medUnit} {drugs.form}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {drugs.therapy}
                                        </Typography>
                                        <Typography className="drugLibraryTypography" variant="body2" color="text.secondary">
                                            {drugs.treatment}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className="linkButtonEditMed">
                                        <Button>
                                            <Link className="drugLibraryLink" to={`editmed/${drugs._id}`}>Edit</Link>
                                        </Button>
                                        <Button>
                                            <Link className="drugLibraryLink" to={`drugdoc/${drugs._id}`}>docs</Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DrugLibrary;




















// import React, { Component } from 'react';
// import MedNavBar from "../NavBarComponent/MedNavBar"
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Link,useLocation  } from 'react-router-dom'
// import { Grid, Paper } from '@mui/material'
// import './DrugLibrary.css'


// class DrugLibrary extends Component {
//     componentDidMount() {
//         this.props.fetchDrugs()
//         // this.props.fetchSingleDrug()
//     }
//     render() {
//         return (
//             <div className="DrugLibraryMainComponent">
//                 <MedNavBar />
//                 the search contiues
//                 <div className="DrugSearchFilter">
//                     <input></input>
//                 </div>
//                 <div className="drugLinraryScrollableView">
//                     <div className="drugLibraryMainContainer">
//                         {this.props.drug && this.props.drug.map(drugs =>

//                             <Grid className="GridDesignIdea">
//                                 <Paper className="PaperMedDesign" elevation={24}>
//                                     <Card className="drugLibraryMainWrapper" key={drugs} 
//                                     // sx={{ maxWidth: 345 }}
//                                     >
//                                         <CardMedia
//                                             sx={{ height: 100 }}
//                                             image="/static/images/cards/contemplative-reptile.jpg"
//                                             title="green iguana"
//                                         />
//                                         <CardContent className="drugLibraryCardContent">
//                                             <Typography className="dNameStyle" gutterBottom variant="h5" component="div">
//                                                 Drug Name: {drugs.drugName}
//                                             </Typography>
//                                             <Typography className="dNameStyle" gutterBottom variant="h5" component="div">
//                                                 Drug Dose: {drugs.medDose} {drugs.medUnit} {drugs.form}
//                                             </Typography>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 {drugs.therapy}
//                                             </Typography>
//                                             <Typography className="drugLibraryTypography" variant="body2" color="text.secondary">
//                                                 {drugs.treatment}
//                                             </Typography>
//                                         </CardContent>
//                                         <CardActions className="linkButtonEditMed">
//                                             <Button >
//                                                 <Link className="drugLibraryLink" to={`editmed/${drugs._id}`}>Edit</Link></Button>
//                                             <Button>
//                                             <Link className="drugLibraryLink" to={`drugdoc/${drugs._id}`}>docs</Link>
//                                                </Button>
//                                         </CardActions>
//                                     </Card>
//                                 </Paper>
//                             </Grid>
//                         )}
//                     </div>
//                 </div>


//             </div>
//         )
//     }
// }
// export default DrugLibrary;