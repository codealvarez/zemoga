import React from 'react';
import { Layout, Menu } from 'antd';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/home/Home";
import Past from "../pages/past/Past";
import {Switch, Route} from "react-router-dom";
import HowWorks from '../pages/howWorks/HowWorks';
import Error404 from '../pages/error404/Error404';
export default function General(props){
    return (
        <>
            <Header></Header>
            <Switch>
                <Route exact path="/past-trials">
                    <Past />
                </Route>
                <Route exact path="/how-it-works">
                    <HowWorks />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/">
                    <Error404 />
                </Route>
            </Switch>
            <Footer></Footer>
        </>
    )
    
}