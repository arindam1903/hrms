import React from 'react';
import Avatar from '../avatar/Avatar';

import Icons from '../icons/Icons';



const Header =(props)=>{
    return(
        
        <div className="header-box">
        <div className="header-text"> <h1>{props.header}</h1></div>
       

        <div className="header-icons">
      <Icons/>
        </div> 

        <div className="header-avatar">
            <h2>Arindam Dutta</h2>
            <Avatar/>

        </div>
        </div>
        
    )
}
export default Header;