import React, { Component } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import {setLoading, setFiltered, fetchItems} from './store/actions'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Category from './components/Category'
import Search from './components/Search'
import Meal from './components/Meal'
import Mymeals from './components/Mymeals'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.setLoading(false)
    this.props.fetchItems()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
            <div className="min">
              <Route exact path="/" component={Home}/>
              <Route path="/category" component={Category}/>
              <Route path="/meal/:selected" component={Meal}/>
              <Route path="/search" component={Search}/>
              <Route path="/mymeals" component={Mymeals}/>
            </div>  
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

const mapDispatchToProps = {setLoading, setFiltered, fetchItems}

export default connect(null, mapDispatchToProps)(App)