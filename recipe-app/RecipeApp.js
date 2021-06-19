import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayRecipe from './DisplayRecipe';
import './style/style.css'

function RecipeApp() {

    const API_ID = '0b94ea70';
    const API_KEY = 'c48b0ca3e06dd0777acd89c16736aca8';
    const [inputChange, setInputChange] = useState('');
    const [recipe, setRecipe] = useState([]);
    const [reqRecipe, setReqRecipe] = useState('palov');


    useEffect(() =>{

        axios.get(`https://api.edamam.com/search?q=${reqRecipe}&app_id=${API_ID}&app_key=${API_KEY}`)
            .then(data => {

                setRecipe(data.data.hits)
                
            })
            .catch(err => {

                throw err
                
            })

    }, [reqRecipe])


    const submitFunc = e => {

        e.preventDefault();
        setReqRecipe(inputChange);

    }

    return (
        <div className='recipeApp'>
            <section className='top'>
            <h1>Food Recipe</h1>
            <form className='recipeForm' onSubmit={submitFunc}>
                <label>Name: </label><input  type="text"  value={inputChange} placeholder='enter smth' onChange={e => setInputChange(e.target.value)}  />
                <br/>
                <button type='submit'>Get recipes</button>
            </form>
           
            <div className='recipeDivision'>
            {recipe.map(e => (
                <DisplayRecipe key={Math.random() * 1000} title={e.recipe.label} img={e.recipe.image} calories={e.recipe.calories} ingredients={e.recipe.ingredients} dishType={e.recipe.dishType} healthyness={e.recipe.healthLabels} />
            ))}
            </div>
            <br/>
            </section>
            
            <footer className='footer'>
                This app has developed 
                <br/>
                 by
                 <br/>
                 JAKHONGIR
                 <br/>
                 <span>ALL RIGHTS RESERVED&#169;</span>
            </footer>
        </div>
    )
}

export default RecipeApp
