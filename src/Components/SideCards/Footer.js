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
    	             marginTop:'340px',
                   position: 'relative',
    	             left:'-10px',
                   border:'1px solid transparent',
                   height:'135px',
                   width:'22%',
                   backgroundColor:'white',
                   float:'right'
                 };

      var opt ={
                    fontFamily:'arial',
                    fontSize:'12px',
                    color:'grey',
                    padding:'5px'
               };  

       var style_a ={
	                    textDecoration:'none',
                      fontFamily: 'arial',
	                    padding:'5px 5px 8px 5px',
	                    color:'grey'
                		};   

       var line ={
                    width:'100%',
					          borderBottom:'1px solid #ecf0f1'	
                 };   

       var icon ={
                     fontSize:'15px',
                     color:'#22A7F0',
                     padding:'15px 10px 15px 15px'  
                 };

       var advt ={
                    fontFamily:'arial',
                    fontSize:'12px',
                    color:'#22A7F0',
                    bottom:'-20px',
                    position:'absolute',
	    	            top:'17px' ,
                    textDecoration:'none'
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
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,6)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(6),textDecoration:this.underlineMe(6)}}>Brand</span></a>
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,7)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(7),textDecoration:this.underlineMe(7)}}>Blog</span></a><br />
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,8)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(8),textDecoration:this.underlineMe(8)}}>Status</span></a>
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,9)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(9),textDecoration:this.underlineMe(9)}}>Apps</span></a>
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,10)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(10),textDecoration:this.underlineMe(10)}}>Jobs</span></a>
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,11)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(11),textDecoration:this.underlineMe(11)}}>Marketing</span></a>
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,12)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(12),textDecoration:this.underlineMe(12)}}>Business</span></a><br />
                  <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,13)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(13),textDecoration:this.underlineMe(13)}}>Developers</span></a><br />
                  </p>
                  <div style={line}></div>
                  <div style={{position:'relative'}}>
                    <span className="far fa-square" style={icon}></span>
                    <a href="#" style={advt} onMouseEnter={this.selectMe.bind(this,14)} onMouseLeave={this.deselectMe}><span stye={{textDecoration:this.underlineMe(14)}}>Advertise with Twitter</span></a>
                  </div>
                  
                </div>

             );
             
    }
}

export default Footer;                         
