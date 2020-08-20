import React from "react";
import { members } from "../data.js";
import Sidebar from "./Sidebar";

export default function Team() {
  return (
    <div className="row space-between team">
      <Sidebar
        title="Team Members"
        list={members.map((member) => member.name)}
      />
      <ul className="window">
        {members.map(({ name, avatar }) => {
          return (
            <li key={name}>
              <span>{name}</span>
              <b></b>
              <img src={avatar} alt='Teammember Avatar'/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
