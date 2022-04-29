import React from "react";

import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard-container shadow-md">
      <div className="ProfileCard-avatar" />
      <div className="text-center">
        <span className="ProfileCard-title">Miical</span>
        <span className="ProfileCard-subtitle"> 's blog</span>
      </div>
      <hr className="ProfileCard-line"/>

    </div>
  );
};

export default ProfileCard;
