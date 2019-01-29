import React from 'react';

const NewService = ({icon, title, contentTitle, contentList, modalData}) => {
    return (
        <div className='service'>
            <div className="title-box">
                {icon}
                <h3 className="main-title">{title}</h3>
            </div>
            <div className="main-content">
                <p className="content-title">{contentTitle}</p>
                <ul className="content-list">
                    {contentList.map((contactListItem, index) => {
                        return <li key={ index }>{contactListItem}</li>;
                    })}
                </ul>
            </div>
            <ServicesModal modalData={modalData}/>
        </div>
};

export default NewService;
