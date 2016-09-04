import React, { Component } from 'react'

import './app.css'
import FarmersAlm from './components/farmers'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <h2>Welcome to Reactddddd</h2>
        <FarmersAlm />
        <p className='app-intro'>
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
