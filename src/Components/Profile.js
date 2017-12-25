import React from 'react';
import BasicInfo from './Profile/BasicInfo';

class Profile extends React.Component
{ render()
    { var style ={ 
    	             marginTop:'10px',
    	             marginLeft:'40px',
                   height:'236px',
                   width:'22%',
                   backgroundColor:'white',
                   top: '53px',
                   position:'relative'
                 };

      return(
       <div className="profile-card" style={style}>
          <BasicInfo />  
       </div>
      );
    }  
}

export default Profile;