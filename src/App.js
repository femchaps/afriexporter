import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Onboarding from './pages/onboarding/'

const App = () => {
  return (
    <div style={{fontFamily: 'Segoe UI'}}>
    <Router>
      <Switch>
        <Route path="*" component={Onboarding}/>
      </Switch>
    </Router>
    </div>
    
  )
}

export default App
