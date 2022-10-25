import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./navigation/navigation/Navbar";
import Users from "./components/users/Users";
// import UserItem from "./components/users/UserItem";
// import Create from "./components/Create";

const App = () => (
  <Fragment>
    <Router>
      <div className="App">
        <Navbar />
        <Users />
        <Routes>
          <Route exact path=""></Route>
        </Routes>
      </div>
    </Router>
  </Fragment>
);

export default App;
