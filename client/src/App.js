/* import axios from 'axios'; */
/* import ReactDOM from "react-dom/client"; */
import { createBrowserRouter, RouterProvider, Routes, Route, Outlet, Navigate } from "react-router";
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import LeftBar from "./components/leftbar/Leftbar";
import RightBar from "./components/rightbar/Rightbar";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import 'leaflet/dist/leaflet.css';


//data will be the string we send from our server
/* const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
} */

function App() {

  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode)
  const currentUser = true;

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 8 }} >
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to ="/login" />
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",          
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>    
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    /* <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter> */

    /*{<div className="App">
      <header className="App-header">
      <button onClick={apiCall}>Make API Call</button>
      </header>
    </div> }*/
  );
}

export default App;
