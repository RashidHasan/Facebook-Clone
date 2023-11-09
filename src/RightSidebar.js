import React from "react";
import "./CSS/rghit.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CampaignIcon from "@mui/icons-material/Campaign";
import SwitchAccessShortcutIcon from "@mui/icons-material/SwitchAccessShortcut";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

function RightSidebar() {
  return (
    <div className="widget">
      <div className="widget__header">
        <div className="widget__headerLeft">
          <h4>Your Pages and Profiles</h4>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://e1.pxfuel.com/desktop-wallpaper/1020/391/desktop-wallpaper-best-4-java-on-hip-java-logo.jpg" />
          <h4>Programming For Java</h4>
        </div>

        <div className="widget__bodyOptions ml10">
          <CampaignIcon />
          <p>Promotion</p>
        </div>

        <div className="widget__bodyOptions ml10">
          <SwitchAccessShortcutIcon />
          <p>Switch to page</p>
        </div>
      </div>

      <hr />
      <br />

      <div className="widget__header">
        <div className="widget__headerLeft">
          <h4>Contact</h4>
        </div>
        <div className="widget__headerRight">
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://e1.pxfuel.com/desktop-wallpaper/1020/391/desktop-wallpaper-best-4-java-on-hip-java-logo.jpg" />
          <h4>Programming For Java</h4>
        </div>
      </div>

      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://e1.pxfuel.com/desktop-wallpaper/1020/391/desktop-wallpaper-best-4-java-on-hip-java-logo.jpg" />
          <h4>Programming For Java</h4>
        </div>
      </div>

      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://e1.pxfuel.com/desktop-wallpaper/1020/391/desktop-wallpaper-best-4-java-on-hip-java-logo.jpg" />
          <h4>Programming For Java</h4>
        </div>
      </div>

      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://e1.pxfuel.com/desktop-wallpaper/1020/391/desktop-wallpaper-best-4-java-on-hip-java-logo.jpg" />
          <h4>Programming For Java</h4>
        </div>
      </div>

      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://e1.pxfuel.com/desktop-wallpaper/1020/391/desktop-wallpaper-best-4-java-on-hip-java-logo.jpg" />
          <h4>Programming For Java</h4>
        </div>
      </div>

      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://e1.pxfuel.com/desktop-wallpaper/1020/391/desktop-wallpaper-best-4-java-on-hip-java-logo.jpg" />
          <h4>Programming For Java</h4>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
