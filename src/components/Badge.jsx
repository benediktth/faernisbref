import React from "react";

const badge = props => {
  // if (props.selectedCategories.includes("utivera")) {
  return (
    <a href={"http://www.skatamal.is/faernimerki/" + props.item.name}>
      <div
        className="card"
        onMouseEnter={() => props.hover(props.item.title, true)}
        onMouseLeave={() => props.hover(props.item.title, false)}
      >
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={props.item.badgePictureUrl} alt="Placeholder image"/>
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
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
  // } else {
  //   return null;
  // }
};

export default badge;
