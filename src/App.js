import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import { getCurrentUser } from './actions/currentUser.js'

import Navbar from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import UserForm from './components/user/UserForm.js'
import RecipeBinder from './components/recipe/RecipeBinderContainer.js'
import EditCategoriesContainer from './components/category/EditCategoriesContainer.js'

class App extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    render(){
        return(
            <div className="App">
                <Router>
                    <h1>RECIPE BINDER</h1>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/login" render={(routerProps) => <UserForm {...routerProps} />} />
                        <Route exact path="/signup" render={(routerProps) => <UserForm {...routerProps} />} />
                        <Route exact path="/recipes" component={RecipeBinder} />
                        <Route exact path="/categories/edit" component={EditCategoriesContainer} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default connect(null, { getCurrentUser })(App);
