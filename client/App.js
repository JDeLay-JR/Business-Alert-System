
import React from 'react'
import {NavBar, Footer} from './components'
import Routes from './routes'


const App = () => {
  return (
    <div className="appContainerGrid">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
