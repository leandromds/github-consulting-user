'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import style from 'components/repos/repos.css'

const Repos = ({ title, repos }) => (
  <div className={style.reposBox}>
    <h2 className={style.title}>{title}</h2>
    <ul className={style.reposList}>
      {repos.map((repo, index) => (
        <li key={repo.id}>
          <Link to={{
            pathname: '/repository',
            state: {
              repo: {
                name: repo.name,
                fullName: repo.fullName
              }
            }
          }} >{repo.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  title: 'Repositórios'
}

Repos.propTypes = {
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
