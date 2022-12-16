import React from "react";
import { Reception4 } from "react-bootstrap-icons";

function CourseSectionCard() {
  return (
    <>
      <div className="cardContainer">
        <div className="cardImgContainer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3PAIsW5V1g-x_qAJCIcmXd5oo7S-Gr0VrvCMHjEwXLnvRKu5CWSDnxGtSE9QEZqRQIc&usqp=CAU"
            alt=""
            className="cardImg"
          />
        </div>
        <div className="cardTxtContainer">
          <h6 className="cartHeadingText">Lesson 1: Alphabets</h6>
          <p className="cardBodyText">
            This course is designed for beginners who wish to learn german
            easily
          </p>
          <div className="cardBottomIconContainer">
            <Reception4 className="cardBottomIcon" />
            <span className="cardBottomIconText">Beginner</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseSectionCard;
