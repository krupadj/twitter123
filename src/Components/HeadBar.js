import React from 'react';
import Sidelist from './HeadBar/Sidelist';
import Rembar from './HeadBar/Rembar';


class HeadBar extends React.Component
{ render()
    { var style ={
                   borderStyle:'solid',
                   borderWidth:'0px 0px 1px 0px',
                   borderColor:'#95a5a6',
                   backgroundColor:'white',
                   marginTop:'-15px',
                   height:'68px', 
                   width:'100%',
                   position:'fixed',
                   display:'block',
                   zIndex: '999'               
                 };

      return(
       <div className="head-bar" style={style}>
         <Sidelist pageNo = {this.props.pageNo} />
         <Rembar phval={this.props.phval} />        
       </div>
      );
    }  
}

export default HeadBar;