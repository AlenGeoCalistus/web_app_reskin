import React from "react";
import { Card } from "react-bootstrap";
import CourseSectionCard from "../courseSectionCard/CourseSectionCard";
function CourseSection() {
  // src="https://dms.licdn.com/playlist/C5605AQE8lytf8_UbbA/mp4-720p-30fp-crf28/0/1660308265936?e=1671649200&v=beta&t=OsBUoFMWhvtK1OPlogchfEO60MSZH6jl8dszniWVM8g"

  return (
    <div className="courseSection">
      <div className="courseLeftContainer">
        <div className="courseHeaderContainer">
          <h3 className="courseHeader">German A1: English</h3>
        </div>
        <div className="courseSubheaderContainer">
          <p className="courseSubheader">All</p>
          <p className="courseSubheader" style={{ color: "#adadad" }}>
            Active
          </p>
          <p className="courseSubheader" style={{ color: "#adadad" }}>
            Completed
          </p>
        </div>
        <div className="courseSectionCard">
          <CourseSectionCard />
          <CourseSectionCard />
          <CourseSectionCard />
          <CourseSectionCard />
          <CourseSectionCard />
          <CourseSectionCard />
        </div>
      </div>
      <div className="playerSection">
        <div className="playerVideoCard">
          <video
            style={{
              maxWidth: "100%", 
              maxHeight: "20rem",
              objectFit: "cover",
              borderRadius: "20px",
            }}
            //
            src="https://dms.licdn.com/playlist/C5605AQE8lytf8_UbbA/mp4-720p-30fp-crf28/0/1660308265936?e=1671649200&v=beta&t=OsBUoFMWhvtK1OPlogchfEO60MSZH6jl8dszniWVM8g"
            autoplay
            controls
            loop
          ></video>
          <div className="playerVideoCardBodyTxtContainer">
            <h6 className="playerVideoCardHeading">German A1: Malayalam </h6>
            <p className="playerVideoCardBodyTxt">
              This is the world's first Digital Hybrid German A1 Course. This
              course includes video lectures, online assignments, vocabulary
              training and live classes with expert language trainers. This
              course will provide you with everything you need to to pass and
              get a high score in International German language certification
              exams like ÖSD Zertifikat A1, Goethe-Zertifikat A1, telc Deutsch
              A1 etc
            </p>
          </div>
          <div className="trainerDetails">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3PAIsW5V1g-x_qAJCIcmXd5oo7S-Gr0VrvCMHjEwXLnvRKu5CWSDnxGtSE9QEZqRQIc&usqp=CAU"
              alt=""
              className="trainerImg"
            />
            {/* <div className="trainerNameContainer">
              <h6 className="trainerNameTxt">Jaison Abey Sabu</h6>
              <p className="trainerSpecialized">German Expert</p>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
