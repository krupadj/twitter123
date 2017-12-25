import React from 'react';
import Follow from './SideCards/Follow';
import Footer from './SideCards/Footer';

class SideCards extends React.Component
{ render()
    {  return(
                <div className="side-cards" style={{position:'relative', top: '53px'}}>
                  <Footer />
                  <Follow />
                </div>

             );            
    }
}

export default SideCards;                         
	         