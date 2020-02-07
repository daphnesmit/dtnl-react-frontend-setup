import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

class ReactApp {
  constructor(element) {
    ReactDOM.render(<App />, element)
    module.hot.accept()
  }
}

export default ReactApp
