import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Habits from "./pages/Habits";
import Measure from "./pages/Measure";
import Weekly from "./pages/Weekly";
import Check from "./pages/Check";
import AddTask from "./pages/AddTask";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/measure" element={<Measure />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/check" element={<Check />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </Router>
  );
};

export default App;
