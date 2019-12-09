import React from "react";
import Button from "@material-ui/core/Button";
export default function Section({ title, subtitle, dark, id, activeContent }) {
const handleClick= ()=>{
  window.open('/CV_Latest.docx')
}
  return (
    <div className={"section"}>
      <div className={"section-content" + (activeContent ? " active": "")} id={id}>
        <h1>{title}</h1>
        <p>{"Please download the CV here"}</p>
        <Button onClick={()=>handleClick()} variant="contained" color="secondary">
  Download CV
</Button>
      </div>
    </div>
  );
}
