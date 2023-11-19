import React from "react";
import Sidebaroptions from "./Sidebaroptions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import icon1 from "./CSS/Images/fbIcon1.png";
import icon2 from "./CSS/Images/fbIcon2.png";
import icon3 from "./CSS/Images/fbIcon3.png";
import icon4 from "./CSS/Images/fbIcon4.png";
import icon5 from "./CSS/Images/fbIcon5.png";
import icon6 from "./CSS/Images/fbIcon6.png";
import icon7 from "./CSS/Images/fbIcon7.png";
import icon8 from "./CSS/Images/fbIcon8.png";
import Pic from "./CSS/Images//RH Logo - Copy.png";
import "./CSS/Sidebar.css";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <Sidebaroptions src={user.photoURL} title={user.displayName} />
      <Sidebaroptions src={icon8} title="Friends" />
      <Sidebaroptions src={icon5} title="Memories" />
      <Sidebaroptions src={icon3} title="Saved Items" />
      <Sidebaroptions src={icon2} title="Groups" />
      <Sidebaroptions src={icon4} title="Viedo" />
      <Sidebaroptions src={icon7} title="Marketplace" />
      <Sidebaroptions src={icon1} title="Favorite" />
      <Sidebaroptions src={icon6} title="Saved" />
      <Sidebaroptions Icon={KeyboardArrowDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
