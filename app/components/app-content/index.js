'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'
import style from 'components/app-content/appContent.css'

const AppContent = ({
  userinfo,
  repos,
  handleSearch,
  getRepos
}) => (
  <div className={style.containerApp}>
    <header className={style.header}>
      <strong className={style.title} >Github Consulting User</strong>
      <Search handleSearch={handleSearch} defaultText='Digite o nome do usuário e pressione ENTER' />
    </header>
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    <div className={style.repoBox}>
      {!!userinfo && <Actions getRepos={getRepos} />}
      {!!repos.length &&
        <Repos
          title='Repositórios:'
          repos={repos} />
      }
    </div>
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired
}

export default AppContent
