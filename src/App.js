import "./styles/App.css";
import React from "react";
import Board from "./components/board.js";
import Chessboard from "chessboardjsx";

function App() {
  return (
    <div>
      <Chessboard position="start" />
    </div>
  );
}

export default App;
