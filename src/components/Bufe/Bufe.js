import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../local-storage/localStorage';
import Cart from '../Cart/Cart';
import Foods from '../Foods/Foods';

const Bufe = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
            .then(res => res.json())
            .then(data => setFoods(data?.meals))
    }, []);

    useEffect(() => {
        if (foods.length) {
            const savedDb = getDb();
            const savedOrder = [];
            for (const mealId in savedDb) {
                const food = foods.find(meal => meal.idMeal === mealId)

                // console.log(mealId);
                // console.log(savedDb);
                const quantity = savedDb[mealId];
                // console.log(typeof quantity)
                food.quantity = quantity;
                savedOrder.push(food)
            }
            setCart(savedOrder)
        }
    }, [foods])

    const [cart, setCart] = useState([])

    const handleAddMeal = (food) => {
        console.log(cart);

        const exists = cart.find(f => f.idMeal === food.idMeal);
        // console.log(food.quantity);
        // console.log(exists);
        // food.quantity = 1;
        let newCart = [...cart, food]
        if (exists) {
            newCart = [...cart]
            food.quantity++;

            // setCart(newCart);
        }
        else {
            food.quantity = 1;
            // setCart(newCart);
        }
        // const newCarts = [...cart, food];
        setCart(newCart);
        addToDb(food.idMeal)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            foods.map(food => <Foods key={food.idMeal} food={food} handleAddMeal={handleAddMeal}></Foods>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Bufe;