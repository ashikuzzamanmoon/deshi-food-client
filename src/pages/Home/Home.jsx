import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import ChefCard from '../../components/ChefCard/ChefCard';
import FoodCarousel from '../../components/FoodCarousel/FoodCarousel';
import Categories from '../../components/Categories/Categories';
import Footer from '../../Shared/Footer/Footer';
import Spinner from 'react-bootstrap/Spinner';



const Home = () => {
    // const chefDatas = useLoaderData();

    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="secondary" />

        </div>
    }
    const [load,setLoad]=useState(true)
    const [a,setA]=useState([])
    useEffect(()=>{
        fetch('https://assignment-10-server-site-ashikuzzamanmoon.vercel.app/chef')
      .then(res=>res.json())
      .then(data=>{setA(data)
        setLoad(false)
      })

    
    },[])

    return (
        <div className=''>
            <Banner></Banner>
            <div className=''>
                <h2 className='text-center'>Our Chefs</h2>
                <p className='container text-center '>Our website features renowned chefs from around the world, each with their own unique culinary style and expertise. From traditional comfort food to modern fusion cuisine, our chefs bring a wealth of knowledge and creativity to our recipe collection, providing endless inspiration for home cooks and food lovers alike.</p>
            </div>
           {
            load ?
            <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> 
            </div>:
            <div className='row g-4 py-5 mx-auto cart container'>
            {
                a.map(chefData => <ChefCard key={chefData.id} chefData={chefData}></ChefCard>)
            }
        </div>
           }
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