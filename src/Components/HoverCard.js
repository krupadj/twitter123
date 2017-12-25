import React from 'react';

class HoverCard extends React.Component
{ 
  constructor(props){
    super(props);
    this.state={
      icon: this.props.icon,
    }
  };

  render()
    {
      
      var randomNames ={
        1:'Waylon Dalton',
        2: 'Justine Henderson',
        3:'Abdullah Lang',
        4:'Marcus Cruz',
        5:'Thalia Cobb',
        6:'Mathias Little',
        7:'Eddie Randolph',
        8:'Angela Walker',
        9:'Lia Shelton',
        0:'Hadassah Hartman',
      }; 
      var blue_div ={ 
  		                height:'100px',
  		                width:'100%',
                      backgroundColor:'#22A7F0', //replace with bg image
                      borderRadius:'8px',
	                  };

	    var photo ={
	                   border:'5px solid white',
	                   borderRadius:'60px',
	                   marginTop:'-30px',
	                   marginLeft:'10px',
	                   backgroundColor:'white',
                     width:'60px',
                     height:'60px'
	                   
                 };

        var name ={
                     fontSize:'18px',
                     fontFamily:'arial',
                     color:'black',
                     paddingLeft:'7px',
                     marginTop:'8px',
	                 marginLeft:'8px'
        		  }; 

        var user_name ={
                         paddingTop:'3px',
                         color:'grey',
                         fontSize:'13px',
                       };

        var attributes ={
                          fontSize:'12px',
                          color:'#556566',
                          paddingLeft:'15px',
                          fontFamily:'arial',
                          float:'left',
                          paddingTop:'18px',
                          width:'27%',
                        };   

        var count ={
                     fontSize:'20px',
                     color:'#22A7F0',
                     fontFamily:'arial',
                     paddingTop:'5px'
                   };   


        var button ={
                       border:'1px solid #22A7F0',
                       fontSize:'12px',
                       fontFamily:'arial',
                       color:'#22A7F0',
                       borderRadius:'35px',
                       padding:' 8px 25px 5px 25px',
                       backgroundColor:'white',
                       fontWeight:'bold',
                       marginTop:'-40px',
                       marginLeft:'30px',
                     };     

        var last ={  
        	         width:'277px',
        	         fontSize:'11px',
        	         fontFamily:'arial',
        	         color:'grey',
        	         position:'absolute',
        	         bottom:'-95px'
                  };

        var hoverCard = {
                      position: 'absolute',
                      backgroundColor:'white',
                      borderRadius:'8px',
                      boxShadow: '1px 2px 1px rgba(0, 0, 0, .5)',
                      width:'270px',
                      minHeight:'340px',
                      zIndex: '998',
                      top:this.props.posY, 
                      left: this.props.posX
        }  

      return(
              <div style={this.props.style}>
              <div style ={hoverCard}>
                 <div style={blue_div}>
                  <img src={this.props.cover} style={blue_div}/>
                 </div>

              <div style={{position:'relative'}}>
                <img src={this.props.icon} alt="user" style={photo}/>
                <button style={button}>Follow</button>
                <div style={name}>
                  <span><b>{this.props.name1}</b></span><br />
                  <span style={user_name}>{this.props.name2}</span><br />
                  <div style={{ paddingTop:'8px'}}></div>
                  <span style={{fontSize:'15px', fontFamily:'arial'}}>{this.props.description}</span>
                </div>

                <div>
                  <div style={attributes}>
                    <span><b>Tweets</b></span><br />
                    <span style={count}><b>{Math.ceil(Math.random()*100)}</b></span>
                  </div>  

                  <div style={attributes}>
                    <span><b>Following</b></span><br />
                    <span style={count}><b>{Math.ceil(Math.random()*100)}</b></span>
                  </div>  
                 
                  <div style={attributes}>
                    <span><b>Followers</b></span><br />
                    <span style={count}><b>{Math.ceil(Math.random()*10000)}</b></span><br />
                  </div> 

                  <div style={last}>
                    <center style={{padding:'8px'}}>Followed by <span style={{color:'#22A7F0'}}>{randomNames[((Math.ceil(Math.random()*1000))%10)]}</span> and 
                      <span style={{color:'#22A7F0'}}> {Math.ceil(Math.random()*1000)} others</span>
                    </center>
                  </div>  

                </div>
              </div>   
              </div>
              </div>
		    );
    }  
}

export default HoverCard; 
