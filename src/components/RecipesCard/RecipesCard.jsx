import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RecipesCard = ({ recipe }) => {
    const { _id, food_name, food_img, method, Ingredients, rating } = recipe;
    return (
        <div className='col col-md-4 col-12 container py-4'>
            <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" src={food_img} style={{height: "220px"}} />
                <Card.Body>
                    <Card.Title className='fw-semibold'>{food_name}</Card.Title>
                    <Card.Text>
                        <p> <span className='fw-semibold'>Cooking Method: </span> {method}</p>
                    </Card.Text>
                    <p><span className='fw-semibold'>Ingredients: </span>{Ingredients}</p>
                    <p className='fw-semibold'><span className='fw-semibold'>Rating: </span>{rating}</p>
                    <Button variant="primary">Favorite</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipesCard;