import React from 'react';
import {Typography} from '@material-ui/core';
// import GridList from './Utils/GridList';
export default function GeneralSection({ title, subtitle, dark, id, activeContent }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <div className={"section-content" + (activeContent ? " active" : "")} id={id}>
                <Typography variant="title" component="h1">
                    I'm Remy and am a Front-End Web Developer
                </Typography>
                {/* <h1>{title}</h1> */}
                {/* <GridList/> */}
            </div>
        </div>
    );
}