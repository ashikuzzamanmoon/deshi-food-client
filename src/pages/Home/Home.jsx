import React from 'react';
import Banner from './Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../components/ChefCard/ChefCard';
import FoodCarousel from '../../components/FoodCarousel/FoodCarousel';
import Categories from '../../components/Categories/Categories';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    const chefDatas = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className=''>
                <h2 className='text-center'>Our Chefs</h2>
                <p className='container text-center '>Our website features renowned chefs from around the world, each with their own unique culinary style and expertise. From traditional comfort food to modern fusion cuisine, our chefs bring a wealth of knowledge and creativity to our recipe collection, providing endless inspiration for home cooks and food lovers alike.</p>
            </div>
            <div className='row g-4 py-5 mx-auto cart container'>
                {
                    chefDatas.map(chefData => <ChefCard key={chefData.id} chefData={chefData}></ChefCard>)
                }
            </div>
            <div className='my-5'>
                <FoodCarousel></FoodCarousel>
            </div>
            <div className='my-5'>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;