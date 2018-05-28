'use strict'

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppContent from 'components/app-content'
import ReposContent from 'components/repos-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: []
    }
  }

  getGithubAPIUrl (username, type) {
    const _username = username ? `/${username}` : ''
    const _type = type ? `/${type}` : ''
    return `https://api.github.com/users${_username}${_type}`
  }

  handleSearch (e) {
    const _username = e.target.value
    const keyCode = e.which || e.keyCode
    const enterKey = 13
    if (keyCode === enterKey) {
      fetch(this.getGithubAPIUrl(_username))
        .then(response => response.json())
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: []
          })
        })
    } 
  }

  getRepos () {
    return (e) => {
      const username = this.state.userinfo.login
      fetch(this.getGithubAPIUrl(username, 'repos'))
        .then(response => response.json())
        .then(result => {
          this.setState({
            repos: result.map(repo => ({
              id: repo.id,
              name: repo.name,
              fullName: repo.full_name
            }))
          })
        })
    }
  }

  render () {
    return ( 
      <Router >
        <div>
          <Route exact path='/' render={(props) => (
            <AppContent {...props}
              userinfo={this.state.userinfo}
              repos={this.state.repos}
              handleSearch={(e) => this.handleSearch(e)}
              getRepos={this.getRepos()}
            />
          )} />
          <Route path='/repository' component={ReposContent} />
        </div>
      </Router>       
    )
  }
}

export default App
