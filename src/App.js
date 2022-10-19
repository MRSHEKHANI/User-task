import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./navigation/navigation/Navbar";
import Users from "./components/users/Users";
// import UserItem from "./components/users/UserItem";
// import Create from "./components/Create";

const App = () => (
  <>
    <Router>
      <div className="App">
        <Navbar />
        <Users />
        <Route exact path=""></Route>
      </div>
    </Router>
  </>
);

export default App;
