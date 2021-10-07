import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Project from './pages/Project'
import Setting from './pages/Setting'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
       
        <Switch>
          <Route path='/project'  component={Project}/>
          <Route path='/setting'  component={Setting}/>
        </Switch>
      </Router>
          
    </>
  )
}

export default App
