import React from 'react'
import s from './style.module.css'


const SocialLink = ({item}) => {
  return (
    <a href={item.path} target='blank' className={s.link}>
        <div className={s.icon}>{item.icon}</div>
        <div>
            <p className={s.text}>{item.text}</p>
            <p className={s.title}>{item.title}</p>
        </div>
    </a>
  )
}

export default SocialLink