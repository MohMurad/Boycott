import logo from './logo.svg';
import './App.css';
import Main from '../src/Components/Main/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {  Routes, Route } from "react-router-dom";
import Alternatives from './Components/Alternatives/Alternatives';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/alternatives" element={<Alternatives/>} />
    </Routes>
  );
}

export default App;
