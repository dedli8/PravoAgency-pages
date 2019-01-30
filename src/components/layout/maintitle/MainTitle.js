import React from 'react';
const MainTitle = (props) => {
        const {title, description} = props;
        return (
            <div className="container">
            <div className="title-wrap">
                <h2 className="main-header section-title">{title}</h2>
                <p className="title-description">{description}</p>
            </div>
            </div>
        );
    }
export default MainTitle;
