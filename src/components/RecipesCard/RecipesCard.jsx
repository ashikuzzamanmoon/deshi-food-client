import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegStar, FaStar } from 'react-icons/fa';


const RecipesCard = ({ recipe }) => {
    const { _id, food_name, food_img, method, Ingredients, rating } = recipe;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteBtn = () => {
        setIsFavorite(true);
        toast.success('This recipe is now your favorite!');

    }
    return (
        <div className='col col-md-4 col-12 container py-4'>
            <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" src={food_img} style={{ height: "220px" }} />
                <Card.Body>
                    <Card.Title className='fw-semibold'>{food_name}</Card.Title>
                    <Card.Text>
                        <p> <span className='fw-semibold'>Cooking Method: </span> {method}</p>
                    </Card.Text>
                    <p><span className='fw-semibold'>Ingredients: </span>{Ingredients}</p>
                    <div className='d-flex align-items-center gap-2'>
                        <p className='fw-semibold'><span className='fw-semibold'>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                        </span></p>
                        <p>{rating}</p>
                    </div>
                    <Button onClick={handleFavoriteBtn} disabled={isFavorite} variant="primary"> <ToastContainer></ToastContainer>Favorite</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipesCard;