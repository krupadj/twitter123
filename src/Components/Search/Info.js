import React from 'react';

class Info extends React.Component
{ render()
    { 
      var card={ 
      	           //marginLeft:'-15px',
                   top: '355px',
    	             marginRight:'-3px',
    	             float:'right',
      	           width:'627px',
      	           height:'100%',
                   position:'relative'
               };

      var style ={ 
    	             float:'right',
                   border:'1px solid transparent',
                   height:'455px',
                   width:'627px',
                   backgroundColor:'white',
    	         };
      
      var detail ={
                    margin:'5px',
                    height:'80px',
                    width:'100%',
                    position:'relative'
                  };	  

       var photo ={
	                   borderRadius:'50px',
	                   margin:'8px 5px 5px 5px',
	                   width:'50px',
	                   height:'50px',
	                   fontSize:'35px'   
                  };

        var style_a ={ 
	      	             textDecoration:'none',
	      	             color:'black',
	      	             fontSize:'14px',
  	    	             fontFamily:'arial',
  	    	             position:'absolute',
  	    	             top:'10px',
  	    	           };	

        var expand ={
                      fontSize:'12px',
                      color:'#455A64',
                      position:'relative',
                      float:'right',
                      marginTop:'3px',
                      right:'-260px'
                   }; 
   
        var user_name ={
                         paddingLeft:'3px',
                         color:'grey',
                         fontSize:'13px',
                         fontFamily:'arial'
                       };   
        
        var para ={
                    fontSize:'15px',
                    fontFamily:'arial', 
                    marginTop:'-33px',
                    marginLeft:'68px' 
                  };

        var box ={ 
                   height:'328px',
                   width:'150',
                   border:'1px solid #E0E0E0',
                   borderRadius:'8px',
                   margin:'-8px 13px 8px 68px',
                   position:'relative'
                 }; 

        var image ={
                     height:'328px',
                     width:'100%',
                     borderBottom:'1px solid transparent'
                   };  

         var line ={
                    width:'100%',
                    height:'1px',
                    borderBottom:'1px solid #ecf0f1'  
                 };    

        var rxn ={
                   color:'#455A64',
                   fontSize:'16px',
                   margin:'10px 0px 0px 70px'
                 };  

        var count ={
	                   color:'#455A64',
	                   fontSize:'14px',
	                   fontWeight:'bold',
	                   fontFamily:'arial'
                   };   

        var ang ={
                     fontSize:'12px',
                     color:'#22A7F0',
                     padding:'0px 0px 3px 0px',
                 };
     return(
            <div style={card}>
 		       <div style={style}>
		         <div style={detail}>
		            <img src={require('./wire.jpg')} alt="wire" style={photo}/>
		            <a href="#" style={style_a}><b>The Wire </b> 
                   <span className="fas fa-sun" style={ang}></span>
    		          <span style={user_name}>@thewire_in <b>.</b> Dec 23<span className="fas fa-chevron-down" style={expand}></span></span>  
    		        </a><br />  
    		        <p style={para}>Airtel payments bank CEO Shashi Arora quits over <b>Aadhaar</b> e-KYC row
    		        </p>
		         </div>	
		         <div style={box}>
		            <div style={image}>
		              <img src={require('./wire_info.jpg')} alt="wire_info" style={image} />
		            </div>  
		         </div>	  
		         <div>
		            <span className="far fa-comment" style={rxn}></span>
		            <span style={count}> 6</span>
		            <span className="fas fa-retweet" style={rxn}></span>
		            <span style={count}> 28</span>
		            <span className="far fa-heart" style={rxn}></span>
		            <span style={count}> 34</span>
		            <span className="far fa-envelope" style={rxn}></span>   
		         </div>
		        </div> 

            <div style={line}></div>

            <div style={style}>
             <div style={detail}>
                <img src={require('./atul.jpeg')} alt="atul" style={photo}/>
                <a href="#" style={style_a}><b>Atul Khatri </b> 
                   <span className="fas fa-sun" style={ang}></span>
                  <span style={user_name}>@one_by_two <b>.</b> Dec 20<span className="fas fa-chevron-down" style={expand}></span></span>  
                </a><br />  
                <p style={para}><a href="#" style={{textDecoration:'none',color:'#22A7F0'}}>#Virushka</a> submittimg their <b>Aadhaar</b> card and KYC forms to Modiji directly
                </p>
             </div> 
             <div style={box}>
                <div style={image}>
                  <img src={require('./viru.jpg')} alt="viru" style={image} />
                </div>  
             </div>   
             <div>
                <span className="far fa-comment" style={rxn}></span>
                <span style={count}> 113</span>
                <span className="fas fa-retweet" style={rxn}></span>
                <span style={count}> 972</span>
                <span className="far fa-heart" style={rxn}></span>
                <span style={count}> 4.8K</span>
                <span className="far fa-envelope" style={rxn}></span>   
             </div>
            </div> 
		     </div>
		      
		    );
    }  
}

export default Info; 