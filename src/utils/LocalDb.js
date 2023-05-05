import { toast } from "react-hot-toast";

const addToLocal = (id) => {
  const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
  let favoriteRecipes = [];
  if (!storedRecipes) {
    favoriteRecipes.push(id);
    toast.success("Your recipe added Successfully");
  } else {
    const isStored = storedRecipes.find((item) => item === id);
    if (isStored) {
      toast.error("This recipe already added your favorite list");
      return;
    } else {
      favoriteRecipes.push(id);
      favoriteRecipes = [...storedRecipes,id];
      toast.success("Your recipe added Successfully");
    }
  }
  localStorage.setItem("recipes", JSON.stringify(favoriteRecipes));
};

export { addToLocal };
