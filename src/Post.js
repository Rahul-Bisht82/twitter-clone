import React from "react";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
const Post = ({ displayname, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar} alt="logo" />
      </div>
      <div className="post-body">
        <div className="post-body-header">
          <div className="post-body-header-text">
            <h3>
              {displayname}
              <span>
                {verified && <VerifiedUserIcon className="verify-icon" />}{" "}
                {username}
              </span>
            </h3>
          </div>
          <div className="header-description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="img" className="body-image" />
        <div className="post-footer">
          <ChatBubbleOutlineIcon fontsize="small" />
          <RepeatIcon fontsize="small" />
          <FavoriteBorderIcon fontsize="small" />
          <PublishIcon fontsize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
