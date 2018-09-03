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
    }
    this.changeSelected = this.changeSelected.bind(this);
  }
  
  changeSelected(e) {
    if (this.state.selectedCategories.includes(e.target.value)){
      let newArray = this.state.selectedCategories;
      let index = newArray.indexOf(e.target.value);
      newArray.splice(index, 1);
      this.setState({selectedCategories: newArray});
    } else {

      let newArray = this.state.selectedCategories;
      newArray.push(e.target.value);
      this.setState({selectedCategories: newArray});
    }
  }

  render() {
    console.log(this.state.selectedCategories);
    return (
      <div className="page-container">
        <section>
          <div className="box">
            <Filter onSelected={this.changeSelected}/>
          </div>
        </section>
        <section>
          <div className="columns is-multiline">
            {Data.map(item => {
              return (
                <div key={item.title} className="column is-3">
                  <Badge item={item} selectedCategories={this.state.selectedCategories}/>
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
