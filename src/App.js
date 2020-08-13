import React, { useEffect } from "react";

import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  useEffect(() => {
    document.title = "Twitter-Clone || App";
  }, []);
  return (
    <div className="app">
      {/* ----sidebar----- */}
      <Sidebar />
      {/* ------feed ----- */}
      <Feed />
      {/* -------widgets---- */}
      <Widgets />
    </div>
  );
}

export default App;
