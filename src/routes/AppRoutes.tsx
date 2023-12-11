import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Profie from "../pages/Profile";
import NewMovie from "../pages/NewMovie";
import { Auth } from "../Context/AuthContext";
import Header from "../components/Header";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Auth>
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/profile" element={<Profie />} />
          <Route path="/newmovie" element={<NewMovie />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
};

export default AppRoutes;
