import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import solarpanel from "../../images/solar-panel.png";
import plant from "../../images/plant.png";
import ecotag from "../../images/eco-tag.png";
import windturbine from "../../images/wind turbine.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SDG15(){
  const classes = useStyles();

  return ( 
    <List className={classes.root} style = {{marginLeft: '600px', marginTop: '180px'}}>
      <ListItem>
        <img className='img' src={solarpanel} alt='soda can' />
        <ListItemText primary="Partner 1" secondary="Telephone: xxx-xxxxxxx" />
      </ListItem>
      <ListItem>
        <img className='img' src={plant} alt='soda can' />
        <ListItemText primary="Partner 2" secondary="Telephone: xxx-xxxxxxx" />
      </ListItem>
      <ListItem>
        <img className='img' src={ecotag} alt='soda can' />
        <ListItemText primary="Partner 3" secondary="Telephone: xxx-xxxxxxx" />
      </ListItem>
      <ListItem>
        <img className='img' src={windturbine} alt='soda can' />
        <ListItemText primary="Partner 4" secondary="Telephone: xxx-xxxxxxx" />
      </ListItem>
    </List>
  );
}