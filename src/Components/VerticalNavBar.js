import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Link, animateScroll as scroll } from "react-scroll";
import Section from "./Section";
import GSection from './GeneralSection';
import AboutSection from './AboutSection';  
import ThingsIdo from './ThingsIdo';
import dummyText from "../DummyText";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    //padding: theme.spacing(3),
    //marginTop: '2%'
  },
  bigAvatar: {
      width: '200px',
      height: '200px',
      margin: '8%',
      background: '#1976d2'
  }
}));

const mockObjWrapper = [{key: 'section1',value: 'Section 1'},{key: 'section2',value: 'Section 2'},{key: 'section3',value: 'Section 3'},{key: 'section4',value: 'Section 4'},{key: 'section5',value: 'Section 5'}]

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [activeSection, setActiveSection] = React.useState('section1');
  
//   const renderListItem = (sectionLabel, sectionValue) =>{
//     return (
//         <Link
//                 activeClass="active"
//                 to="section1"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 onClick={()=>setActiveSection(sectionValue)}
//                 onSetActive={(to)=> setActiveSection(to)}
//               >
//                 {sectionLabel}
//               </Link>
//     );
// }
  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
           Thanks for being here
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Avatar alt="Lets See" src="/prof.jpg" className={classes.bigAvatar} >
            CK
        </Avatar>
        <Divider />
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <List>
          {['Home', 'About', 'Services', 'Skills', 'Education','Experience'].map((text, index) => (
            <ListItem  button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <Link
                activeClass="active"
                to={text}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={()=>setActiveSection(text)}
                onSetActive={(to)=> setActiveSection(to)}
              >
                {text.toUpperCase()}
              </Link>
            </ListItem>
          ))}
          
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <GSection
          title="Home"
          subtitle={dummyText}
          dark={true}
          id="Home"
          activeContent = {activeSection === 'Home'}

        />
        <AboutSection
          title="About"
          subtitle={dummyText}
          dark={false}
          id="About"
          activeContent = {activeSection === 'About'}
        />
        <ThingsIdo
          title="Services"
          subtitle={dummyText}
          dark={true}
          id="Services"
          activeContent = {activeSection === 'Services'}
        />
        <Section
          title="Skills"
          subtitle={dummyText}
          dark={false}
          id="Skills"
          activeContent = {activeSection === 'Skills'}
        />
        <Section
          title="Education"
          subtitle={dummyText}
          dark={true}
          id="Education"
          activeContent = {activeSection === 'Education'}
        />
      </main>
    </div>
  );
}
