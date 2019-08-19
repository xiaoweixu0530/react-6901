import React from "react";
import { Child } from "./components/child";
import "./App.css";

const env = process.env.NODE_ENV;

class App extends React.Component {
  state = {
    test: "123"
  };
  checkEnv = env => {
    if (env === "development") {
      return "DEV";
    } else {
      return "NON-DEV ";
    }
  };

  onchange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { test } = this.state;
    return (
      <React.Fragment>
        <div>
          {this.checkEnv(env)} but still nothing is really happening though you
          could change text
        </div>
        <Child test={test} onChange={this.onchange} />
      </React.Fragment>
    );
  }
}

export default App;
