import React from 'react';
import {Typography} from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
// import GridList from './Utils/GridList';

export default function GeneralSection({ title, subtitle, dark, id, activeContent }) {
    React.useEffect(() => {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
      }, []);
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <div className={"section-content" + (activeContent ? " active" : "")} id={id}>
                <Typography variant="h4" component="h5">
                    I'm Remy and am a Front-End Web Developer and technology enthusiast who loves to do InnovativE works
                </Typography>
                {/* <h1>{title}</h1> */}
                {/* <GridList/> */}
            </div>
        </div>
    );
}