import React from 'react';
import HoverCard from '../HoverCard'

class Follow extends React.Component
{   constructor(props)
  {
    super(props);
    this.state= {
      cardToDisplay : -1,
      linkNo:-1,
    }
    this.mouseHoverOn = this.mouseHoverOn.bind(this);
    this.mouseHoverOff = this.mouseHoverOff.bind(this);
    this.hoverLink = this.hoverLink.bind(this);
  }

  mouseHoverOn(position, event){
    console.log(this.state.cardToDisplay);
    this.setState({
          cardToDisplay: position,
    });
    console.log("Selected " + position )
  }

  mouseHoverOff(){
    this.setState({
         cardToDisplay:-1,
         linkNo: -1,
    });
    console.log(this.state.cardToDisplay);
  }

  hoverLink(position, event){
    this.setState({linkNo: position});
  }

  underlineLink(position){
    if(this.state.linkNo === position){
      return 'underline'
    }
    return 'none'
  }

  showMe(position){
    if(this.state.cardToDisplay === position){
      console.log("cardToDisplay="+this.state.cardToDisplay+" position="+position);
      return 'block';
    }
    return 'none'
  }

  underlineMe(position){
    if(this.state.cardToDisplay === position){
      console.log("cardToDisplay="+this.state.cardToDisplay+" position="+position);
      return 'underline';
    }
    return 'none'
  }

  colorMe(position){
    if(this.state.cardToDisplay === position){
      console.log("cardToDisplay="+this.state.cardToDisplay+" position="+position);
      return '#22A7F0';
    }
    return 'black'
  }


