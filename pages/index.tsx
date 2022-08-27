import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <>
      <Head>
        <title>TRANSLATOR APP</title>
      </Head>
      <Navbar name={'TRANSLATOR APP'} />
      <Input />
      <Footer />
    </>
  );
};

export default Index;
