import React, {Component} from 'react'
import {connect} from 'react-redux'
import './css/category.css'



class RandomItem extends Component {


  render() {
    const index = Math.floor((this.props.filtered.length - 1) * Math.random());
    const el = this.props.filtered[index];

    return (
      <div className="randomItem">       
        <p className="recomm">Our recommendation</p>
        <img src={el.image}/> 
        <p className="text-center randomName">{el.name}</p>
      </div>
    )
  }
}

const mapStateToProps = ({items, filtered}) => ({items, filtered})


export default connect(mapStateToProps)(RandomItem)