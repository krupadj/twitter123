import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import HeadBar from './Components/HeadBar';
import Profile from './Components/Profile';
import Trends from './Components/Trends';
import SideCards from './Components/SideCards';
import Cards from './Components/Cards';

class Layout extends React.Component
{ render()
    { 
      var style ={
                   backgroundColor:'#ecf0f1',
                   margin:'-8px -8px 0px -8px',
                   position:'fixed',
                   width:'100%',
                   height:'100%',
                   overflowY:'auto',
                   display:'block',
                 };

      return(
       <div style={style}>
        <MuiThemeProvider>
          <HeadBar phval='' pageNo= "0"/>
          <SideCards />
          <Cards />
          <Profile />
          <Trends top='53px'/>
        </MuiThemeProvider> 
       </div>
      );
    }  
}


export default Layout;
