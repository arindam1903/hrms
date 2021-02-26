import react from 'react';

const Avatar=({avatarURL})=>{
    return(
        <>
        <img className='avatar'src={avatarURL}/>
        </>
    );
}
export default Avatar;