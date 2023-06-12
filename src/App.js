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
    text: "Chocolate Chip Cookies",
    date: "06-02-23"
  },
  {
    id: nanoid(),
    text: "Banana Bread",
    date: "06-05-23"
  },
  {
    id: nanoid(),
    text: "Pumpkin Muffins",
    date: "06-06-23"
  },
  {
    id: nanoid(),
    text: "Peanut Butter Cookies",
    date: "06-10-23"
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