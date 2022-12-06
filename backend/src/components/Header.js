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
        <div className='MyTitle'>
            <img className='LogoTitle' src="png-transparent-red-cloud-illustration-china-papercutting-chinese-new-year-red-chinese-style-clouds-decoupage-other-text-cloud_1_-removebg-preview.png" alt="cloud1" />
            <h1 className='LogoTitle'>
                The
                <strong>Anime</strong>
                Nest
            </h1>
            <img  className='LogoTitle'src="png-transparent-red-cloud-illustration-china-papercutting-chinese-new-year-red-chinese-style-clouds-decoupage-other-text-cloud_1_-removebg-preview.png" alt="cloud2" />
        </div>
        <div className="AdminChoice">
            <Link to="/WebsitesAdminPage">
                <div className="WebsiteChoice">
                <p className={`${activeTab === "WebsitesAdminPage" ? "active" : ""}`} 
                onClick={() => setActiveTab("WebsitesAdminPage")}
                >
                    WEBSITE ADMIN PAGE
                </p>
                </div>
            </Link>
            <Link to="/VideosAdminPage">
                <div className="VideoChoice">
                <p className={`${activeTab === "VideosAdminPage" ? "active" : ""}`}
                onClick={() => setActiveTab("VideosAdminPage")}
                >
                    VIDEOS ADMIN PAGE
                </p>
                </div>
            </Link>
        </div>
    </div>
  ); 
};

export default Header;