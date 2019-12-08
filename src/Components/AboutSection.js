import React from 'react';
import {Typography} from '@material-ui/core';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import mockAOE from '../Utils/mockAOE';

// import GridList from './Utils/GridList';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: '3rem'
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export default function GeneralSection({ title, subtitle, dark, id, activeContent }) {
    const classes = useStyles();

    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <div className={"section-content" + (activeContent ? " active" : "")} id={id}>
            <Typography variant="overline" display="block" gutterBottom>
        About Me
      </Typography>
                <Typography variant='caption'>
                    I am software developer with strong experience of 7 years in developing Web Applications and Mobile App 
                </Typography>
                
      <Typography variant="h3">
        Areas of Expertise
      </Typography>
<Grid container className={classes.root} spacing ={2}>
    {mockAOE.map(data=> (
        <Grid item lg={3}  xs={12}
        >
        <Card
            activeContent={activeContent}
            {...data}
        />
        </Grid>
    ))}
        
   

</Grid>
      
      
                {/* <GridList/> */}
            </div>
        </div>
    );
}