import React from "react";
import brandLogo from "../../assets/mainBrandLogo.png";
import {
  HouseDoor,
  Book,
  FileEarmarkMinus,
  ChatLeft,
  Gear,
  BoxArrowRight,
} from "react-bootstrap-icons";

function NavIcons() {
  return (
    <div className="navIcons">
      <div className="imgContainer">
        <img src={brandLogo} alt="" className="logoImg" />
      </div>
      <div className="navItemsContainer">
        <HouseDoor className="navIcon" />
        <p className="iconTxt">Home</p>
        <Book className="navIcon" />
        <p className="iconTxt">my courses</p>
        <FileEarmarkMinus className="navIcon" />
        <p className="iconTxt">certificate</p>
        <ChatLeft className="navIcon" />
        <p className="iconTxt">messages</p>
        <Gear className="navIcon" />
        <p className="iconTxt">settings</p>
      </div>
      <div className="navItemsContainer">
        <BoxArrowRight className="navIcon" />
        <p className="iconTxt">log out</p>
      </div>
    </div>
  );
}

export default NavIcons;
