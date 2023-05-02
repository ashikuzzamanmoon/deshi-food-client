import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ChefCard = ({ chefData }) => {
    const { id, likes, name, years_of_experience, img_url } = chefData;
    return (
        <div className='col col-md-4 col-12'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img_url} style={{ height: "240px" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Years of experience: {years_of_experience}</p>
                    <p>Likes: {likes}</p>
                    <Link to={`/recipes/${id}`}>
                        <Button variant="primary">View Recipe</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;