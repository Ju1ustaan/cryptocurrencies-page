import React from 'react'
import s from './style.module.css'

const UserCard = ({ item }) => {
  return (
    <>
    <div className={s.card}>
        <div className={s.top}>
            <div className={s.avatar}>
                <img src={item.image} alt="avatar" />
            </div>
            <div>
                <p className={s.name}>{item.name}</p>
                <p className={s.login}>{item.login}</p>
            </div>
        </div>
        <p className={s.desc}>{item.desc}</p>
    </div>
    </>
  )
}

export default UserCard