import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
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
<Link style={{display: 'block',marginTop: '2rem'}} href={"https://github.com/remi5782"} variant="contained" color="secondary">
  <i>My GitHub Repo</i>
</Link>
<Link style={{display: 'block',marginTop: '2rem'}} href={"https://www.linkedin.com/in/remi-devaraju-09770420/"} variant="contained" color="secondary">
  <i>My LinkedIn Page</i>
</Link>
      </div>
    </div>
  );
}
