import React from "react";

function SidebarOption({ active, Icon, text }) {
  return (
    <div className={`sidebaroption ${active && "sidebaroption--active"}`}>
      <Icon className="icon" />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
