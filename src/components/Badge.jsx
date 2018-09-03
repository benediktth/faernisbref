import React from "react";

const badge = props => {
  // if (props.selectedCategories.includes("utivera")) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-254x254">
            <img
              src={props.item.badgePictureUrl}
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
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  // } else {
  //   return null;
  // }
};

export default badge;
