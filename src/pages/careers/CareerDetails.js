import { useParams } from "react-router-dom";
import careersData from "./CareersData";

export default function CareerDetails() {
  const { id } = useParams();
  const selectedCareer = careersData.careers.find(
    (career) => career.id === Number(id)
  );

  if (!selectedCareer) {
    return <p>Career not found</p>;
  }
  return (
    <div className="career-details">
      <h2 className="id">{id}</h2>
      <h2>Career Details for {selectedCareer.title}</h2>
      <p>Starting salary: {selectedCareer.salary}</p>
      <p>Location: {selectedCareer.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
}
