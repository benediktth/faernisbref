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
    let newArray = this.state.selectedCategories;
    newArray.push(e.target.value);
    this.setState({selectedCategories: newArray});
  }

  render() {
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
                <div key={item.title} className="column is-4">
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
