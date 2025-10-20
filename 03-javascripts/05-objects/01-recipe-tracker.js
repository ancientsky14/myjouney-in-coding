const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 4, 5],
  averageRating: null,
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  ratings: [4, 5, 5, 5],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  averageRating: null,
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3);

// Function to compute average rating
function getAverageRating(ratings) {
  if (!ratings || ratings.length === 0) return 0;
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
}

// Function to get total ingredients
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

// Function to determine difficulty
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) return 'easy';
  else if (cookingTime <= 60) return 'medium';
  else return 'hard';
}

// Individual test variables (for test validation)
const recipe1AverageRating = getAverageRating(recipe1.ratings);
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

console.log(recipe1AverageRating);     // 4.5
console.log(recipe1TotalIngredients);  // 4
console.log(recipe1DifficultyLevel);   // "easy" or "medium" (based on threshold)

// ✅ Update all recipes
recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// ✅ Log the full recipes array to verify all updates
console.log(recipes);
