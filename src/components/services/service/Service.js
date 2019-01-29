import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ServicesModal from '../modal/ServicesModal';

class Service extends Component {
    render() {
        const {icon, title, contentTitle, contentList, modalData} = this.props.service;
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
        );
    }
}

Service.propTypes = {
    service: PropTypes.object.isRequired
};

export default Service;
