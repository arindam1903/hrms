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
            <Avatar avatarURL='https://scontent.fccu1-1.fna.fbcdn.net/v/t1.0-9/123084826_1974636509346098_1750104894279051307_n.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=ot257NTdS7cAX9fn5JA&_nc_ht=scontent.fccu1-1.fna&oh=06b658725576f6db5a6973a2222acddc&oe=605B7E82'/>

        </div>
        </div>
        
    )
}
export default Header;