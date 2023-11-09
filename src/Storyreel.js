import React from "react";
import "./CSS/Story.css";
import image from "./CSS/Images/RH Logo - Copy.png";
import { Avatar } from "@mui/material";
function Storyreel() {
  return (
    <div className="storyReel">
      <div
        className="story"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais')",
        }}
      >
        <Avatar src={image} />
        <h4>Rashid Hasan</h4>
      </div>

      <div
        className="story"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5jeSbuYjEPOd5FzLP9haXUbZLKWDaFqF2g&usqp=CAU')",
        }}
      >
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU" />
        <h4>Ahmad Elwan</h4>
      </div>

      <div
        className="story"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aDHlzgAfDG4_gGi4P2MKfwY-dqaqLwH-kPuyfU240-BZd32D5NsX_NSbdj6l1gg0OQU&usqp=CAU" />
        <h4>Samer Omar</h4>
      </div>

      <div
        className="story"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/96/91/e1/9691e1df33394b96565767f82ed8b6c8.jpg')",
        }}
      >
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mRrEYHX5D7eIeaSl4WCwaJUohEObci2d0PFq9S1PKSJF5qd2OXHYlnsj-GauUeCV_A0&usqp=CAU" />
        <h4>Ali Hassan</h4>
      </div>

      <div
        className="story"
        style={{
          backgroundImage:
            "url('data:image/jpeg;base64,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')",
        }}
      >
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnS5BbdlKLpPJbrcDEEpPPqOSTwPjo6XPq6IqbhwRN3xzRf_DPf5Gz4WCnHOBMIDORaA&usqp=CAU" />
        <h4>Samer Omar</h4>
      </div>
    </div>
  );
}

export default Storyreel;
