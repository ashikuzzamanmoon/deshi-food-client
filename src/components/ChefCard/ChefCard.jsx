import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import LazyLoad from 'react-lazy-load';


const ChefCard = ({ chefData }) => {
    const { id, likes, name, years_of_experience, img_url, number_of_recipes } = chefData;
    return (
        <div className='col col-md-4 col-12 text-center'>

            <Card style={{ width: '20rem' }}>
            <LazyLoad height={240}  threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
            <Card.Img variant="top" src={img_url} style={{ height: "240px" }} />

    </LazyLoad>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Years of experience: {years_of_experience}</p>
                    <p>Number of recipes: {number_of_recipes}</p>
                    <p> <BiLike></BiLike> Likes: {likes}</p>
                    <Link to={`/recipes/${id}`}>
                        <Button className='w-100' variant="primary">View Recipe</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;