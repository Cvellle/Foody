import React, { Component } from 'react'
import {connect} from 'react-redux'
import RandomInSearch from '../components/RandomInSearch'
import { showSearchDesc, homeSrollAction } from '../store/actions'
import './css/App.css'
import './css/mymeals.css'

class Mymeals extends Component {

    componentDidMount() {
      this.setState({searching: true});
      this.props.homeSrollAction(false)
      document.getElementById('homeLink').style.display="block";
      document.getElementById('img').style.display="none";
    }  

    render() {

        return (
          <div  className="category search mymeals">
             { this.props.loading ? null : (
              <div>
                <div className="d-flex justify-content-center mx-auto" ref="list">
                  <div className="flex-wrapper mx-auto">
                      <div className="col-sm-4">
                          <RandomInSearch/> 
                      </div>
                      <div className="col-sm-4">
                          <RandomInSearch/> 
                      </div>
                      <div className="col-sm-4">
                          <RandomInSearch/> 
                      </div>
                  </div>    
                </div>
              </div>
             ) }
          </div>
        )
    }
  
}

const mapStateToProps = ({ loading }) => {
  return { loading }
}

const mapDispatchToProps = { showSearchDesc, homeSrollAction }

export default connect(mapStateToProps, mapDispatchToProps)(Mymeals)