import React, { useState } from "react";
import "../styles/Notification.css";

function Notification(props) {
  const [markedAsRead, setMarkedAsRead] = useState(false);
  // console.log(props.notification);

  const notification = props.notification;
  const handleClick = props.handleClick;
  // console.log(props.index);

  // console.log(notification);
  let userName, userAction, userAvatar, timeStamp, post, type, isRead, index;
  if (notification != undefined) {
    userName = notification.userName;
    userAvatar = notification.userAvatar;
    timeStamp = notification.timeStamp;
    isRead = notification.isRead;
    index = props.index;

    switch (notification.userAction) {
      case "reaction":
        userAction = "reacted to your recent post";
        post = notification.post.content;
        type = notification.post.type;
        break;
      case "photo":
        userAction = "commented on your picture";
        break;
      case "follow":
        userAction = "followed you";
        break;
      case "joined-group":
        userAction = "has joined your group";
        post = notification.post.content;
        break;
      case "left-group":
        userAction = "has left the group";
        post = notification.post.content;
        break;
      case "message":
        userAction = "sent you a private message";
        post = notification.post.content;
        type = notification.post.type;
        break;
      case "comment":
        userAction = "commented on your picture";
        post = notification.post.content;
        type = notification.post.type;
      default:
        break;
    }
  }
  // console.log(userName);

  function markRead(Index) {
    event.preventDefault();
    notification.isRead = true;
    console.log("Name", props.notification.userName);
    console.log(Index);
    handleClick(props.notification.userName);
  }

  if (type == "text") {
    if (notification.userAction != "message") {
      return (
        <>
          <div
            class={"notification " + (isRead == false ? "unread" : "")}
            onClick={() => markRead(index)}
          >
            <img src={userAvatar} alt="" class="notification-avatar" />
            <div class="notification-info">
              <div class="notification-message">
                <p class={isRead == false ? "dot" : ""}>
                  <a className="user-name">{userName} </a>
                  <span className="user-action">{userAction} </span>
                  <a className="post">{post}</a>
                </p>
              </div>
              <p class="time-stamp">{timeStamp}</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            class={"notification wrap " + (isRead == false ? "unread" : "")}
            onClick={() => markRead(index)}
          >
            <img src={userAvatar} alt="" class="notification-avatar" />
            <div class="notification-info">
              <div class="notification-message">
                <p class={isRead == false ? "dot" : ""}>
                  <a className="user-name">{userName} </a>
                  <span className="user-action">{userAction}</span>
                </p>
              </div>
              <p class="time-stamp">{timeStamp}</p>
            </div>
            <p class="post message">{post}</p>
          </div>
        </>
      );
    }
  } else if (type == "image") {
    return (
      <>
        <div
          class={"notification " + (isRead == false ? "unread" : "")}
          onClick={() => markRead(index)}
        >
          <img src={userAvatar} alt="" class="notification-avatar" />
          <div class="notification-info">
            <div class="notification-message">
              <p class={isRead == false ? "dot" : ""}>
                <a className="user-name">{userName} </a>
                <span className="user-action">{userAction}</span>
              </p>
            </div>
            <p class="time-stamp">{timeStamp}</p>
          </div>
          <a className="image-link">
            {" "}
            <img class="post-image" src={post} />
          </a>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          class={"notification " + (isRead == false ? "unread" : "")}
          onClick={() => markRead(index)}
        >
          <img src={userAvatar} alt="" class="notification-avatar" />
          <div class="notification-info">
            <div class="notification-message">
              <p class={isRead == false ? "dot" : ""}>
                <span className="user-name">{userName} </span>
                <span className="user-action">{userAction} </span>
                <a className="post">{post}</a>
              </p>
            </div>
            <p class="time-stamp">{timeStamp}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Notification;
