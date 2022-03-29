import React from 'react';
import Bannar from './Bannar/Bannar';
import SliceServices from './SliceService/SliceServices';
import Subscrive from './Subscrive/Subscrive';
import Teachers from './Teacher/Teachers';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <SliceServices></SliceServices>
            <Teachers></Teachers>
            <Subscrive></Subscrive>
        </div>
    );
};

export default Home;