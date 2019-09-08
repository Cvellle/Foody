import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchItems, filterItems} from '../store/actions'
import './css/category.css'



class RandomItem extends Component {

  componentDidMount() {
    // this.props.fetchItems()
  }

  componentWillUnmount() {
      
  }


  render() {
    const index = Math.floor((this.props.items.length - 1) * Math.random());
    const el = this.props.filtered[index];

    return (
      <div className="randomItem">       
        <p>Our recommendation</p>
        <img src={el.image}/> 
        <p className="text-center randomName">{el.name}</p>
      </div>
    )
  }
}

const mapStateToProps = ({items, filtered}) => ({items, filtered})

const mapDispatchToProps = { fetchItems, filterItems }


export default connect(mapStateToProps, mapDispatchToProps)(RandomItem)