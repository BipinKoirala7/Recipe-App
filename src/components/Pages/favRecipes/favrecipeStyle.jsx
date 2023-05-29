import { useEffect, useState } from "react";
import { useRemoveRecipeMutation } from "../../../store/store";
import Spinner from '../../spinner'

export default function RecipeListStyle(props) {
  const [isClicked, setIsCliked] = useState(false);
  const { recipe } = props.recipe
  const [RemoveRecipe, isLoading] = useRemoveRecipeMutation();
  console.log(isLoading.isLoading)
  
  useEffect(() => {
    isClicked ? setIsCliked(false) : ''
  },[props])

    function handleClick() {
      setIsCliked(true)
      RemoveRecipe(props.recipe.id)
  }

    return (
      <div className="flex items-end px-2 py-4 relative aspect-square z-0 max-w-[20rem]">
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
          className={`flex  backdrop-blur-[50rem] ${
             "bg-slate-500"
          } p-2 transition-effect items-center absolute top-2 right-2 justify-center hover:bg-slate-800 w-12 max-w-12 aspect-square rounded-[50%]`}
        >
          {isClicked ? (
            isLoading ? (
              <Spinner />
            ) : (
              <i className="fa-solid fa-circle-check text-red-500 text-[1.5rem] p-1 "></i>
            )
          ) : (
            <i className="fa-solid fa-circle-minus text-white text-[1.5rem]"></i>
          )}
        </button>
      </div>
    );
}