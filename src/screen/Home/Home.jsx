import React from "react";
import CalendarLayout from "../../components/calendar/CalendarLayout";
import Dashboard from "../../components/Dashboard-layout/Dashboard-layout";
import Header from "../../components/Header/Header";
import Notice from "../../components/notice/Notice";
import RecruitmentTable from "../../components/recruitment-table/Recruitment-table";
import UserInfo from "../../components/user-info/UserInfo";

const Home = () => {
  const candidateDetails = [
    { name: "Pankaj Ghatak", designation: "developer", status: "HR round" },
    { name: "Pankaj Ghatak", designation: "developer", status: "HR round" },
    { name: "Pankaj Ghatak", designation: "developer", status: "HR round" },
    { name: "Pankaj Ghatak", designation: "developer", status: "HR round" },
    { name: "Pankaj Ghatak", designation: "developer", status: "HR round" },
    { name: "Pankaj Ghatak", designation: "developer", status: "HR round" },
    { name: "Pankaj Ghatak", designation: "developer", status: "HR round" },
  ];
  return (
    <>
      <Header header="Dashboard" />
      <div className="home-container">
        <div className="container-one">
            <div className='notice-container'>
            <Notice />
            </div>
            <div className='recruitmentTable-container'>
            <RecruitmentTable candidateDetails={candidateDetails} />
            </div>
         
        </div>

        <div className="container-two">
          <CalendarLayout />
          <UserInfo />
        </div>
      </div>
    </>
  );
};
export default Home;
