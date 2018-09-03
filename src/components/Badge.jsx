import React from "react";

const badge = props => {
  return (
    <div className="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://dds.dk/sites/default/files/2018-06/B%C3%A5l%405x.png"
            alt="Placeholder image"/>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{props.name}</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </div>
      </div>
    </div>
  );
};

export default badge;
