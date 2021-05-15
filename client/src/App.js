// React.useEffect(() => {
//   fetch("/api")
//     .then((resp) => resp.json())
//     .then((data) => setData(data.message))
//     .catch(function (error) {
//       console.log(error);
//     });
// }, []);

import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import MoviesList from "./components/movieList.js";
import "./App.css";
import AddMovie from "./components/addMovie.js";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/movies" className="navbar-brand">
          <img src="511bjMvvqAL.png" alt="movie_app_icon" />
          MovieApp.io
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/movies"} className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/movies"]} component={MoviesList} />
          <Route exact path="/add" component={AddMovie} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
