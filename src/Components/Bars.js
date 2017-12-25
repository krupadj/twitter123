import React from 'react';

class Bars extends React.Component
{ render()
    { var style ={ 
    	             height:'100px',
                   width:'100%',
                   top: '53px',
                   position:'relative'
                 };

      var aadh ={
                  height:'45px',
                  width:'100%',
                  backgroundColor:'#22A7F0', 
                  fontSize:'25px',
                  color:'white',
                  fontWeight:'bold',
                  paddingLeft:'75px',
                  paddingTop:'24px' ,
                  fontFamily:'arial'
                };

      var menu ={  
                   marginTop:'-15px',
                   borderBottom:'1px solid grey',
                   backgroundColor:'white',
                   height:'55px', 
                   width:'100%'
                   
                };

      var style_li ={ 
      	              listStyleType:'none',
      	              float:'left',
      	              padding:'20px 0px 6px 0px'	     
                    };

      var style_a ={ 
      	             textDecoration:'none',
      	             color:'#607D8B',
      	             fontSize:'13px',
    	               fontWeight:'bold',
    	               fontFamily:'verdana'
                   };

      var more ={
                   float:'right',
                   color:'#7f8c8d',
                   fontSize:'17px',
                   padding:'20px 70px 6px 0px'
                };

      return(
       <div className="bars" style={style}>
         <div style={aadh}>
           aadhaar 
         </div>
         <div style={menu}>
           <ul>
             <li style={style_li}>
               <div style={{paddingLeft:'30px'}}>
                <a href="#" style={style_a}><span>Top</span>
                </a>
               </div> 
             </li>

             <li style={style_li}>
               <div style={{paddingLeft:'30px'}}>
                <a href="#" style={style_a}><span>Latest</span>
                </a>
               </div> 
             </li>

             <li style={style_li}>
               <div style={{paddingLeft:'30px'}}>
                <a href="#" style={style_a}><span>People</span>
                </a>
               </div> 
             </li>

             <li style={style_li}>
               <div style={{paddingLeft:'30px'}}>
                <a href="#" style={style_a}><span>Photos</span>
                </a>
               </div> 
             </li>

             <li style={style_li}>
               <div style={{paddingLeft:'30px'}}>
                <a href="#" style={style_a}><span>Videos</span>
                </a>
               </div> 
             </li>

             <li style={style_li}>
               <div style={{paddingLeft:'30px'}}>
                <a href="#" style={style_a}><span>News</span>
                </a>
               </div> 
             </li>

             <li style={style_li}>
               <div style={{paddingLeft:'30px'}}>
                <a href="#" style={style_a}><span>Broadcasts</span>
                </a>
               </div> 
             </li>
           </ul>
           <div style={more}>
             <span className="fas fa-ellipsis-v"></span>
           </div> 
         </div>
       </div>
      );
    }  
}

export default Bars;