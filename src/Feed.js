import React from "react";
import "./CSS/Feed.css";
import Storyreel from "./Storyreel";
import MessageSender from "./MessageSender";
import PostImage from "./CSS/Images/Post.png";
import pic from "./CSS/Images/RH Logo - Copy.png";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <Storyreel />
      <MessageSender />
      <Post
        photoURL={pic}
        image={PostImage}
        username="Rashid Hasan"
        timestamp="10:40 AM"
        message="This is my account in LinkenIn."
      />

      <Post
        photoURL="https://marketplace.canva.com/EAFOWUXOOvs/1/0/800w/canva-green-gradient-minimalist-simple-instagram-profile-picture-ZtCfUoGJtSw.jpg"
        // image={PostImage}
        username="Salam Mo"
        timestamp="2h"
        message="For people interested in the field of graphic design, you can contact me for training: https://dribbble.com/tags/train."
      />

      <Post
        photoURL="https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg"
        image="https://www.macworld.com/wp-content/uploads/2023/01/which_programming_language_to_learn_thumb800.jpg?quality=50&strip=all"
        username="Khaled Saleh"
        timestamp="5 Nov"
        message="Java and Python are two of the most popular programming languages. Of the two, Java is the faster language, but Python is simpler and easier to learn. Each is well-established, platform-independent, and part of a large, supportive community. But that is where the similarities end."
      />
    </div>
  );
}

export default Feed;
