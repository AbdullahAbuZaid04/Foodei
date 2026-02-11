import React from "react";
import "./Button.css";

export default function Button({ text, icon }) {
  return (
    <div>
      <button className="btn">
        {text} <span>{icon}</span>{" "}
      </button>
    </div>
  );
}
