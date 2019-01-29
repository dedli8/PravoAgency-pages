import React, {Component} from 'react';

class ServicesModal extends Component {
    render() {
        const {title, text, price1, price2, price3, num1, num2, num3, modalStyle, redLineStyle, redArrowStyle} = this.props.modalData;
        return (
            <div className='services-modal' style={modalStyle}>
                <div className="red-line" style={redLineStyle}><div className="arrow" style={redArrowStyle}></div></div>
                <div className="block">
                    <p className="name">Услуга</p>
                    <div className="main-content">
                        <h3 className="main-title">{title}</h3>
                        <p className="text">{text}</p>
                    </div>
                </div>
                <div className="block">
                    <p className="name name-price">Цена</p>
                    <div className="main-content">
                        <div className="price-wrap">
                        <div className="price-item">
                            <div className="num">{num1}</div>
                            <div className="employee">Сотрудников</div>
                            <div className="price">от <span>{price1} <small>грн.</small></span></div>
                        </div>
                        <div className="price-item">
                            <div className="num">{num2}</div>
                            <div className="employee">Сотрудников</div>
                            <div className="price">от <span>{price2} <small>грн.</small></span></div>
                        </div>
                        <div className="price-item">
                            <div className="num">{num3}</div>
                            <div className="employee">Сотрудников</div>
                            <div className="price">от <span>{price3} <small>грн.</small></span></div>
                        </div>
                        </div>
                        <button className="main-btn">заказать</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesModal;
