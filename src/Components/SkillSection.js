import React from 'react';
import mockTID from '../Utils/mockSkills';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SkillCard from './SkillCard';
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
export default function SkillsIHave({ title, subtitle, dark, id, activeContent }){
    const classes = useStyles();
    return (
    <div className={"section"}>
            <div className={"section-content" + (activeContent ? " active" : "")} id={id}>
            <Typography variant="overline" display="block" gutterBottom>
        {/* Things I do  */}
      </Typography>
                <Typography variant='caption'>
                    {/* I am software developer with strong experience of 7 years in developing Web Applications and Mobile App  */}
                </Typography>
                
      <Typography variant="h3">
        My Skills are 
      </Typography>
        <Grid container className={classes.root}   spacing={2} gutterBottom> 
            {mockTID.map(data=> (
            <Grid item lg={3} xs={12}>
                <SkillCard activeContent={activeContent} additionalClass={'skillCard'} {...data}/>
            </Grid>))}
        </Grid>
    </div></div>
    )
}