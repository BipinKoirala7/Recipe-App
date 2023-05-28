import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchedRecipes from "./SearchedRecipes";

export default function Search() {
  const [recipeFromAPi, setRecipeFromApi] = useState([])
  const [query, setQuery] = useState("");
  const text = useRef();
  const error = useRef()

  useEffect(() => {
    async function fetchRecipeData() {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=1c0b4f3e&app_key=8b6739af5fb1802f1b25e59f4fa41b4c`
        );
        const data =await response.json()
        setRecipeFromApi(data.hits);
        console.log(data.hits[0])
      } catch (err) {
        error.current = err;
      }
    }
    query && fetchRecipeData();
  }, [query]);

  function handleClick() {
    setQuery(text.current);
  }

  return (
    <div className="flex flex-col h-[80%]">
      <div className=" flex w-[100%] justify-between items-center bg-red-500 px-4 py-4 text-white">
        <p className="text-[2rem] ">Search a Recipe</p>
        <div className="flex justify-evenly items-center">
          <input
            type="text"
            className="px-2 py-1 rounded-xl mr-4 text-black outline-none"
            placeholder="Search for a recipe"
            onChange={(e) => (text.current = e.target.value)}
          />
          <BsSearch size="1.5em" cursor={"pointer"} onClick={handleClick} />
        </div>
      </div>
      <div className="grid w-[100%] h-[100%] grid-cols-searchGrid px-8 py-4 gap-4 trnsition-effect relative">
        {error.current ? error.current : <SearchedRecipes recipeList={recipeFromAPi} />}
      </div>
    </div>
  );
}
