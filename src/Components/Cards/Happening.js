import React from 'react';


class Happening extends React.Component
{  
  constructor(props)
  {
    super(props);
    this.state = {
      cntnrHght: '40px',
      heightVal: '30px',
      fakePH: 'visible',
      PHval: '',
      isChanged:'false',
      val: '',
      focused: 'none'
    }
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFocus(){
    this.setState({ 
      heightVal: '90px',
      fakePH: 'hidden',
      cntnrHght: '100px',
      PHval:'What\'s Happening?',
      focused: 'block'
    })
  }
  onChange(event){
    this.setState({ 
      isChanged: 'true',
      heightVal: '90px',
      fakePH: 'hidden',
      cntnrHght: '100px',
      PHval:'What\'s Happening?',
      val: event.target.value,
    })
  }

  onBlur(){
    const isChanged = this.state.isChanged;
    const TextLength= this.state.val.length;
    if(isChanged && TextLength>0){}
      else{
    this.setState({
      heightVal: '30px', 
      fakePH: 'visible',
      cntnrHght: '40px',
      PHval: '',
      isChanged: 'false',
      focused: 'none'
    })}
  }
  render()
    { var style ={ float:'right',
                   display:'block',
                   overflow:'hidden',
                   marginTop:'10px',
                   marginLeft:'-15px',
      	           marginRight:'25px',
      	           border:'1px solid transparent',
                   //height:'60px',
                   width:'627px',
                   backgroundColor:'#E1F5FE'
    	         };

      var photo ={
                   borderRadius:'30px',
                   margin:'15px 7px 0px 25px',
                   width:'30px',
                   height:'30px',
                   backgroundColor:'white'
                 };	
 
       var form ={
                    overflow:'hidden',
	      	          float:'right',
	      	          margin:'11px 20px 10px 1px',
                    border:'1px solid #BBDEFB',
                    borderRadius:'8px',
	      	          width:'541px',
	      	          position:'relative',
                    backgroundColor:'white'
                 };
     

       var input ={
      	            fontSize:'20px',
                    marginTop:'8px',
                    marginLeft:'8px',
                    position: 'absolute',
                    float:'right',
                    top: '0',
                    left: '0',
                    overflow : 'hidden',
                    outline:'none',
                    resize: 'none',
                    border:'none',
                    width:'500px',
                    height:this.state.heightVal,
                    backgroundColor: 'transparent',
                    fontFamily:'arial',
      	            //placeholder:{color:'#22A7F0'},
      	                 
                  };   
       var container ={
                    position:'relative',
                    height:this.state.cntnrHght,                  
                    width:'500px',
                    fontFamily:'arial',
       }
      var circle= {
                   position:'absolute',
                   top:'70px',
                   fontSize:'20px',
                   color:'#ecf0f1',
                   right:'5px', 
                   paddingBottom:'8px'
                 };   
   
       var add ={
                     position:'absolute',
                     top:'9px',
                     fontSize:'22px',
                     color:'#22A7F0',
  				        	 right:'5px',
                }; 

       var smile= {
                   position:'absolute',
                   top:'9px',
                   fontSize:'20px',
                   color:'#bdc3c7',
                   right:'5px', 
                   paddingBottom:'8px',
                 };   
       var fakePlaceHolder={
                     float:'left',
                     fontSize:'20px',
                     marginTop:'8px',
                     marginLeft:'8px', 
                     color:'#3498db',
                     visibility: this.state.fakePH,
       }
       var more ={
                    display: 'flex',
                    marginLeft:'70px',
                    width: '100%',
                    display: this.state.focused,
       }
       var tweet ={ 
       	             marginTop:'12px',
       	             border:'1px solid transparent',
	                   height:'45px',
	                   width:'627px',
	                   backgroundColor:'#F5F5F5',
	                   borderBottom:'1px solid #E0E0E0',
	                   borderTop:'1px solid #E0E0E0',
	                   color:'#22A7F0',
	                   fontFamily:'arial',
	                   fontSize:'14px'
                  };

        var btn   ={
                     color:'#22A7F0',
                     width: '25px',
                     height: '25px',
                     padding: '2px 2px 8px 2px',
        };
        var button ={ 
                     border:'1px solid #19B5FE',
                     height : '30px',
                     borderRadius:'25px',
                     float:'right',
                     position: 'relative',
                     right: '100px',
                     padding:'4px 2px 4px 2px',
                     fontSize:'15px',
                     fontWeight:'bold',
                     color:'white',
                     backgroundColor:'#19B5FE',
                     width:'75px'
                   };
      return(
		       <div style={style}>
		         <img src={require('../usericon.png')} alt="user" style={photo}/>
		         <form style={form}>
             <div style={container}>   
              <div style={fakePlaceHolder}>What's Happening? </div>          
		           <textarea placeholder={this.state.PHval} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} style={input}/>
              </div>
               <span className="far fa-smile" style={smile}></span>               
               <span className="far fa-circle" style={circle}></span>
         		 </form> 
             <span style={more}>
               <input type="file" className="far fa-image" style={btn}/>
                 <input type="file" className="far fa-file" style={btn}/>
                 <button className="fas fa-align-left" style={btn}></button>
                 <button className="fas fa-map-marker-alt" style={btn}></button>
                 <span style={{width:'300px'}}></span>
                 <button className="fas fa-plus-circle" style={btn}></button>
                 <button type="button" onClick="#" style={button}>Tweet</button>
                 </span>
		       </div>
		    );
    }  
}

export default Happening; 