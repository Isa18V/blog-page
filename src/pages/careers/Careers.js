import React from "react";
import { Link } from "react-router-dom";
import careersData from "./CareersData";

export default function Careers() {
  return (
    <div className="careers">
      {careersData.careers.map((career) => (
        <Link to={`/careers/${career.id}`} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}
