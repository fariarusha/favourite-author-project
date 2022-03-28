import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import FavouriteAuthorList from "./components/favouriteAuthor/authorList";
import AuthorList from "./components/author/authorList";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/authors" element={<AuthorList/>} />
        <Route path="/authors/favourite" element={<FavouriteAuthorList/>} />
      </Routes>
    </>
  );
}

export default App;
