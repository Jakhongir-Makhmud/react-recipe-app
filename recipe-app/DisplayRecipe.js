import React, { useState } from 'react'
import '@fortawesome/react-fontawesome'

function DisplayRecipe({title, img, calories, ingredients}) {
    
    const [block, setBlock] = useState(false);

    let blockNone = block ? 'ingredients-block' : 'ingredients-none';

    return (
    <div className='card'> 
        <div className='displayRecipe'>
            <h2>{title}</h2>  
            <p>{Math.floor(calories)} calories</p>
           
            <button onClick={() => setBlock(true)}>Show ingredients</button>
            <br/>
            <img src={img} alt="food image" className='food-img' />
        </div>
         <div className={`ingredients ${blockNone}`}>
             <div>
                <button onClick={() => setBlock(false)}><i className="fas fa-times">X</i></button>
                <ul className='ingredientsList'>
                    {ingredients.map(e => (
                        <li>{e.text}</li>
                    ))}
                </ul>
            
            </div>
        </div>
    </div>
    )
}

export default DisplayRecipe
