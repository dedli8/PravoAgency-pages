import React, {Component} from 'react';

class Review extends Component {
    render() {
        const {icon, content, avatar, author, field, company} = this.props.review;
        return (
            <div className='review'>
                <div className="icon-wrap">
{icon}</div>
                <p className="main-content">{content}</p>
                {avatar}
                <p className="author">{author}</p>
                <div className="field-wrap">
                <p className="field">{field}</p>
                    <div className="red-dot"></div>
                <div className="company">{company}</div>
                </div>
            </div>
        );
    }
}


export default Review;
