import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  if (!careers) {
    return <div>Loading...</div>;
  }

  return (
    <div className="careers"> 
      {careers.map((career) => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// data loader
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  const data = await res.json();
  return data;
};
