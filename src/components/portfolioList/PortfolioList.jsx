import React from "react";
import "./portfolioList.scss";
export default function portfolioList({ id, title, active, setSelected }) {
  return (
    <li
      key={title.toString()}
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
