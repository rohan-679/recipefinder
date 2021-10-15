import React, { useState } from "react";
import "../App.css";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const RecipeCard = (props) => {
  const { recipeObj } = props;
  const [show, setshow] = React.useState(false);
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-title" className="modal_title">
          {"Ingredients"}
        </DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredient) => (
                <tr>
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => window.open(recipeObj.url)}>See More</Button>
          <Button onClick={() => setshow("")} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className="recipe_container">
        <img src={recipeObj.image} alt="" />
        <h3 className="recipe_name">{recipeObj.label}</h3>
        <button onClick={() => setshow(true)} className="ingredients">
          Ingredients
        </button>
        <button
          onClick={() => {
            window.open(recipeObj.url);
          }}
          className="full_recipe"
        >
          Full Recipe
        </button>
      </div>
    </>
  );
};

export default RecipeCard;
