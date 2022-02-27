import React from 'react';
import Footer from '../../Footer/Footer';
import Iteams from '../../Items/Iteams';
import Header from '../Header/Header/Header';
import Support from '../Support/Support';
import Testimonials from '../Tastimonal/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Iteams></Iteams>
            <Support></Support>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;