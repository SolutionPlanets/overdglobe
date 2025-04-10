import React from 'react'
import { useContext } from "react";
import "./navbar.scss"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import userIcon from "../../assets/user_icon.png";
import { Link } from "react-router";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
    <div className="left">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Jinalayam</span>
      </Link>
      <HomeOutlinedIcon />
      {darkMode ? (
        <WbSunnyOutlinedIcon onClick={toggle} />
      ) : (
        <DarkModeOutlinedIcon onClick={toggle} />
      )}
      <GridViewOutlinedIcon />
      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
    <div className="right">
      <PersonOutlinedIcon />
      <EmailOutlinedIcon />
      <NotificationsOutlinedIcon />
      <div className="user">
        <img
          src= {userIcon}
          alt=""
        />
        <span>Foram Doshi</span>
      </div>
    </div>
  </div>
  )
}

export default Navbar
