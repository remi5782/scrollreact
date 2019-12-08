import React from "react";

export default function Section({ title, subtitle, dark, id, activeContent }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className={"section-content" + (activeContent ? " active": "")} id={id}>
        <h1>{title}</h1>
        <p>{"The page to be developed"}</p>
      </div>
    </div>
  );
}
