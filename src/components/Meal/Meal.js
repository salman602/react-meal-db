import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Meal = (props) => {
    // console.log(props.meal);
    const { idMeal, strMealThumb, strMeal, strInstructions } = props.meal;
    // const { mealId } = useParams();
    // console.log(mealId);
    // const history = useHistory();
    // const handleClick = () => {
    //     history.push(`/resturant/${mealId}`)
    // }
    return (
        <Row className="my-4">
            <Col md={3}>
                <img className="img-fluid" src={strMealThumb} alt="" />
            </Col>
            <Col md={7}>
                <h3>Food item: {strMeal}</h3>
                <p>Instruction: {strInstructions.slice(0, 380)}</p>
                <Link to={`/resturant/${idMeal}`}>See details</Link>
                {/* <button onClick={handleClick}>See Recipies</button> */}
            </Col>
            <Col md={2}>

            </Col>
        </Row>
    );
};

export default Meal;


