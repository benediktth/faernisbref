import React from "react";

const badge = props => {
  if (props.selectedCategories.includes("utivera")) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src="https://dds.dk/sites/default/files/2018-06/B%C3%A5l%405x.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.item.title}</p>
            </div>
          </div>

          <div className="content">
            <ul>
              {props.item.ages.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default badge;
