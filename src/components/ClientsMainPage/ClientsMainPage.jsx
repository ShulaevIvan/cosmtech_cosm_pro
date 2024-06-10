import React from "react";
import imgholder150 from '../../img/150.png';
import logo1 from '../../img/logo_part1.png';
import logo2 from '../../img/logo_part2.jpg';
import logo3 from '../../img/logo_part3.jpg';
import logo4 from '../../img/logo_part4.jpg';
import logo5 from '../../img/logo_part5.jpg';
import logo6 from '../../img/logo_part6.png';
import logo7 from '../../img/logo_part7.jpg';
import logo8 from '../../img/logo_part8.jpg';
import logo9 from '../../img/logo_part9.jpg';
import logo10 from '../../img/logo_part10.png';

const ClientsMainPage = () => {
    return (
        <React.Fragment>
            <section>
            <div className="container">
                <div className="our-clients-wrap">
                    <div className="our-clients-title-wrap">
                        <h3 className="main-color-title">Партнеры</h3>
                    </div>

                    <div className="our-clients-map-background">
                        <div className="our-clients-list-row">
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo1} alt="client1" />
                                </div>
                            </div>
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo2} alt="client2" />
                                </div>
                            </div>
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo3} alt="client3" />
                                </div>
                            </div>
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo4} alt="client4" />
                                </div>
                            </div>
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo5} alt="client5" />
                                </div>
                            </div>
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo6} alt="client6" />
                                </div>
                            </div>
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo7} alt="client7" />
                                </div>
                            </div>
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo8} alt="client8" />
                                </div>
                            </div>
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo9} alt="client9" />
                                </div>
                            </div>
                            <div className="client-item">
                                <div className="client-item-logo">
                                    <img src={logo10} alt="client10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
};

export default ClientsMainPage;