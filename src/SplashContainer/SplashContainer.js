import React from "react";
import "./_SplashContainer.scss";

class SplashContainer extends React.Component {
  render() {
    return (
      <section className="splash-container">
        <div className="title-content">
          <h1>Swapi-Box</h1>
          <p>Explore the StarWars Universe</p>
        </div>
        <p className="film-prologue">
          It looks like Sandpeople did this, all right. Look, here are Gaffi
          sticks, Bantha tracks. It’s just…I never heard of them hitting
          anything this big before. They didn’t. But we are meant to think they
          did. These tracks are side by side. Sandpeople always ride single file
          to hide there numbers. These are the same Jawas that sold us Artoo and
          Threepio. And these blast points, too accurate for Sandpeople. Only
          Imperial stormtroopers are so precise. Why would Imperial troops want
          to slaughter Jawas? If they traced the robots here, they may have
          learned who they sold them to. And that would lead them home! Wait,
          Luke! It’s too dangerous. Uncle Owen! Aunt Beru! Uncle Owen!
          <span className="movie-title">A New Hope</span>
          <span className="movie-year">1977 - 05 - 25</span>
        </p>
      </section>
    );
  }
}

export default SplashContainer;
