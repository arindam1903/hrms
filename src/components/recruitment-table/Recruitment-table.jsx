import React from "react";
import Avatar from "../avatar/Avatar";

const RecruitmentTable = (props) => {
  const candidateDetails = props.candidateDetails;
  return (
    <div className="recruitment-table">
      <div className="table-header"><h2>Recruitment Progress</h2></div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className='head-row'>
                <th></th>
              <th>Full Name</th>
              <th>Designation</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {candidateDetails.map((candidate) => (
              <tr className='col-row'>
                <td><Avatar avatarURL='https://scontent.fccu1-1.fna.fbcdn.net/v/t1.0-9/72745659_1583613798448373_5822568235542773760_n.jpg?_nc_cat=109&ccb=3&_nc_sid=174925&_nc_ohc=Qq7GaRkGqMAAX9QpqI0&_nc_oc=AQmTbqY5Z0GFLx-NEfF4-WyV_lYzYz_b4JEtm8f-EdGI7_6FHQA2rqJ3_UsQHfV8y5c&_nc_ht=scontent.fccu1-1.fna&oh=cef2725ca0b9bc62e12f1a242fdfd798&oe=605F4DD3'/></td>
                <td>{candidate.name}</td>
                <td>{candidate.designation}</td>
                <td>{candidate.status}</td>
                <td>...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
          <p>Showing {candidateDetails.length} out of {candidateDetails.length} results </p>
      </div>
    </div>
  );
};
export default RecruitmentTable;
