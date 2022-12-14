import React from "react";
import brandLogo from "../../assets/brand_logo.png";
import { HouseDoor } from "react-bootstrap-icons";
function NavIcons() {
  return (
    <div className="navIcons">
      <div className="navIconsContainer">
        <div>

        <img src={brandLogo} alt="" className="logoImg" />
        </div>
        <div className="navIcons_txtContainer">
            <HouseDoor/>
            <p className="">Home</p>
        </div>
        <div className="navIcons_txtContainer">
            <HouseDoor/>
            <p className="">Home</p>
        </div>
        <div className="navIcons_txtContainer">
            <HouseDoor/>
            <p className="">Home</p>
        </div>
        <div className="navIcons_txtContainer">
            <HouseDoor/>
            <p className="">Home</p>
        </div>
      </div>
    </div>
  );
}

export default NavIcons;
