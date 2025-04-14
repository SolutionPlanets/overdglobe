import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friends.png";
import userIcon from "../../assets/user_icon.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const {currentUser} = useContext(AuthContext)

  const queryClient = useQueryClient();
  //after making post req, fetch the post on a page using mutation
  const mutation = useMutation({
    mutationFn: (newPost) => makeRequest.post("/posts", newPost),
    onSuccess: () => {
      // Invalidate and refetch posts
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, image: imgUrl });
    setDesc("");
    setFile(null);
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img
              src={userIcon}
              alt=""
            />
            <input
              type="text"
              placeholder={currentUser ? `What's on your mind, ${currentUser.username}?` : "Login to write a post"}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              disabled={!currentUser} />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} 
            onChange={(e) => setFile(e.target.files[0])}/>
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
          <button onClick={handleClick} disabled={!currentUser}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;