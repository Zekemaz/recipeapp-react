import React from 'react';
import style from './recipe.module.css'
import NumberFormat from 'react-number-format';


const Recipe = (props) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{props.title}</h1>
            <img className={style.image} src={props.image} alt=""/>
            <div className={style.ingredientsNutrientsDiv}>
                <div className={style.ingredientsDiv}>
                    <h3>Ingredients</h3>
                    <ul className={style.ingredientsList}>
                        {props.ingredients.map(ingredient => (
                            <li className={style.ingredient}>{ingredient.text}</li>
                        ))}
                    </ul>
                </div>
                <div className={style.nutrientsDiv}>
                    <h3>Nutrients</h3>
                    <p className={style.calories}><NumberFormat value={props.calories} displayType={'text'} format="####" /> Calories</p>
                    <ul className={style.nutrientsList}>
                        {props.nutrients.slice(0,6).map(nutrient => (
                            <li className={style.nutrient}> <NumberFormat value={nutrient.total} displayType={'text'} format="###" /> {nutrient.unit} <strong>{nutrient.label}</strong></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Recipe;