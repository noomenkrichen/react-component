import React from "react";
import photo from "./photo.jpg";

const ProfilePhoto = () => {
  return (
    <div className="photo">
      <img src={photo} alt="My Photo" />
    </div>
  );
};

export default ProfilePhoto;
