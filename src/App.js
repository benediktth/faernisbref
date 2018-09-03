import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Badge from './components/Badge.jsx';
import Filter from './components/Filter.jsx';
import Data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <section>
        <div className="box">
          <Filter />
        </div>
        </section>
        <section>
        <div className="columns is-multiline">
          {Data.map(item => {
            return (
              <div key={item} className="column is-4">
                <Badge name={item} />
              </div>
            );})}
        </div>
        </section>
      </div>
    );
    // return (
    //   <div class="grid-container">
    //     <div class="item1">
    //       <Filter />
    //     </div>
    //       <div class="item2">
    //         <div class="badge-container">
    //           {Data.map(item => {
    //             return (
    //               <div class="badge-item">
    //                 <Badge name={item} />
    //               </div>
    //             );})}
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default App;
