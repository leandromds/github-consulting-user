'use strict'

import React, {Component} from 'react'
import { PropTypes } from 'prop-types'
import Search from 'components/search'
import SingleCommitRow from 'components/single-commit'
import style from 'components/repos-content/reposContent.css'

class RepoContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      repoinfo: [],
      filterText: ''
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const enterKey = 13
    if (keyCode === enterKey) {
      this.setState({
        filterText: value
      })
    }
  }

  componentWillMount () {
    this.getRepoCommits()
  }

  getGithubAPIurl (RepoFullName) {
    const _RepoFullName = RepoFullName ? `/${RepoFullName}/commits` : ''
    return `https://api.github.com/repos${_RepoFullName}`
  }

  getRepoCommits () {
    const RepoFullName = this.props.location.state.repo.fullName
    fetch(this.getGithubAPIurl(RepoFullName))
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.setState({
          repoinfo: result.map(data => ({
            sha: data.sha,
            name: data.commit.author.name,
            date: data.commit.author.date,
            photo: data.author,
            message: data.commit.message,
            url: data.html_url
          }))
        })
      })
  }

  render () {
    const repoinfo = this.state.repoinfo
    const filterText = this.state.filterText
    const RepoFullName = this.props.location.state.repo.fullName
    const commitsFiltered = []

    repoinfo.forEach(commit => {
      if (commit.message.indexOf(filterText) === -1) {
        return
      }
      commitsFiltered.push(
        <SingleCommitRow
          key={commit.sha}
          message={commit.message}
          url={commit.url}
          name={commit.name}
          date={commit.date} />
      )
    })

    return (
      <div>
        <header className={style.header}>
          <h1 className={style.title}>{ RepoFullName }</h1>
          <Search handleSearch={(e) => this.handleSearch(e)} defaultText='Digite um termo para filtrar os commits e pressione ENTER' />
        </header>
        <div className={style.commitsGroups}>
          <h2>Lista de Commits dois</h2>
          <ul>
            {commitsFiltered}
          </ul>
        </div>
      </div>
    )
  }
}

export default RepoContent
