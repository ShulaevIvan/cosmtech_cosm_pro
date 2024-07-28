import React from "react";
import HeroMainPage from "../HeroMainPage/HeroMainPage";
import IndependenceMainPage from "../IndependenceMainPage/IndependenceMainPage";
import VideoMainPage from "../VideoMainPage/VideoMainPage";
import ServicesMainPage from "../ServicesMainPage/ServicesMainPage";
import ProductionMainPage from "../ProductionMainPage/ProductionMainPage";
import ClientsMainPage from "../ClientsMainPage/ClientsMainPage";
import AskedQuestions from "../AskedQuestions/AskedQuestions";
import CraftedSeries from "../CraftedSeries/CraftedSeries";
import ForBuissness from "../ForBuissness/ForBuissness";

const MainPage = (props) => {
    return (
        <React.Fragment>
            <HeroMainPage />
            <VideoMainPage />
            <IndependenceMainPage />
            <ServicesMainPage />
            <ProductionMainPage />
            <ForBuissness />
            <AskedQuestions />
            <CraftedSeries />
            <ClientsMainPage />   
        </React.Fragment>
    )
};

export default MainPage;