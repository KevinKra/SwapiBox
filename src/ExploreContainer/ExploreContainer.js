import React from "react";
import "./_ExploreContainer.scss";

class ExploreContainer extends React.Component {
  render() {
    return (
      <section className="card-container">
        <h1>EXPLORE</h1>
        <div className="btn-section">
          <button className="btn-1">PEOPLE</button>
          <button className="btn-1">PLANETS</button>
          <button className="btn-1">VEHICLES</button>
        </div>
        <a className="view-favorites" href="">
          View Favorites
        </a>
        <div className="card-section">
          <article className="output-card">CARD</article>
          <article className="output-card">CARD</article>
          <article className="output-card">CARD</article>
          <article className="output-card">CARD</article>
        </div>
      </section>
    );
  }
}

export default ExploreContainer;
