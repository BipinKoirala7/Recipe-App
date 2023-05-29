import { useFetchListQuery } from "../../../store/store"
import  FavRecipeStyle  from './favrecipeStyle'

export default function FavRecipe() {
    const { data, isLoading, isError } = useFetchListQuery()
    let content
    if (isLoading) {
        content = <div>Loading</div>
    }
    else if (isError) {
        content =  <div>Error loading the dataa</div>
    }
    else {
        content = data.map((item, index) => (
          <FavRecipeStyle recipe={item} key={index} />
        ));
    }
    
    return (
      <div className="grid w-[100%] h-[100%] grid-cols-searchGrid px-8 py-4 gap-4 trnsition-effect relative">
        {content}
      </div>
    );
}