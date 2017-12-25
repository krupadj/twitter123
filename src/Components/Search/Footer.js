import React from 'react';

class Footer extends React.Component
{ 
  constructor(props){
    super(props);
      this.state={
        txtToUnderline : -1,
      }
    this.selectMe = this.selectMe.bind(this);
    this.deselectMe = this.deselectMe.bind(this);
  }

  selectMe(position, event){
    this.setState({ txtToUnderline: position});
  }  

  deselectMe(){
    this.setState({ txtToUnderline: -1});
  }

  underlineMe(position){
    if(this.state.txtToUnderline === position){
      return 'underline'
    }
    return 'none'
  }

  colorMe(position){
     if(this.state.txtToUnderline === position){
      return '#22A7F0'
    }
    return 'grey'
  }
  render()
    { 
      var style ={      
    	             marginTop:'12px',
    	             marginLeft:'70px',
                   top:'83px',
                   height:'45px',
                   width:'277px',
                   backgroundColor:'#ecf0f1',
                   position:'relative'
                 };

      var opt ={
                    fontFamily:'arial',
                    fontSize:'12px',
                    color:'grey',
                    padding:'10px 0px 0px 15px',
               };  

       var style_a ={
	                    textDecoration:'none',
	                    padding:'0px 6px 0px 6px',
	                    color:'grey'
                		};             		        

       return(
                <div style={style}>

                  <p style={opt}>&copy; 2017 Twitter
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,0)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(0),textDecoration:this.underlineMe(0)}}>About</span></a>  
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,1)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(1),textDecoration:this.underlineMe(1)}}>Help Center</span></a>
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,2)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(2),textDecoration:this.underlineMe(2)}}>Terms</span></a><br />
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,3)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(3),textDecoration:this.underlineMe(3)}}>Privacy policy</span></a>
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,4)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(4),textDecoration:this.underlineMe(4)}}>Cookies</span></a>
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,5)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(5),textDecoration:this.underlineMe(5)}}>Ads info</span></a>
                  </p>
  
                </div>

             );
             
    }
}

export default Footer;                         
