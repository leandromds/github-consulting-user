'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'
import style from 'components/search/search.css'

const Search = ({ handleSearch, defaultText }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder={defaultText}
      onKeyUp={handleSearch} />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  defaultText: PropTypes.string.isRequired
}

export default Search
