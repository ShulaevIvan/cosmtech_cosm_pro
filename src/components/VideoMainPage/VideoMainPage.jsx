import React from "react";

const VideoMainPage = () => {
    return (
        <React.Fragment>
            <section>
                <div class="container">
                    <div class="video-mainpage-title-wrap">
                        <div class="video-mainpage-title">
                            <h2 class="main-color-title">Текст-рыба на русском языке</h2>
                        </div>
                        <div class="video-mainpage-description">
                            <p>
                                Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. 
                                Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
                            </p>
                        </div>
                    </div>
                    <div class="video-mainpage-wrap">
                        <video controls>
                            <source src="video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default VideoMainPage;