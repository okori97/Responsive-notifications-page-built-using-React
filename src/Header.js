import React, { useState } from "react";
import "../styles/Header.css";

export default function Header({ count, handleClick }) {
  return (
    <div class="notifcation-header">
      <div class="details">
        <h1>Notifications</h1>
        <div class="counter">{count}</div>
      </div>
      <a href="" class="mark-read" onClick={handleClick}>
        Mark all as read
      </a>
    </div>
  );
}
