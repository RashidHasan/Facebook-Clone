import { Avatar, Modal } from "@mui/material";
import React, { useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import "./CSS/messagesender.css";
function MessageSender() {
  const [open, SetOpen] = useState(true);
  const handleClose = () => {
    SetOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className="modalHeading">
              <h3>Create Post</h3>
            </div>
          </form>
        </div>
      </Modal>
      <div className="messagesender">
        <div className="messagesender__top">
          <Avatar />

          <form>
            <input type="text" placeholder="What's on you mind Rashid?" />
          </form>
        </div>

        <div className="messagesender__bottom">
          <div className="messagesenderOptions">
            <VideoCallIcon style={{ color: "red" }} fontSize="large" />
            <p>Live Video </p>
          </div>

          <div className="messagesenderOptions">
            <PhotoLibraryIcon
              style={{ color: "lightgreen" }}
              fontSize="large"
            />
            <p>Photo/Video</p>
          </div>

          <div className="messagesenderOptions">
            <SentimentVerySatisfiedIcon
              style={{ color: "#ffb100" }}
              fontSize="large"
            />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageSender;
