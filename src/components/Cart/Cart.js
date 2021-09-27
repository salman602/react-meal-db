import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props);
    const mealItems = props.cart
    console.log(mealItems);
    const reducer = (prevCount, mealCount) => prevCount + mealCount.quantity;
    // console.log(reducer)

    const count = mealItems.reduce(reducer, 0)
    // console.log(count);

    return (
        <div className="cart">
            <h5>Items ordered: {count}</h5>
            <ul>
                {
                    props.cart.map(item => <li className="li-styles" key={item.idMeal}>{item.strMeal}-{item.quantity} pieces</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;