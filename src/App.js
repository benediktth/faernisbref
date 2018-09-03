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
      selectedCategories: [],
      isHovering:{}
    }
    this.changeSelected = this.changeSelected.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }
  
  toggleHover(name, isToggled) {
    let newObj = this.state.isHovering;
    newObj[name] = isToggled;
    this.setState({isHovering: newObj});
  }

  changeSelected(name) {
    if (this.state.selectedCategories.includes(name)){
      let newArray = this.state.selectedCategories;
      let index = newArray.indexOf(name);
      newArray.splice(index, 1);
      this.setState({selectedCategories: newArray});
    } else {

      let newArray = this.state.selectedCategories;
      newArray.push(name);
      this.setState({selectedCategories: newArray});
    }
  }

  render() {
    return (
      <div className="page-container">
        <section>
          <div className="box">
            <Filter onSelected={this.changeSelected} selectedCategories={this.state.selectedCategories}/>
          </div>
        </section>
        <section>
          <div className="columns is-multiline">
            {Data.map(item => {
              return (
                <div key={item.title} className={"column is-3 " + (this.state.isHovering[item.title] ? "box-shadow" : null)}>
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
