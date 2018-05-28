'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'
import style from 'components/user-info/user-info.css'

const UserInfo = ({userinfo}) => (
  <div className={style.userInfo}>
    <div className={style.imageBox}>
      <img className={style.image} src={userinfo.photo} alt='' />
    </div>
    <div className={style.infoBox}>
      <h1 className={style.title}>
        <a className={style.link} href={`https://github.com/${userinfo.login}`} target='_blank' >
          {userinfo.username}
        </a>
      </h1>
      <ul className={style.reposInfo}>
        <li>Repositórios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
