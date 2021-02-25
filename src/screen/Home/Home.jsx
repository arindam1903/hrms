import React from 'react';
import Dashboard from '../../components/Dashboard-layout/Dashboard-layout';
import Header from '../../components/Header/Header';
import Notice from '../../components/notice/Notice';
import RecruitmentTable from '../../components/recruitment-table/Recruitment-table';

const Home=()=>{
    return(
        <>
         <Header header="Dashboard" />
         <div className='home-container'>
             <div className='container-one'>
             <Notice/>
             <RecruitmentTable/>
             </div>

             <div className='container-two'>

             </div>
         </div>
    
             
    
    </>
    );
}
export default Home;