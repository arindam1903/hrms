import React from "react";

const CalendarLayout = () => {

  const date = new Date().getDate();
  let [year,setYear]=React.useState(new Date().getFullYear());
  let [month,setMonth] = React.useState(new Date().getMonth());
  
  let firstDay=new Date(year,month,0).getDay();
 const handleClick=()=>{
    if(month<11) 
    {setMonth(month+1)};
     if(month===11){
        {setYear(year+1)};
        {setMonth(0)};}
 };

  return (
    <div className="calendarLayout">
        <div className='calendar-header'>
            Calendar
            <button onClick={handleClick}>Next</button>
            {year}{month===0?'Jan':month===1?'Feb':month===2?'Mar':month===3?'Apr':
            month===4?'May':month===5?'June':month===6?"July":month===7?'Aug':month===8?'Sep':
            month===9?'Oct':month===10?"Nov":'Dec'}
        </div>
      <div className="day-row">
        
        {["M", "TU", "W", "TH", "F", "SA", "SU"].map((day) => (
          <div className="days">{day}</div>
        ))}
      </div>
      <div className="date-row">
      {firstDay===6?['','','','','',''].map((el)=>( <div className="dates">{el}</div>)
      
      ):null}
      {firstDay===1?[''].map((el)=>( <div className="dates">{el}</div>)
      
      ):null}
      {firstDay==2?['',''].map((el)=>( <div className="dates">{el}</div>)
      
      ):null}
      {firstDay===3?['','',''].map((el)=>( <div className="dates">{el}</div>)
      
      ):null}
      {firstDay===4?['','','',''].map((el)=>( <div className="dates">{el}</div>)
      
      ):null}
      {firstDay===5?['','','','',''].map((el)=>( <div className="dates">{el}</div>)
      
      ):null}
     
        {[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
        ].map((date) => (
          <div className="dates">{date}</div>
        ))}
      </div>
    </div>
  );
};
export default CalendarLayout;
