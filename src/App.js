import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Badge from "./components/Badge.jsx";
import Filter from "./components/Filter.jsx";
import Data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ages: [],
      categories: [],
      isHovering:{},
      Data: Data
    }
    this.ages = [...new Set([].concat.apply([], Data.map(({ ages }) => ages)))];
    this.categories = [...new Set([].concat.apply([], Data.map(({ categories }) => categories && categories.filter(category => !!category) || [])))];
    this.changeSelected = this.changeSelected.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }
  
  toggleHover(name, isToggled) {
    let newObj = this.state.isHovering;
    newObj[name] = isToggled;
    this.setState({isHovering: newObj});
  }

  changeSelected(name, type) {
    if (this.state[type].includes(name)){
      let newArray = this.state[type];
      let index = newArray.indexOf(name);
      newArray.splice(index, 1);
      this.setState({[type]: newArray});
    } else {
      let newArray = this.state[type];
      newArray.push(name);
      this.setState({[type]: newArray});
    }
    let newData =
    Data
			.filter(({ ages }) => this.state.ages.length ? (ages || []).some(age => this.state.ages.includes(age)) : true)
      .filter(({ categories }) => this.state.categories.length ? (categories || []).some(category => this.state.categories.includes(category)) : true);
    this.setState({Data: newData});
  }

  render() {
    return (
      <div className="page-container">
        <section>
          <div className="box">
            <Filter ages={this.ages} categories={this.categories} onSelected={this.changeSelected} selectedCategories={this.state.categories} selectedAges={this.state.ages}/>
          </div>
        </section>
        <section>
          <div className="columns is-multiline is-tablet">
            {this.state.Data.map(item => {
              return (
                <div key={item.title} className={"column is-half-mobile" + (this.state.isHovering[item.title] ? "box-shadow" : null)}>
                  <Badge item={item} selectedCategories={this.state.selectedCategories} hover={this.toggleHover}/>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
