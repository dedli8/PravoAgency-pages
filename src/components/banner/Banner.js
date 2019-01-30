import React from 'react';
import {Link} from 'react-router-dom';

const Banner = () => {
        return (
            <section className="banner">
                <div className="container">
                    <div className="banner-wrap">
                    <h1 className="main-header">Правовое
                        сопровождение
                        малого ИТ-бизнеса</h1>
                    <p className="text">Зачастую интернет-проекты, разработчики, маркетологи, дизайнеры, стартаперы и
                        другие
                        IT-специалисты не уделяют должного внимания правовым аспектам своей деятельности.</p><p
                    className="text">Но <strong>документы должны быть в порядке </strong>, и мы в этом поможем.</p>
                    <Link to="/services" className="main-btn">услуги и цены</Link>
                    <Link to="/feedbackform" className="btn-to-feedbackform">
                        <div className="triangle">
                            <div>
                            </div>
                        </div>
                    </Link>
                </div>
                </div>
            </section>
        )
};

export default Banner;
