import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import MovieDetails from "./movieDetails";

function Header() {
  return (
    <main className="hero-section">
      <nav>
        <div className="logo">
          <img src="/images/Logo.png" alt="movie box logo" />
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="input-field"
            placeholder="What do you want to watch?"
          />
          <button>
            <iconify-icon icon="fluent:search-24-regular"></iconify-icon>
          </button>
        </div>

        <div className="right-side--nav">
          <a href="index.html">Sign in</a>
          <img src="/icons/Menu.png" alt="hamburger icon" />
        </div>
      </nav>

      <Banner />
    </main>
  );
}
function Banner() {
  return (
    <section className="banner-content--container">
      <div className="banner-content">
        <h1 className="movie-title">John Wick 3 : Parabellum</h1>
        <div className="rating">
          <div className="imdb-rating flex-center">
            <img src="/icons/imdb.png" alt="" />
            <small className="gray-900">86.0 / 100</small>
          </div>
          <div className="rotten-tomato-rating flex-center">
            <img src="/icons/rotten-tomato.png" alt="" />
            <small className="gray-900">70%</small>
          </div>
        </div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="btn">
          <iconify-icon
            icon="fluent:play-circle-24-filled"
            className="play-icon"
          ></iconify-icon>
          <span>WATCH TRAILER</span>
        </button>
      </div>
    </section>
  );
}

function FeaturedMovie() {
  return (
    <div className="padding--wrapper">
      <section className="featured-movie">
        <header>
          <h2>Featured Movie</h2>
          <a href="index.html" className="link-btn">
            See more{" "}
            <iconify-icon icon="fluent:chevron-right-20-regular"></iconify-icon>
          </a>
        </header>
        <article className="movies--container">
          <MovieCard />
        </article>
      </section>

      <Footer />
    </div>
  );
}

function MovieCard({title, releaseDate, posterUrl}) {
  return (
    <div className="movie-card" data-testid="movie-card">
      <Link to="/movie-details" className="block-display">
        <img
          src={posterUrl}
          alt="movie poster"
          data-testid="movie-poster"
        />
        <small className="gray-400" data-testid="movie-release-date">
          {releaseDate}
        </small>
        <h5 className="movie-title gray-900" data-testid="movie-title">
          {title}
        </h5>
      </Link>
      <div className="rating-group">
        <div className="imdb-rating flex-center">
          <img src="/icons/imdb.png" alt="" />
          <small className="gray-900">86.0 / 100</small>
        </div>
        <div className="rotten-tomato-rating flex-center">
          <img src="/icons/rotten-tomato.png" alt="" />
          <small className="gray-900">70%</small>
        </div>
      </div>
      <small className="movie-tag gray-400">Action, Adventure, Horror</small>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="index.html">
          <img src="/icons/facebook.svg" alt="" />
        </a>
        <a href="index.html">
          <img src="/icons/instagram.svg" alt="" />
        </a>
        <a href="index.html">
          <img src="/icons/twitter.svg" alt="" />
        </a>
        <a href="index.html">
          <img src="/icons/youtube.svg" alt="" />
        </a>
      </div>

      <div className="quick-links">
        <a href="index.html">Conditions of Use</a>
        <a href="index.html">Privacy & Policy</a>
        <a href="index.html">Press Room</a>
      </div>
      <p className="copyright gray-500">
        © <span>2021 MovieBox by Adriana Eka Prayudha</span>
      </p>
    </footer>
  );
}

function App() {
    const [topMovies, setTopMovies] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY&language=en-US&page=1')
    })
  return (
    <Router>
      <div className="App">
        <Header />
        <FeaturedMovie />
        <Routes>
          <Route path="/movie-details" component={MovieDetails}/>
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
