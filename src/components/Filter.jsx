import React from 'react';

const filter = (props) => {
  return (
    <div>
      <div className="aldursbil">
        <p>Aldursbil:</p>
          {props.ages.map(age => {
            return (
              <a key={age} className={"button is-small is-rounded " + (props.selectedAges.includes(age) ? "is-primary" : null)}
              onClick={() => props.onSelected(age, "ages")}>{age}</a>
            );
          })}
      </div>
      <div className="categories">
        <p>Flokkur:</p>
          {props.categories.map(cat => {
            return (
              <a key={cat} className={"button is-small is-rounded " + (props.selectedCategories.includes(cat) ? "is-primary" : null)}
              onClick={() => props.onSelected(cat, "categories")}>{cat}</a>
            );
          })}
      </div>
    </div>
  );
}

export default filter;