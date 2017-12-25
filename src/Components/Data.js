import React from 'react';
import Info from '../Components/Search/Info';
import {Link} from 'react-router-dom';
import HoverCard from './HoverCard';


class Data extends React.Component
{ render()
    { var style ={ position:'relative',
    			   top: '73px',
    			   float:'right',
    			   marginTop:'10px',
                   marginRight:'16%',
      	         };

       var tweet ={ 
                     height:'40px',
                     width:'627px',
                     backgroundColor:'#FAFAFA',
                     color:'#22A7F0',
                     fontFamily:'arial',
                     fontSize:'14px',
                     textDecoration:'none'
                  }  

        var ppl ={      
    	             marginTop:'12px',
    	             height:'35px',
                     width:'627px',
                     backgroundColor:'#ecf0f1',
                     position:'relative',
                     fontFamily:'arial',
                     fontSize:'18px'
                 };

        var head ={
                    marginLeft:'15px',
                    top:'10px',
                    position:'relative'
                  };

        var side ={
        	        fontSize:'11px', 
        	        color:'#19B5FE', 
        	        float:'right',
                    top:'10px',
                    position:'relative'
                  };
    const img = require('./aadharOrig.jpg');
    const img2 = require('./NandanNilkeni.jpeg');
      return(
		       <div className="data" style={style}>
		         <div style={tweet}><center style={{paddingTop:'10px'}}><Link to="/" style={tweet}>23 new results</Link></center>
                 </div>
                 <div style={ppl}><span style={head}><b>People</b>
                 <span style={side}> View all</span></span>
                 </div>
                 <div style={{backgroundColor:'white', width:'22%', height:'100%', display:'block'}}>
                 <HoverCard style={{display:'block'}} posY='85px' posX='10px' icon = {img} name1={'Aadhaar'} name2={'@UIDAI'} description='Official Twitter account of the Unique Identification Authority of India.'/>
                 <HoverCard style={{display:'block'}} posY='85px' posX='290px' icon = {img2} name1={'Nandan'} name2={'@NandanNilekani'} description='Co-founder of @Infosys. Worked on #Aadhaar.'/>
                 </div>
                 <Info />       
		       </div>
		    );
    } 
}

export default Data; 