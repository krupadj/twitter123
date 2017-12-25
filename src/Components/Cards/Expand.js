import React from 'react';

class Expand extends React.Component
{ render()
  { var style ={   float:'right',
                   marginTop:'10px',
                   marginLeft:'-15px',
      	           marginRight:'-57px',
      	           border:'1px solid transparent',
                   height:'155px',
                   width:'627px',
                   backgroundColor:'#E1F5FE',

    	         };

      var photo ={
                   borderRadius:'30px',
                   margin:'15px 7px 0px 25px',
                   width:'30px',
                   height:'30px',
                   backgroundColor:'white'
                 };	

       var form ={
	      	          float:'right',
	      	          margin:'11px 20px 40px 1px',
	      	          width:'541px',
	      	          position:'relative',

                 };
        
       var input ={
      	            fontSize:'15px',
      	            paddingLeft:'8px',
      	            border:'1px solid #BBDEFB',
      	            borderRadius:'8px',
      	            backgroundColor:'white',
      	            width:'541px',
      	            height:'80px'    
                  };  

       var smile= {
                   position:'absolute',
                   top:'9px',
                   fontSize:'20px',
                   color:'#bdc3c7',
                   right:'5px', 
                   paddingBottom:'8px'
                 };   
   
       var circle= {
                   position:'absolute',
                   bottom:'50px',
                   fontSize:'20px',
                   color:'#ecf0f1',
                   right:'5px', 
                   paddingBottom:'8px'
                 };   
   

      var button ={ 
                     border:'1px solid #19B5FE',
                     borderRadius:'50px',
                     padding:'8px',
                     marginTop:'-25px',
                     marginLeft:'10px',
                     fontSize:'15px',
                     fontWeight:'bold',
                     color:'white',
                     backgroundColor:'#19B5FE',
                     width:'75px'
                   };

      var icon ={
                   color:'#22A7F0',
                   fontSize:'20px',
                   margin:'10px 45px 0px 1px'
                };

      var plus ={
                   color:'#22A7F0',
                   fontSize:'30px',
                   margin:'10px 0px 0px 170px'
                };


       return(
       	       <div style={style}>
	             <img src={require('../usericon.png')} alt="user" style={photo}/>
	             <form style={form} ref="expandform">
	               <input type="text" placeholder="What's happening?" style={input}/>
	               <span className="far fa-smile" style={smile}></span>
	               <span className="far fa-circle" style={circle}></span>
	               <span className="far fa-image" style={icon}></span>
	               <span className="far fa-file" style={icon}></span>
	               <span className="fas fa-align-left" style={icon}></span>
	               <span className="fas fa-map-marker-alt" style={icon}></span>
	               <span className="fas fa-plus-circle" style={plus}></span>
	               <button type="button" onClick="#" style={button}>Tweet</button>
	             </form> 
              </div>
            );
    }  
}

export default Expand; 