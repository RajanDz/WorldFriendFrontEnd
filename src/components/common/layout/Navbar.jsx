import React from "react";
import logo from "../../../assets/images/svg/logo.png";
import profilePic from "../../../assets/images/profilePictureDemo.jpg";
import { ProfileDropdown } from "../DropdownMenu";
import { HiMenuAlt3 } from "react-icons/hi";
import "../../../styles/NavigationBar.css";

export function NavigationBar() {
  return (
    <div className="navbar">
      <div className="brand">
        <img src={logo} alt="WorldFriend logo" className="logo" />
        <h1 className="brand-name">WorldFriend</h1>
      </div>

      <div className="profile-options">
        <div className="burger">
          <HiMenuAlt3 />
        </div>
        <ProfileDropdown avatarSrc={profilePic} userName={"John"}/>
      </div>
    </div>
  );
}
