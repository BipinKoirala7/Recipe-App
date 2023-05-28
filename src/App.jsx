import { Home } from "./components/Pages/Home/home";
import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Pages/Search/Search";
import FavRecipe from "./components/Pages/favRecipes/favRecipe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-screen h-screen">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favRecipe" element={<FavRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
