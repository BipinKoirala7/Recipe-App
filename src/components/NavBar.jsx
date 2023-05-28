import { NavLink} from "react-router-dom"

export default function NavBar() {
    return (
      <div className="flex w-[50%] mx-auto justify-evenly items-center border-b-2 border-slate-900">
        <NavLink
          to="/"
          style={(isActive) => {
            return isActive.isActive
              ? { background: "rgb(30 41 70)", color: "white" }
              : {};
          }}
          className="px-4 py-1 font-bold text-lg text-slate-800 hover:bg-slate-600 hover:text-white transition-effect "
        >
          Home
        </NavLink>
        <NavLink
          to="/search"
          style={(isActive) => {
            return isActive.isActive
              ? { background: "rgb(30 41 70)", color: "white" }
              : {};
          }}
          className="px-4 py-1 font-bold text-lg text-slate-800 hover:bg-slate-600 hover:text-white transition-effect "
        >
          Search
        </NavLink>
        <NavLink
          to="/favRecipe"
          style={(isActive) => {
            return isActive.isActive
              ? { background: "rgb(30 41 70)", color: "white" }
              : {};
          }}
          className="px-4 py-1 font-bold text-lg text-slate-800 hover:bg-slate-600 hover:text-white transition-effect "
        >
          Your Recipes
        </NavLink>
      </div>
    );
}