import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import Header from "./Header";
import "../styles/Modal.css";

export default function Modal(props) {
  const [unreadNotifications, setUnreadNotifications] = useState([]);
  const [notificationList, setNotificationList] = useState([]);
  const [currentUnreadCount, setCurrentUnreadCount] = useState(0);

  useEffect(() => {
    try {
      const notifications = props.item || []; // Fallback to empty array if props.item is undefined
      setNotificationList(notifications);

      const unread = notifications.filter(
        (notification) => !notification.isRead
      );
      setUnreadNotifications(unread);
    } catch (error) {
      console.error("Error processing notifications:", error);
    }
  }, [props.items]); // Depend on props.item to re-run when it changes

  useEffect(() => {
    console.log("Updated unread notifications:", unreadNotifications);
    setCurrentUnreadCount(unreadNotifications.length);
  }, [unreadNotifications]);

  const removeAll = (e) => {
    e.preventDefault();
    setUnreadNotifications((unreadNotifications) => {
      unreadNotifications.map((notification) => {
        notification.isRead = true;
      });
      return [];
    });
  };

  const removeItem = (name) => {
    setUnreadNotifications((unreadNotifications) => {
      return unreadNotifications.filter(
        (notifcation) => notifcation.userName !== name
      );
    });
  };

  return (
    <div class="modal">
      <Header count={currentUnreadCount} handleClick={removeAll} />
      {notificationList.map((notification) => {
        const index = notificationList.indexOf(notification);
        return (
          <Notification
            notification={notification}
            name={notification.userName}
            index={index}
            handleClick={removeItem}
          />
        );
      })}
    </div>
  );
}
