import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import Welcome from './components/Welcome.js'

class App extends Component {

    render(){
        return(
            <div className="App">
                <h1>RECIPE BINDER</h1>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
