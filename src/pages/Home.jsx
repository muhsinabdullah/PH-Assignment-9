import React from 'react';
import Slider from '../components/slider';
import PopularSection from '../components/PopularSection';
import WinterCareSection from '../components/WinterCareSection';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularSection/>
            <WinterCareSection/>
        </div>
    );
};

export default Home;