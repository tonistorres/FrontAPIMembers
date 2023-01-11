import React from 'react';
import Table from '../../components/Table/Table';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomeProvider from '../../context/Provider';

function Home() {

  return (
    <HomeProvider >
      <div className='container-fluid'>
        <NavBar />
        <Table />
        <Footer />
      </div>
    </HomeProvider>
  );
}

export default Home;
