import React from "react";
import Menus from "./Menus";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";

export default function Website() {
  return (
    <>
    
      <Router>

        <Menus />
        <Routes>
          <Route
            path="/"
            element={
              <>
               <Home/>
              </>
            }
          />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}
