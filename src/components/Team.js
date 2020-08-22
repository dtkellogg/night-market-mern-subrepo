import React from "react";
import { members, sponsors } from "../data.js";
import Sidebar from "./Sidebar";
// import Helena from '../img/team/Helena.webp'

export default function Team() {
  return (
    <div className="team">
      {/* <Sidebar
        title="Team Members"
        list={members.map((member) => member.name)}
      /> */}
      <div className="team-members">
        <h2 className='header__team'>Meet out team!</h2>
        <ul className="team__list">
          {members.map(({ name, avatar }) => {
            return (
              <li key={name} className="team__item">
                <img
                  src={avatar}
                  alt="Teammember Avatar"
                  className="team__img"
                />
                <b></b>
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sponsors">
        <h2 className='header__team'>And our sponsors...</h2>
        <ul className="team__list">
          {sponsors.map(({ name, avatar }) => {
            return (
              <li key={name} className="team__item">
                <img
                  src={avatar}
                  alt="Sponsor Avatar"
                  className="team__img"
                />
                <b></b>
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}