import React, { useState, useRef, useEffect } from "react";
import "../../styles/ProfileDropdown.css";

export function ProfileDropdown({ avatarSrc, userName }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-dropdown" ref={ref}>
      <img
        src={avatarSrc}
        alt="User avatar"
        className="profile-avatar"
        onClick={() => setOpen(prev => !prev)}
      />
      {open && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">🧑 {userName}</li>
          <li className="dropdown-item">Settings</li>
          <li className="dropdown-item">Log out</li>
        </ul>
      )}
    </div>
  );
}
