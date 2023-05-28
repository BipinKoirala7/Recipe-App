import { NavLink } from 'react-router-dom';
import FoodImg from '../../../assets/food.jpg'

export function Home() {

    return (
      <div className="flex items-center px-16 py-8 gap-8">
        <div className="flex flex-col gap-4">
          <p className="capitalize text-[4rem]">
            {"let's start cooking together the Popular Recipes"}
          </p>
          <p>
            Want to cook all the popular recipes, but dont know where to search
            the recipe
          </p>
          <div className="flex gap-8 items-center">
            <NavLink
              to="/search"
              className="px-6 py-2 w-fit rounded-xl text-white bg-green-600 hover:bg-white border-green-600 transition-effect border-[1px] hover:text-green-600"
            >
              Get Started
            </NavLink>

            <NavLink
              to="/favRecipe"
              className="px-6 py-2 w-fit rounded-xl text-green-600 border-[1px] border-green-600 hover:bg-green-600 hover:text-white transition-effect"
            >
              Favourite Recipe
            </NavLink>
          </div>
        </div>
        <img src={FoodImg} alt="" className="w-[30rem] h-[34rem] rounded-xl" />
      </div>
    );
}