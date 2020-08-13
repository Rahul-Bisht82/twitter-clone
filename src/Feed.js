import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./Firebase";
function Feed() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* ---header---- */}
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      {/* ---tweetbox---- */}
      <TweetBox />

      {post.map((post) => (
        <Post
          displayname={post.displayname}
          username={post.username}
          text={post.text}
          verified={post.verified}
          image={post.image}
          avatar={post.avatar}
        />
      ))}

      {/* ---post--- */}
      {/* <Post
        displayname="rahul bisht"
        username="@rahulbisht4749"
        text="front end developer"
        image="https://pbs.twimg.com/profile_images/1293079211184476161/9r2X9016_200x200.jpg"
        avatar="https://pbs.twimg.com/profile_images/1293079211184476161/9r2X9016_200x200.pjg"
      />
      <Post
        displayname="Kapil Sharma"
        username="@kapilsharmak9"
        text="अफ़वाह थी कि मेरी तबीयत ख़राब है          
          
             "
        verified={true}
        image="https://pbs.twimg.com/media/EfK14gPUwAAus0L?format=jpg&name=small"
        avatar="https://pbs.twimg.com/profile_images/1152215560869953536/mSjwFhbF_400x400.jpg"
      />
      <Post
        displayname="Dushyant Chautala"
        username="@Dchautala"
        verified={false}
        text="श्री हरमंदिर साहिब के दर्शन किये।"
        image="https://pbs.twimg.com/media/EfMem8wU4AoIcU-?format=jpg&name=small"
        avatar="https://pbs.twimg.com/profile_images/1232573897976844288/n6Ac0evP_400x400.jpg"
      />
      <Post
        displayname="Amit Shah
"
        username="@AmitShah
"
        verified={true}
        text="जय श्री कृष्णा"
        image="https://pbs.twimg.com/media/EfLvF_ZUYAATOts?format=jpg&name=small"
        avatar="https://pbs.twimg.com/profile_images/1180491411172413440/AunoqDQW_400x400.jpg"
      />
      <Post
        displayname="Dushyant Chautala"
        username="@Dchautala"
        verified={true}
        text="श्री हरमंदिर साहिब के दर्शन किये।"
        image="https://pbs.twimg.com/media/EfMem8wU4AoIcU-?format=jpg&name=small"
        avatar="https://pbs.twimg.com/profile_images/1232573897976844288/n6Ac0evP_400x400.jpg"
      /> */}

      {/* ---post--- */}
      {/* ---post--- */}
      {/* ---post--- */}
      {/* ---post--- */}
      {/* ---post--- */}
    </div>
  );
}

export default Feed;
