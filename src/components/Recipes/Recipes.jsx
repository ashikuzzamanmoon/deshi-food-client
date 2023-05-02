import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <h2>Recipes</h2>
        </div>
    );
};

export default Recipes;