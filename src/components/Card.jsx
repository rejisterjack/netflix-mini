import React from "react";

export default function Card(props) {
  return (
    <div>
      <a href="" className="card">
        <img src={props.img} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img className="card__thumb" src={props.img} alt="" />
            <div className="card__header-text">
              <h3 className="card__title">{props.name}</h3>
              <span className="card__status">{props.time} hour long</span>
            </div>
          </div>
          <p className="card__description">{props.desc}</p>
        </div>
      </a>
    </div>
  );
}
