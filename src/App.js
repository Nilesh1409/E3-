import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Home from "./Home/Home"
import MovieDetails from './MovieDetails/MovieDetails';
import { Route, Routes } from 'react-router';

function App() {
  return (<>
     
         <Navbar></Navbar>
      <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/" element={<Home/>}></Route>
       
      {/* <MovieDetails/> */}
        <Route path="/movie/:id" element={<MovieDetails></MovieDetails>}></Route>
      </Routes>
  </>
    
  );
}

export default App;
