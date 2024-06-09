import React from "react";


const YandexMap = () => {
    return (
        <React.Fragment>
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9a3094a0d3acf49f8de23d10b6f24ef1ff95d76a1cce0e8e7f9ed4255f854a32&amp;source=constructor" 
            width="100%" 
            height="400" 
            frameBorder="0">
          </iframe>
        </React.Fragment>
    )
};


export default YandexMap;