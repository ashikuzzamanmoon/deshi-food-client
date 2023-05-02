import React from 'react';
import { Carousel } from 'react-bootstrap';

const FoodCarousel = () => {
    return (
       <div className='mb-6'>
            <div className='my-5'>
                <h2 className='text-center text-primary'>Our Special Fast Food</h2>
            </div>
            <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded" style={{height: "400px"}}
                        src="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=740&t=st=1683061882~exp=1683062482~hmac=69b8785a042d060c410552aa51dc65f06cdbada35a3ad4cdc66d18e0bb640717"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Burger</h3>
                        <p>Juicy beef patty, melted cheese, fresh toppings, all in bun.</p>
                        <button className='btn btn-primary'>Test Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded" style={{height: "400px"}}
                        src="https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?w=740&t=st=1683062199~exp=1683062799~hmac=bbff7b12a065582e27265c502f929dc8ff92a89bab017e1b689e7400343c1d24"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Sandwich with Bacon</h3>
                        <p>Crispy bacon, sliced bread, fresh fillings, savory sandwich.</p>
                        <button className='btn btn-primary'>Test Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded" style={{height: "400px"}}
                        src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=740&t=st=1683062009~exp=1683062609~hmac=de3e4a62f018c79a635923a3c3221b2b612f16279e7622679836d3956f96ab22"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Pizza</h3>
                        <p>Thin crust, melted cheese, zesty tomato sauce, endless toppings.</p>
                        <button className='btn btn-primary'>Test Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded" style={{height: "400px"}}
                        src="https://img.freepik.com/free-photo/high-angle-delicious-hot-dog-with-onion_23-2149235979.jpg?w=740&t=st=1683063674~exp=1683064274~hmac=f9bb6d2115889dc4f1847f91be7e0bd2ed6bbf39d572346bdc29324fed7164b2"
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Hotdog</h3>
                        <p>Grilled sausage, soft bun, ketchup, mustard, pickles, onions topping.</p>
                        <button className='btn btn-primary'>Test Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded" style={{height: "400px"}}
                        src="https://img.freepik.com/free-photo/refreshing-summer-cocktail-wooden-table-generative-ai_188544-12295.jpg?w=360&t=st=1683063465~exp=1683064065~hmac=16324b6274bf2b0997fbc94a184a51dfba990d0d7e3e1a250ea7aa6e318acaf6"
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h3>Faluda</h3>
                        <p>Rose syrup, vermicelli, basil seeds, milk, ice cream delight.</p>
                        <button className='btn btn-primary'>Test Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded" style={{height: "400px"}}
                        src="https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773774.jpg?w=740&t=st=1683063767~exp=1683064367~hmac=efb3f4073f2c2a74319954cfab551ea5b042ed6db9e1cba4ea4ec540d0b30355"
                        alt="Sixth slide"
                    />
                    <Carousel.Caption>
                        <h3>Noodles</h3>
                        <p>Long, thin, boiled pasta, served in soup or stir-fried.</p>
                        <button className='btn btn-primary'>Test Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
       </div>

    );
};

export default FoodCarousel;