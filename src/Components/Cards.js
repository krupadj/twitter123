import React from 'react';
import Happening from './Cards/Happening';
import InfoCard from './Cards/InfoCard';

class Cards extends React.Component
{ render()
    { var style ={ position:'relative',
    			   top: '53px'
    	         };

      return(
		       <div className="cards" style={style}>
		         <Happening />
		         <InfoCard />       
		       </div>
		    );
    }  
}

export default Cards; 