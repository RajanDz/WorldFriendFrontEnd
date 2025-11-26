import React, { useState } from "react";
import logo from "../../../assets/images/svg/logo.png";
import profilePic from "../../../assets/images/profilePictureDemo.jpg";
import { ProfileDropdown } from "../DropdownMenu";
import { HiMenuAlt3 } from "react-icons/hi";
import "../../../styles/NavigationBar.css";
import { useNavigate } from "react-router-dom";

export function NavigationBar() {
  const navigate = useNavigate();
  const user = null;
  return (
    <div className="navbar-container">
      <div className="navbar">   
        <div className="brand" onClick={() => navigate("/")}>
          <img src={logo} alt="WorldFriend logo" className="logo" />
          <h1 className="brand-name">WorldFriend</h1>
        </div>
        {user ? (

        <div className="profile-options">
          <div className="burger">
            <HiMenuAlt3 />
          </div>
          <ProfileDropdown avatarSrc={profilePic} userName={"John"}/>
        </div>
        ): (
          <p className="auth-btn" onClick={() => navigate("/signin")}>Sign in</p>
        )}
      </div>
    </div>
  );
}
