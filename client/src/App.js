/* import axios from 'axios'; */
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
/* import './App.css'; */
import Login from './pages/login/Login';
import Register from './pages/register/Register';

//data will be the string we send from our server
/* const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
} */

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

    /*{<div className="App">
      <header className="App-header">
      <button onClick={apiCall}>Make API Call</button>
      </header>
    </div> }*/
  );
}

export default App;
