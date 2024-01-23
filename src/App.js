import React from "react";
import "../styles/App.css";
import Modal from "./Modal";

const notification = [
  {
    userName: "Mark Webber",
    userAction: "reaction",
    userAvatar: "assets/images/avatar-mark-webber.webp",
    post: {
      type: "text",
      content: "My first tournament today!",
    },
    timeStamp: "1m ago",
    isRead: false,
  },
  {
    userName: "Angela Gray",
    userAvatar: "assets/images/avatar-angela-gray.webp",
    userAction: "follow",
    timeStamp: "5m ago",
    isRead: false,
  },
  {
    userName: "Jacob Thompson",
    userAvatar: "assets/images/avatar-jacob-thompson.webp",
    userAction: "joined-group",
    post: {
      type: "text",
      content: "Chess Club!",
    },
    timeStamp: "1 day ago",
    isRead: false,
  },
  {
    userName: "Rizky Hasanuddin",
    userAvatar: "assets/images/avatar-rizky-hasanuddin.webp",
    userAction: "message",
    post: {
      type: "text",
      content:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    timeStamp: "5 days ago",
    isRead: false,
  },
  {
    userName: "Kimberly Smith",
    userAvatar: "assets/images/avatar-kimberly-smith.webp",
    userAction: "comment",
    post: {
      type: "image",
      content: "assets/images/image-chess.webp",
    },
    timeStamp: "1 week ago",
    isRead: false,
  },
  {
    userName: "Nathan Peterson",
    userAvatar: "assets/images/avatar-nathan-peterson.webp",
    userAction: "reaction",
    post: {
      type: "text",
      content: "5 end-game strategies to increase your win rate",
    },
    timeStamp: "2 weeks ago",
    isRead: true,
  },
  {
    userName: "Anna Kim",
    userAvatar: "assets/images/avatar-anna-kim.webp",
    userAction: "left-group",
    post: {
      type: "text",
      content: "Chess Club!",
    },
    timeStamp: "2 weeks ago",
    isRead: true,
  },
];

function App() {
  return (
    <>
      <Modal item={notification} />
    </>
  );
}

export default App;
