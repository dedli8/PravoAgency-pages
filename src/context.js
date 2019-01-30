import React, {Component} from 'react';
import Avatar1 from './assets/img/avatar1.jpg'
import Avatar2 from './assets/img/avatar2.jpg'
import YT from './components/reviews/icons/YT'
import Quotes from './components/reviews/icons/Quotes'

const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type){
        case "TOGGLE_LANG":
            return{
                ...state, uaLang: !state.uaLang
              };
        default: return state;
    }
}
export class Provider extends Component{
    state={
        reviews: [
            {
                icon: <Quotes/>,
                content: "Главная тема для меня – любовь. Мы все хотим ее, но не знаем как получить, поэтому все, что мы делаем, — это всего лишь попытки найти счастье.",
                avatar: <img alt="avatar" src={Avatar1} className='avatar'/>,
                author: "Алексей Фёдоров",
                field: "CEO",
                company: "deco.agency"
            },
            {
                icon: <Quotes/>,
                content: "Главная тема для меня – любовь. Мы все хотим ее, но не знаем как получить, поэтому все, что мы делаем, — это всего лишь попытки найти счастье.",
                avatar: <img alt="avatar" src={Avatar2} className='avatar'/>,
                author: "Артур Оруджалиев",
                field: "CEO",
                company: "AIN.ua"
            },
            {
                icon: <YT/>,
                content: <iframe title="video" className='yt-container' src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>,
                author: "Григорий Маленко",
                field: "CEO",
                company: "deco.agency"
            },
            {
                icon: <Quotes/>,
                content: "Главная тема для меня – любовь. Мы все хотим ее, но не знаем как получить, поэтому все, что мы делаем, — это всего лишь попытки найти счастье.",
                avatar: <img alt="avatar" src={Avatar1} className='avatar'/>,
                author: "Алексей Фёдоров",
                field: "CEO",
                company: "deco.agency"
            },
            {
                icon: <Quotes/>,
                content: "Главная тема для меня – любовь. Мы все хотим ее, но не знаем как получить, поэтому все, что мы делаем, — это всего лишь попытки найти счастье.",
                avatar: <img alt="avatar" src={Avatar2} className='avatar'/>,
                author: "Артур Оруджалиев",
                field: "CEO",
                company: "AIN.ua"
            },
            {
                icon: <YT/>,
                content: <iframe title="video" className='yt-container' src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>,
                author: "Григорий Маленко",
                field: "CEO",
                company: "deco.agency"
            },
            {
                icon: <Quotes/>,
                content: "Главная тема для меня – любовь. Мы все хотим ее, но не знаем как получить, поэтому все, что мы делаем, — это всего лишь попытки найти счастье.",
                avatar: <img alt="avatar" src={Avatar1} className='avatar'/>,
                author: "Алексей Фёдоров",
                field: "CEO",
                company: "deco.agency"
            },
            {
                icon: <Quotes/>,
                content: "Главная тема для меня – любовь. Мы все хотим ее, но не знаем как получить, поэтому все, что мы делаем, — это всего лишь попытки найти счастье.",
                avatar: <img alt="avatar" src={Avatar2} className='avatar'/>,
                author: "Артур Оруджалиев",
                field: "CEO",
                company: "AIN.ua"
            },
            {
                icon: <YT/>,
                content: <iframe title='video' className='yt-container' src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>,
                author: "Григорий Маленко",
                field: "CEO",
                company: "deco.agency"
            }
        ],
        uaLang: false,
        dispatch: action =>{
            this.setState(state => reducer(state, action))
        }
    };
    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;
