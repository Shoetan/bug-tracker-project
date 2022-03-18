import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
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
         
        </Switch>

      </Router>


    </>

  )
}

export default App;