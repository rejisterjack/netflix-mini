import React from "react";
import Card from "../components/Card";
import { movieData } from "../data";

export default function Home() {
  return (
    <div className="container mt-5 card-container">
      {movieData.map((ele, i) => (
        <Card
          key={i}
          name={ele.name}
          time={ele.time}
          img={ele.img}
          desc={ele.desc}
        />
      ))}
    </div>
  );
}
