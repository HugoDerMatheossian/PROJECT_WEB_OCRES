import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/") {
            setActiveTab("Home");
        }
        else if(location.pathname === "/AllWebsite"){
            setActiveTab("AllWebsite");
        }
        else if(location.pathname === "/AddWebsite"){
            setActiveTab("AddWebsite");
        }
    }, [location])

  return (

    <div className='header'>
        <p>Anime Management System</p>
        <div className="header-right">
            <Link to="/">
                <p className={`${activeTab === "Home" ? "active" : ""}`} 
                onClick={() => setActiveTab("Home")}
                >
                    Home
                </p>
            </Link>
            <Link to="/AllWebsite">
                <p className={`${activeTab === "AllWebsite" ? "active" : ""}`} 
                onClick={() => setActiveTab("AllWebsite")}
                >
                    Liste Websites
                </p>
            </Link>
            <Link to="/AddWebsite">
                <p className={`${activeTab === "AddWebsite" ? "active" : ""}`}
                onClick={() => setActiveTab("AddWebsite")}
                >
                    Add Website
                </p>
            </Link>
        </div>
    </div>
  ); 
};

export default Header;