import "./App.css";
import { useState } from "react";
import Axios from "axios";
import RecipeCard from "./components/RecipeCard";

function App() {
  // usestates

  const [timeoutId, setTimeoutid] = useState();
  const [recipelist, setrecipeList] = useState([]);

  // usestates

  // const API_ID = "8a32446a";
  // const API_KEY = "5524d9755e30259be0975db21e77f4b6";

  // const url = `https://api.edamam.com/search?q=chicken&app_id=8a32446a&app_key=5524d9755e30259be0975db21e77f4b6`;

  // fetching api
  const fetchRecipe = async (serachString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${serachString}&app_id=8a32446a&app_key=5524d9755e30259be0975db21e77f4b6`
    );
    setrecipeList(response.data.hits);
    // console.log(response);
  };

  // fetching api

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      fetchRecipe(event.target.value);
    }, 500);
    setTimeoutid(timeout);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          Recipe Finder<i className="fas fa-utensils"></i>
        </div>
        <div className="search">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="search_box"
            placeholder="Search recipe here"
            onChange={onTextChange}
          />
        </div>
      </div>

      <div className="list_container">
        {recipelist.length ? (
          recipelist.map((recipeObj) => (
            <RecipeCard recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <p className="recipe_default">Search Your Favorite Recipe Here<i className="fas fa-utensils"></i></p>
        )}
      </div>
    </div>
  );
}

export default App;
