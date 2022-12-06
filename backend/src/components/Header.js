import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [activeTab, setActiveTab] = useState("WebsitesAdminPage");

    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/WebsitesAdminPage"){
            setActiveTab("WebsitesAdminPage");
        }
        else if(location.pathname === "/VideosAdminPage"){
            setActiveTab("VideosAdminPage");
        }
    }, [location])

  return (

    <div className='header'>
        <p>Anime Management System</p>
        <div className="header-right">
            <Link to="/WebsitesAdminPage">
                <p className={`${activeTab === "WebsitesAdminPage" ? "active" : ""}`} 
                onClick={() => setActiveTab("WebsitesAdminPage")}
                >
                    WEBSITE ADMIN PAGE
                </p>
            </Link>
            <Link to="/VideosAdminPage">
                <p className={`${activeTab === "VideosAdminPage" ? "active" : ""}`}
                onClick={() => setActiveTab("VideosAdminPage")}
                >
                    VIDEOS ADMIN PAGE
                </p>
            </Link>
        </div>
    </div>
  ); 
};

export default Header;