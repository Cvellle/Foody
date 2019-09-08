import React from 'react'
import { connect } from 'react-redux'
import {filterItems} from '../store/actions'



const Meal = props => {
  return (
    <div className="">
      {props.selected && <span> {props.selected.name}</span>}
      {props.selected && <img src={props.selected.image}/>}    
    </div>
  )
}

const mapStateToProps = ({selected}) => ({selected})
const mapDispatchToProps = { filterItems }

export default connect(mapStateToProps, mapDispatchToProps)(Meal)