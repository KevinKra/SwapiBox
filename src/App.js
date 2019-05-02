import React from "react";
import "./_App.scss";
import SplashContainer from "./SplashContainer/SplashContainer";
import ExploreContainer from "./ExploreContainer/ExploreContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SplashContainer />
        <ExploreContainer />
      </div>
    );
  }
}

export default App;
