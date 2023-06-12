import Recipe from './Recipe';
import AddRecipe from './AddRecipe';

const RecipeList = ({ recipes, handleAddRecipe, handleDeleteRecipe }) => {

    return (
    <div className="recipes-list">
        {recipes.map((recipe)=> (
         <Recipe id={recipe.id} text={recipe.text} date={recipe.date} handleDeleteRecipe={handleDeleteRecipe}/> 
         ))}
         <AddRecipe handleAddRecipe={handleAddRecipe}/>
    </div>
    );
};

export default RecipeList;