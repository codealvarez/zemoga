import React from 'react';
import { Layout, Menu } from 'antd';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/home/Home";
export default function General(){
    return (
        <>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </>
    )
    
}