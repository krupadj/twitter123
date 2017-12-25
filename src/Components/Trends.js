import React from 'react';

class Trends extends React.Component
{ 
	constructor(props){
		super(props);
		this.state={
			textToUnderline : -1,
		}
		this.selectMe = this.selectMe.bind(this);
		this.deselectMe = this.deselectMe.bind(this);
	}

	selectMe(position, event){
		this.setState({textToUnderline: position});
	}

	deselectMe(){
		this.setState({textToUnderline: -1});
	}

	underlineMe(position){
		if(this.state.textToUnderline === position){
			return 'underline'
		}
		return 'none'
	}

	render()
    { var style ={ 
    	           marginTop:'12px',
    	           marginLeft:'40px',
                   border:'1px solid transparent',
                   height:'515px',
                   width:'22%',
                   backgroundColor:'white',
                   position:'relative'
                 };

      var head ={
                     fontSize:'18px',
                     fontFamily:'arial',
                     color:'black',
                     margin:'15px 0px 0px 12px'

        		};  

       var change ={
                      fontSize:'12px',
                      textDecoration:'none',
                      color:'#22A7F0'
                  
       			   }; 	

       var style_li ={ 
	      	              listStyleType:'none',
	      	              margin:'-10px 0px -10px -25px',
	      	              paddingTop:'17px'
                     };

       var style_a ={ 
	      	             textDecoration:'none',
	      	             color:'#22A7F0',
	      	             fontSize:'14px',
	    	             fontWeight:'bold',
	    	             fontFamily:'arial'
                    };	

       var count ={
                    fontFamily:'arial',
                    fontSize:'12px',
                    color:'grey'
                  };             	   	          

      return(
		       <div className="trends-card" style={Object.assign({top:this.props.top},{left:this.props.left},style)}>

		         <div style={head}>
		           <span><b>Trends for you </b>. </span>
		           <a href="#" style={Object.assign(change,{textDecoration: this.underlineMe(0)})} onMouseEnter={this.selectMe.bind(this,0)} onMouseLeave={this.deselectMe}>Change</a><br />
		         </div>
		         
		         <ul>
		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,1)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(1)}}>#GujaratVerdict</span></a><br />
		             <span style={count}>1,858 Tweets</span>
		           </li>

		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,2)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(2)}}>#VirushkaWEDDING</span></a><br />
		             <span style={count}>1,263 Tweets</span>
		           </li>

		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,3)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(3)}}>#MUMKOL</span></a><br />
		             <span style={count}>2,466 Tweets</span>
		           </li>

		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,4)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(4)}}>#Hiten</span></a><br />
		             <span style={count}>11.8K Tweets</span>
		           </li>

		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,5)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(5)}}>2 YEARS OF DILWALE</span></a><br />
		             <span style={count}>9,440 Tweets</span>
		           </li>

		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,6)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(6)}}>#RahulGandhiNHInterview</span></a><br />
		             <span style={count}>Rahul Gandhi gives first interview as Congress President</span>
		           </li>

		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,7)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(7)}}>Gold</span></a><br />
		             <span style={count}>171K Tweets</span>
		           </li>

		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,8)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(8)}}>#BOULIV</span></a><br />
		             <span style={count}>17.6K Tweets</span>
		           </li>

		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,9)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(9)}}>Cyclone Ockhi</span></a><br />
		             <span style={count}>1,254 Tweets</span>
		           </li>

		           <li style={style_li}>
		             <a href="#" style={style_a} onMouseEnter={this.selectMe.bind(this,10)} onMouseLeave={this.deselectMe}><span style={{textDecoration:this.underlineMe(10)}}>Sushil Kumar</span></a><br />
		             <span style={count}>2,125 Tweets</span>
		           </li>
		         </ul>
		                   
		       </div>
            );
    }  
}

export default Trends;         