import React from 'react'
import s from './style.module.css'
import { reduceValue } from './helper'


const Subscribers = ({ item }) => {
    return (
        <div>
            <p className={s.values}>
                {item.text === 'rating' ? `${item.value}/5` : reduceValue(item.value)}
            </p>
            <p className={s.text}>
                {item.text}
            </p>
        </div>

    )
}

export default Subscribers