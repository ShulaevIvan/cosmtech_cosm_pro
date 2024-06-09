import React from "react";
import HeroMainPage from "../HeroMainPage/HeroMainPage";
import IndependenceMainPage from "../IndependenceMainPage/IndependenceMainPage";
import VideoMainPage from "../VideoMainPage/VideoMainPage";
import ServicesMainPage from "../ServicesMainPage/ServicesMainPage";
import ProductionMainPage from "../ProductionMainPage/ProductionMainPage";
import ClientsMainPage from "../ClientsMainPage/ClientsMainPage";

const MainPage = () => {
    return (
        <React.Fragment>
            <HeroMainPage />
            <VideoMainPage />
            <IndependenceMainPage />
            <ServicesMainPage />
            <ProductionMainPage />
            <ClientsMainPage />   
        </React.Fragment>
    )
};

export default MainPage;