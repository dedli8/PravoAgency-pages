import React, {Component} from 'react';
import Mainheader from "../mainheader/Mainheader";
import {Consumer} from "../../context";

class Feedbackform extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        cite: '',
        errors: {}
    };
    inputOnChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        const {name, phone, email} = this.state;
        if (name === "") {
            this.setState({errors: {name: "Name is required"}});
            return;
        }
        if (phone === "") {
            this.setState({errors: {phone: "Phone is required"}});
            return;
        }
        if (email === "") {
            this.setState({errors: {email: "Email is required"}});
            return;
        }
    };
    render() {
        const {name, phone, email, cite, errors} = this.state;
        return (
            <Consumer>
                {value => {
                    const {title, key} = value.feedbackTitledata;
                    return (
                        <section className="feedback" id='feedbackform'>
                            <Mainheader title={title} key={key}/>
                            <div className="container">
                                <form className="form" onSubmit={this.onSubmit}>
                                    <div className="left">
                                        <div className="inputs-wrap">
                                            <input type="text" name='name' placeholder='имя*'
                                                   value={name} onChange={this.inputOnChange}
                                                   className={errors.name ? "is-invalid" : ''}/>
                                            <div className="invalid-feedback">{errors.name}</div>
                                            <input type="text"
                                                   placeholder="телефон*" name='phone'
                                                   value={phone}
                                                   onChange={this.inputOnChange} className={errors.phone ? "is-invalid" : ''}/>
                                            <div className="invalid-feedback">{errors.phone}</div>
                                            <input
                                                type="email" placeholder="e-mail*" name='email'
                                                value={email} onChange={this.inputOnChange} className={errors.email ? "is-invalid" : ''}/>
                                            <div className="invalid-feedback">{errors.email}</div>
                                            <input type="text" placeholder="сайт" name='cite'
                                                   value={cite} onChange={this.inputOnChange}/>
                                        </div>
                                        <div className="topic-box">
                                            <p className="main-title">
                                                МЕНЯ ИНТЕРЕСУЕТ <span className="arrow">&#10140;</span></p>
                                            <div className="topic-list">
                                                <label className="checkbox-wrap">Наведение порядка в делах
                                                    <input type="checkbox"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="checkbox-wrap">Правовое сопровождение
                                                    деятельности
                                                    <input type="checkbox"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="checkbox-wrap">Оптимизация договорных
                                                    отношений
                                                    <input type="checkbox"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="checkbox-wrap">Разработка договоров
                                                    <input type="checkbox"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <label htmlFor="extra">Дополнительная информация</label>
                                        <textarea name="extra" id="extra"
                                                  placeholder="Введите текст ..."></textarea>
                                    </div>
                                    <button className="main-btn" type='submit'>Отправить</button>
                                </form>
                            </div>
                        </section>
                    )
                }
                }
            </Consumer>
        )
    }
}

export default Feedbackform;
