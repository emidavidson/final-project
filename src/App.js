import { useState } from "react";
import { nanoid } from "nanoid";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
import Header from "./components/Header";
import NavBar from "./components/NavBar"
import { BrowserRouter } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([{
    id: nanoid(),
    text: "Chocolate Chip Cookies Ingredients: 2 1/4 cups all-purpose flour, 1 teaspoon baking soda, 1/2 teaspoon salt, 1 cup softened butter, 3/4 cup granulated sugar, 3/4 cup packed brown sugar, 1 egg, 1 teaspoon vanilla, 2 cups semisweet chocolate chips Instructions: Heat oven to 375°F. In small bowl, mix flour, baking soda and salt; set aside. In large bowl, beat softened butter and sugars with electric mixer on medium speed, or mix with spoon about 1 minute or until fluffy, scraping side of bowl occasionally. Beat in egg and vanilla until smooth. Stir in flour mixture and chocolate chips. Bake 8 to 10 minutes or until light brown.",
    date: "06-02-23"
  },
  {
    id: nanoid(),
    text: "Banana Bread Ingredients: 3 ripe bananas, 1/3 cup melted butter, 1/2 teaspoon baking soda, 1 pinch salt, 3/4 cup sugar, 1 large egg, beaten, 1 teaspoon vanilla extract, 1 1/2 cups all-purpose flour Instructions: Mash the bananas and melted butter together then mix in the remaining ingredients. Bake at 350 degrees for 55 to 65 minutes.",
    date: "06-05-23"
  },
  ]);
  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const addRecipe = (text) => {
    const date = new Date();
    const newRecipe = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newRecipes = [...recipes, newRecipe];
    setRecipes(newRecipes);

  };
  const deleteRecipe = (id) => {
    const newRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipes);
  };


  return (
    <NavBar/>,
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <RecipeList recipes={recipes.filter((recipe) => recipe.text.toLowerCase().includes(searchText)
        )}
          handleAddRecipe={addRecipe}
          handleDeleteRecipe={deleteRecipe} />
      </div>
    </div>
  );
}

export default App;