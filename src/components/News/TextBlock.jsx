import React from "react";


const TextBlock = (props) => {
    const paragraphContents = props.paragraphContents;
    console.log(props)
    

    return (
        <React.Fragment>
            <div className="article-news-text-block-wrap">
                {paragraphContents.map((item) => {
                    return (
                        <React.Fragment key={Math.random()}>
                            <p>{item.content}</p>
                        </React.Fragment>
                    )
                })}
            </div>
        </React.Fragment>
    )
};

export default TextBlock;