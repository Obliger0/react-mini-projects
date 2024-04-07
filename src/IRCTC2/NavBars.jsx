import { useState } from "react";
import { navData } from "./data";
import "./navbars.css";

export function NavBars() {
  return (
    <ul className="nav-bar-container">
      {navData.map((data) => {
        return <ListComp data={data} />;
      })}
    </ul>
  );
}

function NavBarsComp({ subData = [], className }) {
  return (
    <ul className={`sub-list  ${className}`}>
      {subData.map((data) => {
        return <ListComp data={data} />;
      })}
    </ul>
  );
}

function ListComp({ data = [] }) {
  const [activeHover, setActiveHover] = useState(false);
  return (
    <li
      className={`navlist ${data?.cell?.length > 0 && "sub-nav-list"}`}
      onMouseEnter={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
    >
      {data.name}
      {data?.cell?.length > 0 && activeHover && (
        <NavBarsComp subData={data.cell} className={data.className} />
      )}
    </li>
  );
}
