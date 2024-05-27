import React from "react";
import imgholder150 from '../../img/150.png';

const ClientsMainPage = () => {
    return (
        <React.Fragment>
            <section>
            <div class="container">
                <div class="our-clients-wrap">
                    <div class="our-clients-title-wrap">
                        <h3 class="main-color-title">Наши клиенты</h3>
                    </div>

                    <div class="our-clients-map-background">
                        <div class="our-clients-list-row">
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client1" />
                                </div>
                            </div>
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client2" />
                                </div>
                            </div>
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client3" />
                                </div>
                            </div>
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client4" />
                                </div>
                            </div>
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client5" />
                                </div>
                            </div>
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client6" />
                                </div>
                            </div>
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client7" />
                                </div>
                            </div>
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client8" />
                                </div>
                            </div>
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client9" />
                                </div>
                            </div>
                            <div class="client-item">
                                <h5>Client Title</h5>
                                <div class="client-item-logo">
                                    <img src={imgholder150} alt="client10" />
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