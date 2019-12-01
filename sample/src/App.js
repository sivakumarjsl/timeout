import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './timeout'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { LoginPage } from './login/Login'

class App extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

      return(
        <div className="App">    
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route path='/' render={(props) => <Layout {...props} /> } />
            </Switch>
          </BrowserRouter>
        </div>
      )
   }

 }

 App.propTypes = {
     match: PropTypes.any.isRequired,
     history: PropTypes.func.isRequired
 }

export default App