import RecipeListStyle from "../../reciptListStyle";

export default function SearchedRecipes(props) {
    let searchedContent;
      function showRecipesFromAPi() {
        if (props.recipeList.length === 0) {
          searchedContent = (
            <div className="center font-bold">
              Search for Everykind of Recipe....
            </div>
          );
        } else {
          searchedContent = props.recipeList.map((item, index) => (
            <RecipeListStyle recipe={item} key={index} />
          ));
        }
      }
    showRecipesFromAPi();
    
    return (
        <>
            {searchedContent}
        </>
    )
}