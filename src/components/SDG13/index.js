import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import plasticbottle from "../../images/plastic-bottle.png";
import soda_can from "../../images/soda_can.png";
import glass_bin from "../../images/glass-bin.png";
import paperImg from "../../images/paper.png";
import plastic_bin from "../../images/plastic-bin.png";
import metal from "../../images/metal.png";
import organic from "../../images/organic.png";
import battery from "../../images/battery.png";
import monitor from "../../images/monitor.png";
import armchair from "../../images/armchair.png";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SDG13(){
  const classes = useStyles();

  return (
 <div className='materialrow'> 
 <h2>Material types</h2>
  <div className="materialcolumn"> 
     <List className={classes.root} style = {{marginTop: '80px', textalign: 'justify'}}>
      <ListItem>
        <img className='img' src={plasticbottle} alt='plastic bottle' />
        <ListItemText primary="Cooking Oil" secondary="The cooking oil ends up clogging the drains making drainage to be impossible. This results in overflows on the streets as well as irreversible damage to the sewer pipes." />
      </ListItem>
      <ListItem>
        <img className='img' src={soda_can} alt='soda can' />
        <ListItemText primary="Can" secondary="Recycling aluminum cans saves a considerable amount of energy; it also reduces carbon dioxide emissions and the amount of waste headed into landfills. Collecting your cans for recycling is an important step you can take to help the environment." />
      </ListItem>
      <ListItem>
        <img className='img' src={glass_bin} alt='glass bin' />
        <ListItemText primary="Glass" secondary="Glass recycling is the processing of waste glass into usable products. Glass that is crushed and ready to be remelted is called cullet." />
      </ListItem>
      <ListItem>
        <img className='img' src={paperImg} alt='paper' />
        <ListItemText primary="Paper" secondary="The process of waste paper recycling most often involves mixing used/old paper with water and chemicals to break it down." />
      </ListItem>
      <ListItem>
        <img className='img' src={plastic_bin} alt='plastic bin' />
        <ListItemText primary="Plastic" secondary="Plastic recycling is the process of recovering scrap or waste plastic and reprocessing the material into useful products. Compared with lucrative recycling of metal, and similar to the low value of glass recycling, plastic polymers recycling is often more challenging because of low density and low value." />
      </ListItem>
      </List>
    </div>
    <div className="materialcolumn"> 
    <List className={classes.root} style = {{marginTop: '80px', textalign: 'justify'}}>
      <ListItem>
        <img className='img' src={metal} alt='metal' />
        <ListItemText primary="Metal" secondary="Metals are valuable materials that can be recycled again and again without degrading their properties. Scrap metal has value, which motivates people to collect it for sale to recycling operations." />
      </ListItem>
      <ListItem>
        <img className='img' src={organic} alt='organic' />
        <ListItemText primary="Organic" secondary="Organics recycling is the recycling of organic material into compost, a special soil amendment. Composting happens naturally and requires very little energy input." />
      </ListItem>
      <ListItem>
        <img className='img' src={battery} alt='baterry' />
        <ListItemText primary="Battery" secondary="Batteries contain a number of heavy metals and toxic chemicals and disposing of them by the same process as regular household waste has raised concerns over soil contamination and water pollution." />
      </ListItem>
      <ListItem>
        <img className='img' src={monitor} alt='monitor' />
        <ListItemText primary="Electronics" secondary="Many old electronic devices contain toxic substances that include lead, mercury, cadmium, beryllium, polyvinyl chloride, and chromium. When e-waste is tossed into landfills, these chemicals leach into the soil, polluting the ground water as well as the air." />
      </ListItem>
      <ListItem>
        <img className='img' src={armchair} alt='armchair' />
        <ListItemText primary="Furniture" secondary="Recycling of old furniture saves much energy as they do not require any processing. It saves natural resources and reduces the level of harmful substances that are released in air." />
      </ListItem>
    </List>
    </div>
    </div>
  );
}