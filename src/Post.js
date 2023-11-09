import React from "react";
import "./CSS/Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";
import CloseIcon from "@mui/icons-material/Close";
import PostImage from "./CSS/Images/Post.png";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";

function Post({ photoURL, image, username, timestamp, message }) {
  return (
    <>
      <div className="post">
        <div className="post__top">
          <div className="post__topLeft">
            <Avatar src={photoURL} />
            <div className="postInfo">
              <h4>{username}</h4>
              <p>
                {timestamp} <PublicIcon />
              </p>
            </div>
          </div>
          <div className="IconsMoreClose">
            <MoreHorizIcon />
            <CloseIcon />
          </div>
        </div>
        <div className="post__middle">
          <p>{message} </p>
          {image && <img src={image} />}
        </div>

        <div className="post__bottom">
          <div className="post__bottomOptions">
            <ThumbUpOffAltIcon /> <p>Like</p>
          </div>
          <div className="post__bottomOptions">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post__bottomOptions">
            <SendIcon />
            <p>Send</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
