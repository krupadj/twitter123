import React from 'react';

class BasicInfo extends React.Component
{ 
  constructor(props)
  {
    super(props);
    this.state= {
      active: -1,
      textToChangeColor:-1,
      txtDeco : 'none',
    }
    this.mouseHoverOn = this.mouseHoverOn.bind(this);
    this.mouseHoverOff = this.mouseHoverOff.bind(this);
    this.changeColorOn = this.changeColorOn.bind(this);
    this.changeColorOff = this.changeColorOff.bind(this);
  }

  mouseHoverOn(position, event){
        this.setState({active: position});
  }

  mouseHoverOff(){
        this.setState({active: -1});
  }
  myVal(position){
      if (this.state.active === position) {
      return 'underline';
    }
    return 'none';
  }

  changeColorOn(position, event){
      this.setState({textToChangeColor:position});
  }

  changeColorOff(){
      this.setState({textToChangeColor:-1});
  }

  changeMyColor(position){
      if(this.state.textToChangeColor===position){
        return '#22A7F0'
      }
      return '#556566'
  }

  render()
	{   var blue_div ={ 
  		                height:'100px',
  		                width:'100%',
                      backgroundColor:'#22A7F0'

	                  };

	    var photo ={
	                   border:'3px solid white',
	                   borderRadius:'65px',
	                   marginTop:'-30px',
	                   marginLeft:'10px',
	                   backgroundColor:'white',
                     width:'65px',
                     heigth:'65px'
	                   
                 };

        var name ={
                     marginTop:'-35px',
	                   marginLeft:'95px'
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
                          width:'26%'
                          
                        };   

        var count ={
                     fontSize:'20px',
                     color:'#22A7F0',
                     fontFamily:'arial',
                     paddingTop:'5px',
                     textAlign:'center'
                   };                                       		          
        var style_a ={ 
                   
                     fontSize:'18px',
                     fontFamily:'arial',
                     color:'black',
        }   

		return(
       			<div>
       			  <div style={blue_div}>
       			  </div>

       			  <div>
       			    <abbr title="Krupa Jariwala"><img src={require('../usericon.png')} alt="user" style={photo}/></abbr>
       			    <div style={name}>
       			      <span><a href="#" style={{color:'black',textDecoration: this.myVal(0)}} onMouseEnter={this.mouseHoverOn.bind(this,0)} onMouseLeave={this.mouseHoverOff}><b style={style_a}>Krupa Jariwala</b></a></span><br />
       			      <span style={user_name}>@<a href="#" style={{color:'grey',textDecoration: this.myVal(1)}} onMouseEnter={this.mouseHoverOn.bind(this,1)} onMouseLeave={this.mouseHoverOff}>krupadjari</a></span><br />
       			    </div>

       			    <div style={{marginTop:'25px'}}>
       			      <div style={attributes}>
       			        <span><a href="#" style={{textDecoration:'none',}} onMouseEnter={this.changeColorOn.bind(this,0)} onMouseLeave={this.changeColorOff}><b style={{color:this.changeMyColor(0)}}>Tweets</b></a></span><br />
       			        <span style={count}><b>{Math.ceil(Math.random())}</b></span>
       			      </div>  

       			      <div style={attributes}>
       			        <span><a href="#" style={{textDecoration:'none',}} onMouseEnter={this.changeColorOn.bind(this,1)} onMouseLeave={this.changeColorOff}><b style={{color:this.changeMyColor(1)}}>Following</b></a></span><br />
       			        <span style={count}><b>{Math.ceil(Math.random())}</b></span>
       			      </div>  
       			     
       			      <div style={attributes}>
       			        <span><a href="#" style={{textDecoration:'none',}} onMouseEnter={this.changeColorOn.bind(this,2)} onMouseLeave={this.changeColorOff}><b style={{color:this.changeMyColor(2)}}>Followers</b></a></span><br />
       			        <span style={count}><b>{Math.ceil(Math.random())}</b></span>
       			      </div>   

       			    </div>
       			  </div>

       			</div>
       		  );	
	}
}


export default BasicInfo;

