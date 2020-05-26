import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./css/init.css";
import "./scss/style.scss";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">React 16.13.1 !!</h1>
        <a className="cikorea" href="https://www.cikorea.net/">
          cikorea.net
        </a>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
