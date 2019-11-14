import React from 'react'
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

     const scrollToElement = (element) => {
          scroller.scrollTo(element, {
               duration: 1500,
               delay: 100,
               smooth: true,
               offset: -120
          });
     }
    return (
       <Drawer
       anchor="right"
       open={props.open}
       onClose={()=>props.onClose(false)}
       >
           <List component="nav">
               <ListItem button onClick={()=>console.log('Featured')}>
                    Event Starts in
               </ListItem>
               <ListItem button onClick={()=>console.log('Venue nfo')}>
                    Venue nfo
               </ListItem>
               <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Highlights
               </ListItem>
               <ListItem button onClick={()=>console.log('Pricing')}>
                    Pricing
               </ListItem>
               <ListItem button onClick={()=>console.log('Locations')}>
                    Location  
               </ListItem>
           </List>
       </Drawer>
    );
};

export default SideDrawer;