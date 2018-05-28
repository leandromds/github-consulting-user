'use strict'
import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/single-commit/singleCommit.css'

const SingleCommitRow = ({
  message,
  url,
  name,
  date
}) => {
  const regx = /(.+)T(.+)Z/
  const result = regx.exec(date)
  const _date = result[1].split('-').reverse().join('-')
  const _hour = result[2]

  return (
    <li className={style.singleCommit}>
      <a href={url} target='_blank'>
        <p className={style.infoCommit}>
          <span className={style.name}>{name}</span>
          <span className={style.date}> {_date} - {_hour} hrs</span>
        </p>
        <div className={style.message}>{ message }</div>
      </a>
    </li>
  )
}

SingleCommitRow.propTypes = {

}

export default SingleCommitRow
