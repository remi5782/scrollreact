import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import WebIcon from '../images/web.svg';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
// import WebIcon from '../images/web.svg';

export default function SimpleCard({iconLabel,iconColor,footerColor,title,description}) {
    const useStyles = makeStyles({
        card: {
          minWidth: 275
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
        iconStyle:{
          fontSize: '4rem',
          color: iconColor
        },
        cardFooter:{
            background: footerColor
        },
        description:{
            minHeight: '5rem'
        }
      });
  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  return (
    <Card className={classes.card}>
      <CardContent>
      <i className={`${iconLabel} ${classes.iconStyle}`}></i>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <i>alias</i>
        </Typography>
        <Typography  className={classes.description} variant="body2" component="p">
          {description}
          <br />
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter}>

      </CardActions>
    </Card>
  );
}