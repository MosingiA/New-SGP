import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddGoal from "./pages/AddGoal";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>SMART Goal Planner</h1>
        <nav>
          <Link to="/">Home</Link>     <Link to="/add">Add Goal</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddGoal />} />
        </Routes>
      </main>
    </div>
  );
}
