import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import RecipesCard from '../RecipesCard/RecipesCard';

const Recipes = () => {
    const data = useLoaderData();
    const { id, likes, name, years_of_experience, img_url, number_of_recipes, recipes, bio } = data;
    return (
        <div>
            <div>
                <h2 className='text-center text-primary mt-5'>Meet Our Chefs and Recipes</h2>
            </div>
            <div className='container d-flex justify-content-center my-5'>
                <Card style={{ width: '56rem' }}>
                    <Card.Img variant="top" src={img_url} />
                    <Card.Body>
                        <Card.Title className='text-center'>{name}</Card.Title>
                        <Card.Text>
                            {bio}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush text-center">
                        <ListGroup.Item>Likes: {likes}</ListGroup.Item>
                        <ListGroup.Item>Number of Recipes: {number_of_recipes}</ListGroup.Item>
                        <ListGroup.Item>Years of Experience: {years_of_experience}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div className='container '>
                <h2 className='text-center text-primary mb-5'>Special Recipes</h2>
                <div className='row g-5 mx-auto'>
                    {
                        recipes.map(recipe => <RecipesCard key={recipe._id} recipe={recipe}></RecipesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipes;