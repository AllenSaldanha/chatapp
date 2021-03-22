import React from "react";
import './App.css';
import Sidebar from './Sidebar.js';
import Chat from "./Chat.js";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar component */}
        <Sidebar />

        {/* Chat component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
