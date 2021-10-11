import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

const Resturant = () => {
    const { mealId } = useParams();
    const [singleMeal, setSingleMeal] = useState({});
    // console.log(singleMeal);
    // console.log(mealId)
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleMeal(data.meals[0]))
    }, [mealId]);
    return (
        <Container>
            <Card style={{ width: '55rem', margin: 'auto', marginTop: '16px' }}>
                <Row>
                    <Col md={4}>
                        <Card.Img className="img-fluid" variant="top" src={singleMeal?.strMealThumb} />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>{singleMeal?.strMeal}</Card.Title>
                            <Card.Text>{singleMeal?.strInstructions?.slice(0, 403)}</Card.Text>
                            <Button href={singleMeal?.strYoutube} variant="danger">Watch Video</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Resturant;