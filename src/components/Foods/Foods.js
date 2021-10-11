import React from 'react';
import './Foods.css'

const Foods = (props) => {
    // console.log(props.food);
    const { strMeal, strMealThumb, strInstructions, strYoutube } = props.food;
    return (
        <div className="col-md-6 gy-3">
            <div className="card h-100 mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={strMealThumb} className="img-fluid h-75 rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{strMeal}</h5>
                            <p className="card-text text-muted">{strInstructions.slice(0, 125)}</p>
                            <a href={strYoutube}>
                                <button className="mealdb-btn" >Watch Video</button>
                            </a>
                            <button className="mealdb-btn" onClick={() => props.handleAddMeal(props.food)}>Add the Meal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foods;