  render()
	{  var style ={
                   position:'absolute',
                   top: '12px',
                   right: '10px',
                   //marginTop:'10px',
    	             //marginLeft:'70px',
    	             //marginRight:'-350px',
    	             float:'right',
                   border:'1px solid transparent',
                   height:'315px',
                   width:'22%',
                   backgroundColor:'white'
    	         };
      

		var head ={
			           fontSize:'18px',
  	             fontFamily:'arial',
  	             color:'black',
  	             margin:'15px 0px 0px 12px'
			        };

        var optns ={
                      fontSize:'12px',
                      textDecoration:'none',
                      color:'#22A7F0'     
       	           }; 	

        var photo ={
	                   borderRadius:'50px',
	                   margin:'-10px 10px 5px -3px',
	                   fontSize:'35px',
                     width:'50px',
                     height:'50px',
                    };

        var user_name ={
                         paddingLeft:'3px',
                         color:'grey',
                         fontSize:'13px'
                       };

        var style_li ={ 
	      	              listStyleType:'none',
	      	              margin:'-10px 0px -10px -25px',
	      	              paddingTop:'17px',
	      	              position:'relative'
                      };

        var style_a ={ 
	      	             textDecoration:'none',
	      	             color:'black',
	      	             fontSize:'14px',
  	    	             fontFamily:'arial',
  	    	             position:'absolute',
  	    	             top:'10px',
  	    	           };	

        var close ={
                      fontSize:'12px',
                      color:'#ecf0f1',
                      position:'relative',
                      marginLeft:'5px'
                   };  

        var button ={
                       border:'1px solid #22A7F0',
                       fontSize:'12px',
                       fontFamily:'arial',
                       color:'#22A7F0',
                       borderRadius:'35px',
                       padding:' 8px 25px 5px 25px',
                       fontWeight:'bold',
                       float:'right', 
                       marginTop:'-33px',
                       marginRight:'110px',
                       backgroundColor:'white'
                     };    

        var line ={
                    width:'100%',
        				    borderBottom:'1px solid #ecf0f1',
        				    padding:'10px 0px 10px 0px',
        				    margin:'0px 0px 10px -20px'	
                  };      

        var icon ={
                     fontSize:'15px',
                     color:'#22A7F0',
                     padding:'0px 10px 15px 15px'  
                  };

        var ang ={
                     fontSize:'12px',
                     color:'#22A7F0',
                     padding:'0px 0px 3px 0px',
                 };         

       var find ={
                    fontFamily:'arial',
                    fontSize:'12px',
                    color:'#22A7F0',
                    bottom:'-20px',
                    position:'absolute',
	    	            top:'0px' 
                 };
        const iconImg1 = require('./nambi.jpg');
        const accName1 = 'nambi';
        const userName1 = '@nambinayagan';

        const iconImg2 = require('./atom.jpg');
        const accName2 = 'Atom';
        const userName2 = '@atom1111';

        const iconImg3 = require('./angular.jpg');
        const accName3 = 'Angular';
        const userName3 = '@angular';                             


      return(
               <div style={style}>
                 <div style={head}>
		               <span><b>Who to follow </b></span>
		               <a href="#" style={optns}><b>.</b> 
                   <span style ={{textDecoration:this.underlineLink(0)}} onMouseEnter={this.hoverLink.bind(this,0)} onMouseLeave={this.mouseHoverOff}>Refresh </span><b>.</b>
                   <span style ={{textDecoration:this.underlineLink(1)}} onMouseEnter={this.hoverLink.bind(this,1)} onMouseLeave={this.mouseHoverOff}> View all</span></a><br />
		             </div>

		            <ul>

                   <li style={style_li}>
                      <img src={iconImg1} alt="nambi" style={photo} onMouseEnter={this.mouseHoverOn.bind(this,0)} onMouseLeave={this.mouseHoverOff}/>
    		             <a href="#" style={style_a} onMouseEnter={this.mouseHoverOn.bind(this,0)} onMouseLeave={this.mouseHoverOff}>
                     <b style ={{color:this.colorMe(0),textDecoration:this.underlineMe(0)}}>{accName1}</b>
    		               <span style={user_name}>{userName1} <span className="fas fa-times" style={close}></span></span>  
    		             </a><br />
                     <HoverCard style={{display:this.showMe(0)}} posY='40px' posX='-80px' name1={accName1} name2={userName1} icon={iconImg1}
                     description ='Official Twitter Account of NAMBI. Connect with him.'/>      
    		             <button style={button}>Follow</button>
		               </li>

		               <div style={line}></div>

		               <li style={style_li}>
                     <img src={iconImg2} alt="atom" style={photo} onMouseEnter={this.mouseHoverOn.bind(this,1)} onMouseLeave={this.mouseHoverOff}/>
    		             <a href="#" style={style_a} onMouseEnter={this.mouseHoverOn.bind(this,1)} onMouseLeave={this.mouseHoverOff}>
                     <b style ={{color:this.colorMe(1),textDecoration:this.underlineMe(1)}}>{accName2}</b>
    		               <span style={user_name}>{userName2} <span className="fas fa-times" style={close}></span></span>  
    		             </a><br />
                     <HoverCard style={{display:this.showMe(1)}} posY='40px' posX='-80px' name1={accName2} name2={userName2} icon={iconImg2}
                     description ='Meet ATOM111. Here I am.'/>         
		                 <button style={button}>Follow</button>
		               </li>

		               <div style={line}></div>

		               <li style={style_li}>
                     <img src={iconImg3} alt="angular" style={photo} onMouseEnter={this.mouseHoverOn.bind(this,2)} onMouseLeave={this.mouseHoverOff}/>
    		             <a href="#" style={style_a} onMouseEnter={this.mouseHoverOn.bind(this,2)} onMouseLeave={this.mouseHoverOff}>
                     <b style ={{color:this.colorMe(2),textDecoration:this.underlineMe(2)}}>{accName3}</b>
    		               <span className="fas fa-sun" style={ang}></span>
    		               <span style={user_name}>{userName3}<span className="fas fa-times" style={close}></span></span>  
    		             </a><br />     
                     <HoverCard style={{display:this.showMe(2)}} posY='40px' posX='-80px' name1={accName3} name2={userName3} icon={iconImg3}
                     description ='One framework. Mobile & desktop.'/>    
    		             <button style={button}>Follow</button>
    		           </li>

		               <div style={line}></div>

		            </ul>

		            <div style={{position:'relative'}}>
                  <span className="fas fa-users" style={icon}></span>
                  <span style={find}>Find people you know</span>
                </div>
              </div>
      	    );
    }
    
}

export default Follow;      