import React from 'react';
import Chefs from './Chefs/Chefs';
import Feedback from './Feedback/Feedback';
import Review from './Review/Review';

const Home = () => {


    return (
        <div className='container mx-auto'>
            <Chefs/>

             {/*extra sections*/}
            <Feedback/>
            <Review/>
        </div>
    );
};

export default Home;