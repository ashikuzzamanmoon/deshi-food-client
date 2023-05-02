import React from 'react';

const Banner = () => {
    return (
        <div className='my-5 d-flex flex-column flex-md-row align-items-center'>
            <div>
                <img src="https://i.ibb.co/SvXZ2FK/food-banner.png" alt="" />
            </div>
            <div>
                <h2 className='fs-1 fw-bold mx-4'>
                    Bringing the flavors of the world <br /> <span className='text-primary'>to your kitchen</span>
                </h2>
                <p className='fw-semibold mx-4'>
                    Explore global flavors with Global Palate. Discover authentic recipes curated by our <br /> expert chefs, perfect for both seasoned home cooks and curious beginners. Join <br /> our community of food lovers today!
                </p>
                <button className='btn btn-primary mx-4'>Explore Now</button>
            </div>
        </div>
    );
};

export default Banner;