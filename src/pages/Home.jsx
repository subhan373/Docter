import React from 'react';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Top from '../Components/Top';
import Find from '../Components/Find';
import Card from '../Components/Card';
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <div>
     
      <Hero />
      <Find />
      <Top />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
