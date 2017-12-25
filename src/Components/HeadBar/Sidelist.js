import React from 'react';
import {Link} from 'react-router-dom';

class Sidelist extends React.Component
{ 
  constructor(props){
    super(props);
    this.state={
      setPos : 0,
    }
    this.setPosition = this.setPosition.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

 componentDidMount(){
  if(this.props.pageNo !== '0'){
    this.setState({setPos: this.props.pageNo});
    console.log("this happened");
  }
 }

  myColor(position){
    if(this.state.setPos === position){
      return '#29B5FF'
    }
    return 'grey'
  }

  displayMe(position){
    if(this.state.setPos === position){
      return 'block'
    }
    return 'none'
  }

  setPosition(position, event){
    this.setState({setPos: position});
  }

  render()
    { var style_li ={ 
      	              listStyleType:'none',
      	              float:'left',
      	              padding:'15px 8px 6px 8px'	     
                    };

      var style_a ={ 
      	             textDecoration:'none',
      	             color:'#606060',
      	             fontSize:'13px',
    	               fontWeight:'bold',
    	               fontFamily:'verdana'
                   };

      var twitter ={
          					  background:'white',
          					  paddingLeft:'170px',
                      paddingTop:'15px',
          					  fontSize:'21px',
          					  color:'#55ACEE'
				           }; 

      var span ={
		              fontSize:'20px',
			            paddingRight:'5px',

		            };  
      var activeLine ={
                        position: 'absolute',
                        bottom: '-1px',
                        height: '4px',
                        backgroundColor:'#29B5FF',
      }  

      return(
       <div>
	       <ul> 
	        <li style={style_li}>
	          <div style={{paddingLeft:'30px'}}>
                <Link to="/" style={style_a} onClick = {this.setPosition.bind(this,0)}>
                  <span className="fa fa-home" style={Object.assign({color:'grey'},span)}></span>
                  <span style={{color:this.myColor(0)}}>Home</span>
                </Link>
                <div style={{display:this.displayMe(0)}}><div style={Object.assign({width:'80px'},activeLine)}></div></div>
              </div>  
	        </li> 
            
            <li style={style_li}>
	          <div>
                <a href= "#" style={style_a} onClick = {this.setPosition.bind(this,1)}>
                  <span className="fas fa-bolt" style={Object.assign({color:'grey'},span)}></span>
                  <span style={{color:this.myColor(1)}}>Moments</span>
                </a>
	          </div>
            <div style={{display:this.displayMe(1)}}><div style={Object.assign({width:'100px'},activeLine)}></div></div>
	        </li> 

	        <li style={style_li}>
	          <div>
                <a href= "#" style={style_a} onClick = {this.setPosition.bind(this,2)}>
                  <span className="fas fa-bell" style={Object.assign({color:'grey'},span)}></span>
                  <span style={{color:this.myColor(2)}}>Notifications</span>
                </a>
                <div style={{display:this.displayMe(2)}}><div style={Object.assign({width:'120px'},activeLine)}></div></div>
	          </div>
	        </li> 

	        <li style={style_li}>
              <div>
                <a href="#" style={style_a} onClick={this.setPosition.bind(this,3)}>
                  <span className="fas fa-envelope" style={Object.assign({color:'grey'},span)}></span>
                  <span style={{color:this.myColor(3)}}>Messages</span>
                </a>
                <div style={{display:this.displayMe(3)}}><div style={Object.assign({width:'100px'},activeLine)}></div></div>
	          </div>        
	        </li> 
	       </ul> 
           <a href="#" className="fab fa-twitter" style={twitter}></a>
       </div>
      );
    }
}

export default Sidelist;
