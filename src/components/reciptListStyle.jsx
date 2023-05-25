import { useState } from "react";

export default function recipeListStyle(props) {
    const [isClicked, setIsCliked] = useState(false);
    const { recipe } = props.recipe

    function handleClick() {
        setIsCliked(true)
    }

    return (
      <div className="flex items-end px-2 py-4 relative aspect-square z-0 ">
        <img
          src={recipe.image}
          alt=""
          className="w-[100%] h-[100%] z-[-1] aspect-square rounded-xl absolute top-0 bottom-0 left-0 right-0"
        />
        <p className="text-[1.2rem] text-white transition-effect font-bold backdrop-blur-[5rem] px-2 py-1 rounded-lg hover:text-slate-900">
          {recipe.label}
        </p>
        <button
          onClick={handleClick}
          className="flex backdrop-blur-[5rem] transition-effect items-center absolute top-2 right-2 justify-center hover:bg-slate-800 w-12 aspect-square rounded-[50%]"
        >
          {isClicked ? (
            <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
          ) : (
            <i className="fa-regular fa-square-plus text-xl text-white"></i>
          )}
        </button>
      </div>
    );
}