import React from 'react';

const filter = (props) => {
  return (
    <div>
      <div className="aldursbil">
        <p>Aldursbil:</p>
        <a className={"button is-small is-rounded " + (props.selectedCategories.includes("drekaskatar") ? "is-primary" : null)}
          onClick={() => props.onSelected("drekaskatar")}>Drekaskatar</a>
        <a className={"button is-small is-rounded " + (props.selectedCategories.includes("falkaskatar") ? "is-primary" : null)}
          onClick={() => props.onSelected("falkaskatar")}>Falkaskatar</a>
        <a className={"button is-small is-rounded " + (props.selectedCategories.includes("drottskatar") ? "is-primary" : null)}
          onClick={() => props.onSelected("drottskatar")}>Drottskatar</a>
      </div>
      <div className="categories">
        <p>Flokkur:</p>
        <a className={"button is-small is-rounded " + (props.selectedCategories.includes("utivist") ? "is-primary" : null)}
          onClick={() => props.onSelected("utivist")}>Utivist</a>
        <a className={"button is-small is-rounded " + (props.selectedCategories.includes("nattura") ? "is-primary" : null)}
          onClick={() => props.onSelected("nattura")}>Nattura</a>
        <a className={"button is-small is-rounded " + (props.selectedCategories.includes("samfelagsverkefni") ? "is-primary" : null)}
          onClick={() => props.onSelected("samfelagsverkefni")}>Samfelagsverkefni</a>
        <a className={"button is-small is-rounded " + (props.selectedCategories.includes("annad") ? "is-primary" : null)}
          onClick={() => props.onSelected("annad")}>Annad</a>
      </div>
    </div>
  );
}

export default filter;