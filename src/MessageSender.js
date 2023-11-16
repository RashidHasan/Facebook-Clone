import { Avatar, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import CloseIcon from "@mui/icons-material/Close";
import { InsertEmoticon } from "@mui/icons-material";
import "./CSS/messagesender.css";
import pict from "./CSS/Images/RH Logo - Copy.png";

function MessageSender() {
  const [open, SetOpen] = useState(true);
  const handleClose = () => {
    SetOpen(false);
  };

  const handleOpen = () => {
    SetOpen(true);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className="modalHeading">
              <h3>Create Post</h3>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>

            <div className="modalHeader__top">
              <Avatar src={pict} />
              <h5>Rashid Hasan</h5>
            </div>

            <div className="modalBody">
              <textarea
                rows="5"
                placeholder="What's on your mind Rashid ?"
              ></textarea>
            </div>

            <div className="modalFooter">
              <div className="modalFooterLeft">
                <h4>Add to your post</h4>
              </div>

              <div className="modalFooterRight">
                <IconButton>
                  <PhotoLibraryIcon
                    fontSize="large"
                    style={{ color: "lightgreen" }}
                  />
                </IconButton>

                <IconButton>
                  <VideoCallIcon fontSize="large" style={{ color: "red" }} />
                </IconButton>

                <IconButton>
                  <InsertEmoticon
                    fontSize="large"
                    style={{ color: "#ffb100" }}
                  />
                </IconButton>
              </div>
            </div>
            <div className="input">
              <input type="submit" className="post__submit" value="Post" />
            </div>
          </form>
        </div>
      </Modal>
      <div className="messagesender">
        <div className="messagesender__top">
          <Avatar />

          <form>
            <input
              type="text"
              placeholder="What's on you mind Rashid?"
              onClick={handleOpen}
            />
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
