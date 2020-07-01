import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID = 'c17355b2';
  const APP_KEY = '896f71918d06f40e52870c2690c5ddc3';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">

      <h1>Search a Recipe</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" name="search" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
                  key={recipe.recipe.label}
                  title={recipe.recipe.label} 
                  calories={recipe.recipe.calories} 
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  nutrients={recipe.recipe.digest}
                  />
        ))}
      </div>
    </div>
  );
}


export default App;
