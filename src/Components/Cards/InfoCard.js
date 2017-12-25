import React from 'react';
import HoverCard from '../HoverCard';

class InfoCard extends React.Component
{ 
  constructor(props)
  {
    super(props);
    this.state= {
      txtDeco : 'none',
      showCard: 'none',
      cardToDisplay : -1,
      lnk: 'black',
    }
    this.mouseHoverOn = this.mouseHoverOn.bind(this);
    this.mouseHoverOff = this.mouseHoverOff.bind(this);
    this.mouseHoverOnImg = this.mouseHoverOnImg.bind(this);
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
    });
    console.log(this.state.cardToDisplay);
  }


  mouseHoverOnImg(position, event){
    this.setState({          
          cardToDisplay:position,
    })
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
    { 
      var card={ 
                   position: 'relative',
                   top:'2px',
    	             float:'right',
      	           width:'627px',
      	           height:'100%'
               };

      var style ={ 
                   position:'relative',
    	             left:'-25px',
                   border:'1px solid transparent',
                   height:'455px',
                   width:'627px',
                   backgroundColor:'white',
    	         };
        var style_a ={ 
                   textDecoration:'none',
                   color:this.state.lnk,
                   fontSize:'14px',
                   fontFamily:'arial',
                   position:'absolute',
                   top:'10px',
                     };
      var styles ={ 
    	             position:'relative',
                   left: '-25px',
                   marginTop:'13px',
                   border:'1px solid transparent',
                   height:'495px',
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

      

        var expand ={
                      fontSize:'12px',
                      color:'#455A64',
                      position:'relative',
                      left:'265px'
                   }; 

        var exp_mis ={
		                fontSize:'12px',
		                color:'#455A64',
		                float:'right',
		                margin:'16px 14px 0px 0px',
                     };  
                   
        var user_name ={
                         paddingLeft:'3px',
                         color:'grey',
                         textDecoration:'none',
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
                     backgroundColor:'#A5D6A7',//temporary instead of image
                     height:'245px',
                     width:'100%',
                     borderBottom:'1px solid transparent'
                   };   
        
        var img_para ={
	                    fontSize:'15px',
	                    fontFamily:'arial', 
	                    marginTop:'10px',
	                    marginLeft:'13px' 
	                  }; 

	    var site ={
                     marginLeft:'13px', 
                     color:'grey',
                     fontFamily:'arial',
                     fontSize:'15px',
                     bottom:'15px',
                     position:'absolute'
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

        var missed ={
                      borderBottom:'1px solid #E0E0E0',
                      width:'100%',
                      height:'40px' 
                    };

        var txt ={    fontFamily:'arial',
                      fontSize:'18px',
                      fontWeight:'bold',
                      margin:'12px 0px 3px 12px',
                      position:'absolute' 
                 };

                                              
        const iconImg = require('./DD.jpg');
        const accName = 'Dungeons & Dragons';
        const userName = '@Wizards_DnD';
        const coverPic = require('./dd1.jpg');

        const iconImg2 = require('./dropbox.jpg');
        const accName2 = 'Dropbox API';
        const userName2 = '@dropboxapi';
        const coverPic2 = require('./dropboxAPI.jpg');
     return(
            <div style={card}>

            
 		       <div style={style}>
		         <div style={detail}>
		           <img src={iconImg} alt="d&d" style={photo} onMouseEnter={this.mouseHoverOnImg.bind(this,0)} onMouseLeave={this.mouseHoverOff}/>
		            <a href="#" style={style_a} onMouseEnter={this.mouseHoverOn.bind(this,0)} onMouseLeave={this.mouseHoverOff}><b style ={{color:this.colorMe(0),textDecoration:this.underlineMe(0)}}>{accName}</b>                
    		          <span style={user_name}>{userName}
                     <b>.</b> 1h
                    <span className="fas fa-chevron-down" style={expand}></span>
                  </span>  
    		        </a>
               <br />
               <HoverCard style={{display:this.showMe(0)}} posY='40px' posX='80px' icon = {iconImg} name1={accName} name2={userName} description='New to the world of Dungeons & Dragons?' cover ={coverPic}/>
    		       <div>
                <p style={para}>The legendary fantasy role-playing game played by millions of people worldwide! Join us and create your own epic stories.
                </p>
                 </div> 
                 <div style={box}>
                    <div style={image}>
                      <img src={coverPic} alt="d&d" style={image} />
                    </div> 
                    <p style={img_para}><b>Watch New Episode</b><br />
                     Tune in to twitch.tv/dnd for a new episode of @girlsgutsglory! Live now!</p>
                    <span style={site}>dnd.wizards.com</span> 
                 </div>
               </div>	  
  		         <div style={{position:'relative', top:'325px'}}>
  		            <span className="far fa-comment" style={rxn}></span>
  		            <span style={count}> 4</span>
  		            <span className="fas fa-retweet" style={rxn}></span>
  		            <span style={count}> 19</span>
  		            <span className="far fa-heart" style={rxn}></span>
  		            <span style={count}> 20</span>
  		            <span className="far fa-envelope" style={rxn}></span>   
  		         </div>
		        </div> 


		         <div style={styles}>
                     <div style={missed}>
                       <p style={txt}>In case you missed it</p>
                       <span className="fas fa-chevron-down" style={exp_mis}></span>
                     </div>

			         <div style={detail}>
			            <img src={iconImg2} alt="dropbox" style={photo} onMouseEnter={this.mouseHoverOnImg.bind(this,1)} onMouseLeave={this.mouseHoverOff}/>
			            <a href="#" style={style_a} onMouseEnter={this.mouseHoverOn.bind(this,1)} onMouseLeave={this.mouseHoverOff}><b style ={{color:this.colorMe(1),textDecoration:this.underlineMe(1)}}>{accName2}</b>
	    		          <span style={user_name} > {userName2}<b>.</b> Nov 14<span className="fas fa-chevron-down" style={expand}></span></span>  
	    		        </a><br />  
                  <HoverCard style={{display:this.showMe(1),}} posY='40px' posX='80px' icon = {iconImg2} name1={accName2} name2={userName2} description='Official twitter account for the Dropbox API.' cover ={coverPic2}/>
	    		        <p style={para}>Attending Forge DevCon at Autodesk University? Come hang out with the Dropbox crew at booth A511 in the Exhibit Hall! #AU2017 #ForgeDevCon
	    		        </p>
			         </div>	
			         <div style={box}>
			            <div style={image}>
			              <img src={coverPic2} alt="dropboxapi" style={image}/>
			            </div> 
			            <p style={img_para}><b>Watch New Episode</b><br />
			             Tune in to twitch.tv/dnd for a new episode of @girlsgutsglory! Live now!</p>
			            <span style={site}>dnd.wizards.com</span> 
			         </div>	  
			         <div>
			            <span className="far fa-comment" style={rxn}></span>
			            <span style={count}> 1</span>
			            <span className="fas fa-retweet" style={rxn}></span>
			            <span style={count}> 4</span>
			            <span className="far fa-heart" style={rxn}></span>
			            <span style={count}> 20</span>
			            <span className="far fa-envelope" style={rxn}></span>   
			         </div>        
			       </div>
		       </div>
		      
		    );
    }  
}

export default InfoCard; 