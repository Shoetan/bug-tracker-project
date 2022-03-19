import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Navbar from './navbar'
import Signup from './Signup'

function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route exact path="/">
            <Signup />
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path = "/navbar">
            <Navbar />
          </Route>

         
        </Switch>

      </Router>

    </>

  )
}

export default App;