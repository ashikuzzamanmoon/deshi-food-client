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
                    <Card.Title>{food_name}</Card.Title>
                    <Card.Text>
                        {method}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipesCard;