import React, {Component} from 'react'
import {connect} from 'react-redux'
import './css/random.css'

class RandomInSearch extends Component {

  render() {
    const index = Math.floor((this.props.items.length - 1) * Math.random());
    const el = this.props.items[index];

    return (
      <div className="randomItem">       
        <p className="recomm">Our recommendation</p>
        <img src={el.image} className="mymealsImg"/> 
        <p className="text-left randomName">{el.name}</p>
        <p className="text-left randomDetails">Categoty: {el.category}</p>
        <p className="text-left randomDetails">Country: {el.country}</p>        
      </div>
    )
  }
}

const mapStateToProps = ({items}) => ({items})

export default connect(mapStateToProps)(RandomInSearch)