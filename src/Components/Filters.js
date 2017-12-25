import React from 'react';

class Filters extends React.Component
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
    return '#22A7F0'
  }

  render()
    { var style ={ 
                   position:'relative',                   
                   width:'27.5%',
                 };

       var search ={
                      marginTop:'12px',
                      backgroundColor:'white',
                      height:'50px',
                      marginLeft:'70px',
                      fontFamily:'arial',
                      fontSize:'18px',
                      position:'relative',
                      top:'83px'
                   };

      var related ={
                      marginTop:'12px',
                      backgroundColor:'white',
                      height:'185px',
                      marginLeft:'70px',
                      fontFamily:'arial',
                      fontSize:'18px',
                      position:'relative',
                      top:'83px'
                   };

      var head ={
                  marginLeft:'15px',
                  top:'14px',
                  position:'relative'
                };

      var li ={
                listStyleType:'none',
                marginLeft:'-25px',
                paddingTop:'10px',
                color:'#22A7F0',
                fontFamily:'arial',
                fontSize:'14px',
                fontWeight:'bold',
                textDecoration:'none',
              };

      return(
               <div className="filters" style={style}>
                 <div style={search}><span style={head}><b>Search filters</b> .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <a href="#" style={li} onMouseEnter={this.selectMe.bind(this,5)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(5),textDecoration:this.underlineMe(5)}}>Show</span></a>
                 </span>
             
                 </div>
                 <div style={related}><span style={head}><b>Related searches</b></span>
                   <ul>
                  <li><a href="#" style={li} onMouseEnter={this.selectMe.bind(this,0)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(0),textDecoration:this.underlineMe(0)}}>pv sindhu</span></a>  </li>
                  <li><a href="#" style={li} onMouseEnter={this.selectMe.bind(this,1)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(1),textDecoration:this.underlineMe(1)}}>#amarnath</span></a></li>
                  <li><a href="#" style={li} onMouseEnter={this.selectMe.bind(this,2)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(2),textDecoration:this.underlineMe(2)}}>#soniagandhi</span></a><br /></li>
                  <li><a href="#" style={li} onMouseEnter={this.selectMe.bind(this,3)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(3),textDecoration:this.underlineMe(3)}}>jbl and sunburn</span></a></li>
                  <li><a href="#" style={li} onMouseEnter={this.selectMe.bind(this,4)} onMouseLeave={this.deselectMe}><span style={{color:this.colorMe(4),textDecoration:this.underlineMe(4)}}>16th odi</span></a></li>
                   </ul>  
                 </div>
              </div>
      );
    }  
}

export default Filters;