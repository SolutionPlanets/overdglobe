import "./leftbar.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import userIcon from "../../assets/user_icon.png";
import Friends from "../../assets/friends.png";
import Group from "../../assets/group.png";
import Video from "../../assets/video.png";
import Event from "../../assets/events.png";
import Market from "../../assets/market.png";

const Leftbar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={userIcon}
              alt=""
            />
            <span>{currentUser.username}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Group} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Video} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Event} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Promotion Ads</span>
        </div>     
        
      </div>
    </div>
  );
};

export default Leftbar;