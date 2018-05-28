'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'
import style from 'components/actions/actions.css'

const Actions = ({getRepos}) => (
  <div className={style.actions}>
    <button onClick={getRepos}>Ver repositórios</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired
}

export default Actions
