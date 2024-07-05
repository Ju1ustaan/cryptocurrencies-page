import React from 'react'
import s from './style.module.css'
import { Ethereum, Bitcoin, Litecoin, GooglePlayIcon, AppStoreIcon } from '../../assets/vectors/Vectors'
import UserCard from "../../components/userCard/UserCard";
import AdalinaImg from '../../assets/images/avatar-adalina.png'
import AlexanderImg from '../../assets/images/avatar-alexander.png'
import LorenzoImg from '../../assets/images/avatar-lorenzo.png'
import RushanaImg from '../../assets/images/avatar-rushana.png'
import Subscribers from '../../components/Subscribers/Subscribers';
import JoinBtn from '../../components/JoinBtn/JoinBtn';
import SocialLink from '../../components/SocialLink/SocialLink';


const social = [
    {
        title: 'Google play',
        text: 'get in on',
        icon: <GooglePlayIcon />,
        path: 'https://play.google.com/store/games?hl=ru'
    },
    {
        title: 'App Store',
        text: 'Available on the',
        icon: <AppStoreIcon />,
        path: 'https://www.apple.com/app-store/'
    },
]

const users = [
    {
        image: LorenzoImg,
        name: 'Lorenzo',
        login: '@lorenzoo',
        desc: 'Amazing Telegram bot! Provides real-time crypto prices and news'
    },
    {
        image: AlexanderImg,
        name: 'Alexander',
        login: '@alex_x',
        desc: 'Superb cryptocurrency bot! Quick updates and reliable datanews'
    },
    {
        image: AdalinaImg,
        name: 'Adalina',
        login: '@ada',
        desc: 'Must-have bot for crypto traders. Accurate signals and analysis'
    },
    {
        image: RushanaImg,
        name: 'Rushana',
        login: '@Hana',
        desc: 'Efficient and user-friendly bot. Simplifies crypto trading tasks'
    },
]


const subs = [
    {
        value: 20123,
        text: 'subscribers'
    },
    {
        value: 19500,
        text: 'successful cases'
    },
    {
        value: 4.8,
        text: 'rating'
    },
]

const MainPage = () => {
    return (
        <div className={s.main}>
            <div className={`${s.coin} ${s.bitcoin}`}><Bitcoin /></div>
            <div className={`${s.coin} ${s.litecoin}`}><Litecoin /></div>
            <div className={`${s.coin} ${s.ethereum}`}><Ethereum /></div>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.wrapperLeft}>
                        <h1 className={s.title}>
                            Do you want to Learn more About cryptocurrencies <span>quickly and easily ?</span>
                        </h1>
                        <p className={s.subtitle}>
                            Subscribe to our channel to learn more
                        </p>

                        <div className={s.subscribers}>
                            {subs.map((el) => <Subscribers item={el} key={el.text} />)}
                        </div>

                        <div className={s.btn}><JoinBtn /></div>

                        <div className={s.socials}>
                            {social.map((el) => <SocialLink item={el} key={el.title} />)}
                        </div>
                    </div>
                    <div className={s.wrapperRight}>
                        {users.map((el) => <UserCard item={el} key={el.login} />)}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MainPage