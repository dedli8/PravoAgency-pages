import React, {Component} from 'react';
import Maintitle from '../layout/maintitle/Maintitle'
import Service from './service/Service';
import {Consumer} from "../../context";

class Services extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {services} = value;
                    const {title, description, strong, key} = value.servicesTitledata;
                    return (
                        <section className="services" id="services">
                            <Maintitle title={title} description={description} strong={strong} key={key}/>
                            <div className="container">
                                <div className="services-wrap">
                                    {services.map((service, index) =>
                                        (<Service service={service} key={index}/>))}
                                    <div className="line-throw"></div>
                                </div>
                            </div>
                        </section>
                    );
                }
                }
            </Consumer>
        )
    }
}

export default Services;
