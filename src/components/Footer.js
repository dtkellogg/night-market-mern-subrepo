import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__pre-space"></div>
      <div className="subscription">
        <input
          className="subscription__input"
          placeholder="Sign up for Newsletter"
        ></input>
        <button>Subscribe</button>
      </div>
      <span>&copy; 2020 by Damian Toshiya Kellogg. All rights reserved.</span>
    </div>
  );
}
