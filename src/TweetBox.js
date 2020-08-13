import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import db from "./Firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayname: "rahul",
      username: "@raja",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1293079211184476161/9r2X9016_200x200.pjg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1293079211184476161/9r2X9016_200x200.jpg"
            alt="logo"
          />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional Image url enter.."
        />
        <Button type="submit" onClick={sendTweet} className="tweetbox-button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
