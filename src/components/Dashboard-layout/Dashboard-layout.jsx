import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    name: "Recruitment",
    link: "/recruitment",
  },
  {
    name: "Onboarding",
    link: "/onboarding",
  },
  {
    name: "Reports",
    link: "/reports",
  },
  {
    name: "Calendar",
    link: "/calendar",
  },
  {
    name: "Settings",
    link: "/settings",
  },
];

const Dashboard = ({ children }) => {
  const location = useLocation();
  return (
    <div className="dashboard">
      <aside className="navigation">
        <div className="logo">
          <h2>HR Management System</h2>
        </div>
        <navbar>
          {navItems.map((navItem, Index) => (
            <Link
              to={navItem.link}
              key={Index}
              className={`nav-items ${
                location.pathname === navItem.link ? "selected" : "nav-items"
              } `}
            >
              <div>{navItem.name}</div>
            </Link>
          ))}
        </navbar>

        <div className="svg">
          <img src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_528,w_938,x_0,y_0/w_auto:100,w_767,q_auto,f_auto/v1/Tools%20and%20Samples/HubPages_16x9_EEO_l4tucw" />
        </div>
      </aside>
      <section>{children}</section>
    </div>
  );
};

export default Dashboard;
