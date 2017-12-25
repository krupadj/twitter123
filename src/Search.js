import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeadBar from './Components/HeadBar';
import Bars from './Components/Bars';
import Filters from './Components/Filters';
import Follow from './Components/Search/Follow';
import Footer from './Components/Search/Footer';
import Trends from './Components/Trends';
import Data from './Components/Data';

class Search extends React.Component
{ render()
    { 
      var style ={
                   backgroundColor:'#ecf0f1',
                   margin:'-8px -8px 0px -8px',
                   position:'fixed',
                   width:'100%',
                   height:'100%',
                   overflowY:'auto',
                   overflowX:'hidden'
                 };
      console.log(this.props.location.query);
      return(
       <div style={style}>
        <MuiThemeProvider>
          <HeadBar phval = {this.props.location.query} pageNo = '-1'/>
          <Bars />
          <Data />
          <Filters />
          <Follow />
          <Trends top='83px' left='30px' />
          <Footer />
        </MuiThemeProvider> 
       </div>
      );
    }  
}


export default Search;
