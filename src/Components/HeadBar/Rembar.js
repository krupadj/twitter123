import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class Rembar extends React.Component
{ 
  constructor(props){
    super(props);
    this.state ={
      bgc : '#19B5FE',
      myquery: 'Search Twitter',
    }
    this.onHover = this.onHover.bind(this);
    this.onUnhover = this.onUnhover.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  submit(e){
    e.preventDefault();
  }

  componentDidMount(){
      if(this.props.phval !== ''){
      this.setState({myquery: this.props.phval});
    }
    
  }

  handleChange(e){
    this.setState({myquery: e.target.value});
    console.log("Query is :"+ this.state.myquery);
  }

  onHover(){
    this.setState({bgc: '#29A0FF'});
  }
  onUnhover(){
    this.setState({bgc: '#19B5FE'});
  }
  render()
    { var form ={
      	          float:'right',
      	          padding:'0px 8px 6px 100px',
      	          marginTop:'-28px',
      	          position:'relative',
                };

       var input ={
      	            fontSize:'15px',
      	            padding:'5px 8px 8px 12px',
      	            border:'1px solid #ccc',
      	            borderRadius:'20px',
                  backgroundColor:'#f6f7f8',
      	            width:'200px',
    	              outline:'none',
                  };    

       var search ={
                     position:'absolute',
                     top:'5px',
  					         right:'23px' 

                   };                

       var photo ={
                     borderRadius:'30px',
                     marginTop:'-25px',
                     marginLeft:'10px',
                     float:'right',
                     height:'30px',
                     width:'30px'
                 };
                
       var button ={ 
                     border:'1px solid #19B5FE',
                     borderRadius:'50px',
                     padding:'8px',
                     marginTop:'-30px',
                     marginLeft:'20px',
                     marginRight:'70px',
                     fontSize:'15px',
                     fontFamily:'arial',
                     fontWeight:'bold',
                     color:'white',
                     backgroundColor:this.state.bgc,
                     float:'right',
                     width:'75px',
                     textAlign: 'center',
                     textDecoration:'none'
                   };

      return(
        <div>

          <a href="#" type="button" style={button} onMouseEnter={this.onHover} onMouseLeave={this.onUnhover}>Tweet</a>
          <img src={require('../usericon.png')} alt="user" style={photo}/>
          <form onSubmit={this.submit} style={form}>
            <input type="text" placeholder={this.state.myquery} onChange={this.handleChange.bind(this)} style={input}/>
            <Link to ={{ pathname: '/search', query: this.state.myquery  }} style={{color:'grey'}}>
            <span className="fas fa-search" onClick={this.searchBtn} style={search}></span>
            </Link>
          </form> 
  
	    </div>
      );
    }
}

export default Rembar;
