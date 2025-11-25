import React from 'react';
import Slider from '../components/slider';
import PopularSection from '../components/PopularSection';
import WinterCareSection from '../components/WinterCareSection';
import MeetOurExpart from '../components/MeetOurExpart';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularSection/>
            <WinterCareSection/>
            <MeetOurExpart/>
        </div>
    );
};

export default Home;