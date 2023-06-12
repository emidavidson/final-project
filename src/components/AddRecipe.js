import { useState } from "react";

const AddRecipe = ({handleAddRecipe}) => {
    const [recipeText, setRecipeText] = useState(' ');
    const characterLimit = 3000;
    
    let handleChange = (event) => {
        if (characterLimit - event.target.value.length >=0){
            setRecipeText(event.target.value);
            }
    };

    const handleSaveClick = () => {
        if (recipeText.trim().length > 0){
            handleAddRecipe(recipeText);
            setRecipeText('');
        }
    };
    return(
    <div className="recipe new">
        <textarea rows="8" 
        cols="10"
        placeholder="Type to add a recipe.."
        value={recipeText}
        onChange={handleChange}
        ></textarea>  
        <div className="recipe-footer">
            <small>{characterLimit - recipeText.length} Remaining</small>
            <button className="save" onClick={handleSaveClick}> Save </button>
            </div> 
             </div>
             );
};

export default AddRecipe;