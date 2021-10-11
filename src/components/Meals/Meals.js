import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');

    // useEffect(() => {
    //     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    //         .then(res => res.json())
    //         .then(data => setMeals(data.meals))
    // }, []);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);


    const handleSearchMeal = (event) => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
    };

    return (
        <div className="my-4">

            <Container>
                <input onChange={handleSearchMeal} className="w-50" type="text" placeholder="Search your meal by name" />
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}

                    ></Meal>)
                }
            </Container>
        </div>
    );
};

export default Meals;