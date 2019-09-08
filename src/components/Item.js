import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {selectItem} from '../store/actions'
import './css/category.css'


class Item extends React.Component {
  selecteMe = e => {
    this.props.selectItem(this.props.el)
  }

  render() {
    const selected = this.props.el.id  
    const link = `/meal/${selected.replace(/ /g, '_')}`

    return (
      <div className="col-sm-4 item" onClick={this.selecteMe}>      
        <Link to={link}>
          <img alt="" src={this.props.el.image} />
        </Link>  
        <p className="text-left pl-1">{this.props.el.name}</p>

        {this.props.searchDescritopn ? <div className="searchDescr">
          <div className="text-left pl-1">Category: {this.props.el.category}</div>
          <div className="text-left pl-1">Country: {this.props.el.country}</div>
        </div> : null}
        
       
      </div>
    )
  }
}

const mapStateToProps = ({selected, searchTrue, searchDescritopn}) => ({selected, searchTrue, searchDescritopn})
const mapDispatchToProps = { selectItem }

export default connect(mapStateToProps, mapDispatchToProps)(Item)
