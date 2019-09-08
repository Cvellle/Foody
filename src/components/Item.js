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
        <p>{this.props.el.name}</p>
      </div>
    )
  }
}

const mapStateToProps = ({selected}) => ({selected})
const mapDispatchToProps = { selectItem }

export default connect(mapStateToProps, mapDispatchToProps)(Item)
