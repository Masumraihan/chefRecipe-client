import { toast } from "react-hot-toast";

const addToLocal = (id) => {
  const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
  let favoriteRecipes = [];
  if (!storedRecipes) {
    favoriteRecipes.push(id);
  } else {
    const isStored = storedRecipes.find((item) => item === id);
    if (isStored) {
      toast("already added");
    } else {
      favoriteRecipes.push(id);
      favoriteRecipes = [...storedRecipes,id];
    }
  }
  localStorage.setItem("recipes", JSON.stringify(favoriteRecipes));
};

export { addToLocal };
