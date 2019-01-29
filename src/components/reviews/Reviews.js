import React, {Component} from 'react';
import Mainheader from '../mainheader/Mainheader'
import Review from './review/Review'
import Download from './icons/Download'
import {Consumer} from "../../context";

class Reviews extends Component {
    state={
        showItems: 3
    };
    handleShowMore = (reviewsLength) => {
        this.setState({
            showItems:
                this.state.showItems >= reviewsLength ?
                    this.state.showItems : this.state.showItems + 3
        })
    };
    render() {
        return(
            <Consumer>
                {value => {
                    const {reviews} = value;
                    const {title, description, strong, key} = value.reviewsTitledata;
                    const items = reviews.slice(0, this.state.showItems);
                    return (
                        <section className='reviews-section' id='reviews'>
                            <Mainheader title={title} description={description} strong={strong} key={key}/>
                            <div className="container">
                                <div className="reviews-wrap">
                                    {items.map((review, index) => <Review review={review} key={index}/>)}
                                </div>
                                <div className="download-more" onClick={this.handleShowMore.bind(this, reviews.length)}><Download/><span>загрузить еще</span></div>
                            </div>
                        </section>
                    );
                }
                }
            </Consumer>
        )
    }
}


export default Reviews;
