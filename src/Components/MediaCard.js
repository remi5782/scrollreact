import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import WebIcon from '../images/web.svg';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
// import WebIcon from '../images/web.svg';

export default function SimpleCard({activeContent = false,footerColor,additionalClass="",imageUrl,title,description}) {
    const [viewMore, setViewMore]= React.useState(false);
    const useStyles = makeStyles({
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        media:{
            height: 150,
            transform: 'scale(0.75)'
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
        description:{
            minHeight: '3rem'
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
    <Card className={'card' + (activeContent ? " active " : "") + additionalClass}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
        />
      <CardContent>
      
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography  className={classes.description} variant="body2" component="p">
          {description}
          <br />
          <p className={`moreContent ` + (viewMore? 'active' : '')}>There are more details  yet to be displayed</p>
        </Typography>
        <i onClick= {()=> setViewMore(!viewMore)}>...</i>
      </CardContent>
      <CardActions className={classes.cardFooter}>
            
            
      </CardActions>
    </Card>
  );
}